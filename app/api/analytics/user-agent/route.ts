import { NextRequest, NextResponse } from "next/server";
import UAParser from "ua-parser-js";

export async function POST(req: NextRequest) {
    try {
        const requestUrl = new URL(req.url);

        const data = await req.json();
        const referrer = req.headers.get("referer") || "direct";
        const userAgentString = req.headers.get("user-agent") || "";
        let ipAddress = req.headers.get("x-forwarded-for") ||
            req.headers.get("x-real-ip");
        let isLocalhost = ipAddress === "::1";
        ipAddress = isLocalhost ? "199.116.242.249" : ipAddress;

        const location = ipAddress ? await fetchLocation(ipAddress) : null;
        const parser = new UAParser(userAgentString);
        const agent = parser.getResult();

        const analyticsData = {
            ...data,
            atUrl: referrer,
            browser: `${agent.browser.name} ${agent.browser.version}`,
            os: `${agent.os.name} ${agent.os.version}`,
            device: agent.device.model
                ? `${agent.device.vendor} ${agent.device.model}`
                : "unknown",
            ipAddress: ipAddress,
            location: location,
            isDevelopment: isLocalhost,
        };

        console.log("analyticsData:", analyticsData);
        return NextResponse.json(analyticsData);
    } catch (error: any) {
        console.log("error", error);
        return NextResponse.json({ error: error.message });
    }
}

const fetchLocation = async (ipAddress: string) => {
    const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
    const data = await response.json();
    return data;
};
