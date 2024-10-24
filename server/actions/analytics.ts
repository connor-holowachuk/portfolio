"use server";
import Mixpanel from "mixpanel";

export async function trackEvent(
	eventName: string,
	properties: Record<string, any>,
) {
	try {
		const mixpanel = Mixpanel.init(
			process.env.MIXPANEL_TOKEN as string,
		);

		const environmentMode = process.env.ENV_MODE;

		mixpanel.track(eventName, {
			...properties,
			environment_mode: environmentMode,
		});
		return true;
	} catch (err: any) {
		console.error("Error occurred while tracking event:", err);
		return err.message ?? "Error occurred while tracking event";
	}
}
