"use server";
import React from "react";

// Import components
import { Section } from "./section-wrapper";
import LiveDemoContent from "@/components/landing-page/sections/live-demo-content";

// Define and import types
type LiveDemoSectionProps = {};

const LiveDemoSection = async ({}: LiveDemoSectionProps) => {
    const assistantId = "asst_1jV5g1q4EQoTUbkWSVGRLiXK";
    const voiceId = "72226ae9-0009-4eb6-9fa8-66c991388cab";
    const profileImgAddress = "";

    return (
        <Section
            outerClassName="border-b border-b-black/10 px-4 md:px-0 py-0"
            className="flex h-screen w-full flex-col items-center py-0"
        >
            <LiveDemoContent />
        </Section>
    );
};

export default LiveDemoSection;
