"use server";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

// Import components
import { Label } from "@/components/ui/label";
import { Section } from "./section-wrapper";
import { InView } from "@/components/ui/in-view";

// Import icons
import { Trophy, ChevronRight } from "lucide-react";

// Import utils
import { cn } from "@/lib/utils";

// Import actions

// Import providers

// Define and import types
type DemoSectionProps = {};

const DemoSection = async ({}: DemoSectionProps) => {
    return (
        <Section
            outerClassName="border-b border-b-black/10 px-4 md:px-0"
            className="flex w-full flex-col items-center py-32 sm:py-48 lg:py-16"
        >
            <InView
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 100,
                        filter: "blur(12px)",
                    },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -10px 0px" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div className="flex w-full flex-col items-center pb-4">
                    <div className="flex w-full flex-col items-center text-center">
                        <Label className="text-md font-sans font-normal text-black/50">
                            Copy and Paste Yourself
                        </Label>
                        <Label className="w-full font-serif text-4xl font-normal leading-[52px] text-black md:w-auto">
                            20x your availability.
                        </Label>
                    </div>
                </div>
            </InView>
            <div className="flex w-full flex-col items-center py-12 text-center">
                <InView
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 100,
                            filter: "blur(12px)",
                        },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    viewOptions={{ margin: "0px 0px -10px 0px" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="relative flex w-full flex-row items-center">
                        <div className="absolute -left-64 -top-12 hidden md:block">
                            <Image
                                src="/images/hero/illustrations/ill-person-0.png"
                                alt="Demo section 1"
                                width={220}
                                height={220}
                            />
                        </div>
                        <div className="flex w-full flex-col text-left md:max-w-[380px] md:text-center">
                            <Label className="pb-1 font-serif text-2xl font-normal leading-7 text-black">
                                Clone yourself.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Our onboarding AI will replicate your voice,
                                persona, and face in 6 minutes.
                            </Label>
                        </div>
                        <div className="block md:hidden">
                            <Image
                                src="/images/hero/illustrations/ill-person-0.png"
                                alt="Demo section 1"
                                width={220}
                                height={220}
                            />
                        </div>
                    </div>
                </InView>
                <InView
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 100,
                            filter: "blur(12px)",
                        },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    viewOptions={{ margin: "0px 0px -10px 0px" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="relative flex w-full flex-row items-center py-8 md:py-0">
                        <div className="absolute -right-64 -top-12 hidden md:block">
                            <Image
                                src="/images/hero/illustrations/ill-mail-0.png"
                                alt="Demo mail"
                                width={220}
                                height={220}
                            />
                        </div>
                        <div className="block md:hidden">
                            <Image
                                src="/images/hero/illustrations/ill-mail-0.png"
                                alt="Demo section 1"
                                width={220}
                                height={220}
                            />
                        </div>
                        <div className="flex w-full flex-col items-end text-right md:max-w-[380px] md:items-center md:text-center">
                            <div className="my-3 hidden h-24 w-[1px] border-l border-dashed border-black/20 md:block"></div>
                            <Label className="pb-1 font-serif text-2xl font-normal leading-7 text-black">
                                Share your DNAi.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Instruct and deploy your DNAi to gather
                                information from your clients.
                            </Label>
                        </div>
                    </div>
                </InView>
                <InView
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 100,
                            filter: "blur(12px)",
                        },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    viewOptions={{ margin: "0px 0px -10px 0px" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="relative flex w-full flex-row items-center py-8 md:py-0">
                        <div
                            className="absolute -left-64 -top-12 hidden md:block"
                            style={{ transform: `scaleX(-1)` }}
                        >
                            <Image
                                src="/images/hero/illustrations/ill-person-3.png"
                                alt="Demo section 1"
                                width={220}
                                height={220}
                            />
                        </div>
                        <div className="flex w-full flex-col items-start text-left md:max-w-[380px] md:items-center md:text-center">
                            <div className="my-3 hidden h-24 w-[1px] border-l border-dashed border-black/20 md:block"></div>
                            <Label className="pb-1 font-serif text-2xl font-normal leading-7 text-black">
                                Your clients talk to your DNAi.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Our onboarding AI will replicate your voice,
                                persona, and face in just a few minutes.
                            </Label>
                        </div>
                        <div className="block md:hidden">
                            <Image
                                src="/images/hero/illustrations/ill-person-3.png"
                                alt="Demo section 1"
                                width={220}
                                height={220}
                            />
                        </div>
                    </div>
                </InView>
                <InView
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 100,
                            filter: "blur(12px)",
                        },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    viewOptions={{ margin: "0px 0px -10px 0px" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="relative flex w-full flex-row items-center py-8 md:py-0">
                        <div
                            className="absolute -right-64 top-12 hidden md:block"
                            style={{ transform: `scaleX(-1)` }}
                        >
                            <Image
                                src="/images/hero/illustrations/ill-person-2.png"
                                alt="Demo section 1"
                                width={220}
                                height={220}
                            />
                        </div>
                        <div className="block md:hidden">
                            <Image
                                src="/images/hero/illustrations/ill-person-2.png"
                                alt="Demo section 1"
                                width={220}
                                height={220}
                            />
                        </div>
                        <div className="flex w-full flex-col items-end text-right md:max-w-[380px] md:items-center md:text-center">
                            <div className="my-3 hidden h-24 w-[1px] border-l border-dashed border-black/20 md:block"></div>
                            <Label className="pb-1 font-serif text-2xl font-normal leading-7 text-black">
                                Get facts-only summaries.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Our onboarding AI will replicate your voice,
                                persona, and face in just a few minutes.
                            </Label>
                        </div>
                    </div>
                </InView>
                <InView
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 100,
                            filter: "blur(12px)",
                        },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    viewOptions={{ margin: "0px 0px -10px 0px" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="relative flex w-full flex-row items-center py-8 md:py-0">
                        <div className="flex w-full flex-col items-start text-left md:max-w-[380px] md:items-center md:text-center">
                            <div className="my-3 hidden h-24 w-[1px] border-l border-dashed border-black/20 md:block"></div>
                            <Label className="font-serif text-2xl font-normal text-black">
                                Build relationships.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Our onboarding AI will replicate your voice,
                                persona, and face in just a few minutes.
                            </Label>
                            <div className="-my-16 w-full">
                                <Image
                                    src="/images/hero/illustrations/ill-hands-0.png"
                                    alt="Demo section 1"
                                    width={220}
                                    height={220}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </InView>
                <InView
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 100,
                            filter: "blur(12px)",
                        },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    viewOptions={{ margin: "0px 0px -10px 0px" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="relative mt-12 flex w-full flex-col items-center">
                        <div className="flex max-w-[380px] flex-col items-center py-8">
                            <Label className="font-serif text-2xl font-normal text-black">
                                Watch the demo.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Explore how to clone yourself, share your DNAi,
                                and engage clients.
                            </Label>
                        </div>
                        <div className="h-[400px] w-full max-w-[800px] overflow-hidden rounded-lg">
                            <iframe
                                width="800"
                                height="400"
                                src="https://www.youtube.com/embed/6hD43Z6mlOM"
                                title="Clone yourself with DNAi"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </InView>
                <div className="flex w-full flex-col justify-center gap-2 gap-x-2 py-6 sm:flex-row">
                    <Link
                        href="/get-started"
                        className="flex h-12 w-full cursor-pointer flex-row items-center justify-center rounded-md bg-black px-6 shadow-none transition-all duration-200 hover:opacity-80 hover:shadow-lg md:w-auto"
                    >
                        <Label className="cursor-pointer whitespace-nowrap font-sans text-lg font-normal text-white">
                            Clone yourself
                        </Label>
                    </Link>
                    <Link
                        href="/demo"
                        className="group flex h-12 w-full cursor-pointer flex-row items-center justify-center rounded-md border border-black/10 bg-white/10 px-6 backdrop-blur-lg transition-all duration-200 ease-in-out hover:bg-black/10 md:w-auto"
                    >
                        <Label className="cursor-pointer whitespace-nowrap font-sans text-lg font-normal text-black/50 transition-all duration-200 ease-in-out group-hover:text-black">
                            Try the demo
                        </Label>
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default DemoSection;
