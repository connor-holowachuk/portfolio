"use server";
import React from "react";
import Link from "next/link";

// Import components
import { Label } from "@/components/ui/label";
import { Section } from "./section-wrapper";

// Define and import types
type SummariesSectionProps = {};

const SummariesSection = async ({}: SummariesSectionProps) => {
    return (
        <div
            className="relative w-full bg-none lg:min-h-[800px] lg:bg-[url(/images/hero/tablet-summary.png)]"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            id="summaries-section"
        >
            <Section
                outerClassName="relative z-10 h-full"
                className="flex h-full w-full flex-row pb-0 pt-24 sm:pt-32 lg:py-24"
            >
                <div className="flex h-full w-full flex-col items-center gap-4 gap-y-4 lg:w-1/2 lg:items-start">
                    <div className="flex w-full flex-col items-center px-4 text-center md:px-8 lg:flex-grow lg:items-start lg:px-0 lg:text-left">
                        <Label className="text-md pb-1 font-sans font-normal text-black/50">
                            90 Second Summaries
                        </Label>
                        <Label className="font-serif text-3xl font-normal leading-[48px] text-black md:text-4xl md:leading-[56px]">
                            Concise,{" "}
                            <span className="rounded-lg border border-white/50 bg-primary/90 px-3 py-0.5 font-sans text-white shadow-lg shadow-black/10 backdrop-blur-md">
                                actionable
                            </span>{" "}
                            summaries for{" "}
                            <span className="rounded-lg border border-white/50 bg-[#EDB444] px-3 py-0.5 font-sans text-white shadow-lg shadow-black/10 backdrop-blur-md">
                                quick
                            </span>{" "}
                            &{" "}
                            <span className="rounded-lg border border-white/50 bg-[#44ED73] px-3 py-0.5 font-sans text-white shadow-lg shadow-black/10 backdrop-blur-md">
                                personalized
                            </span>{" "}
                            care
                        </Label>
                    </div>
                    <div className="mt-4 flex w-full flex-col px-4 text-center md:w-2/3 md:px-8 lg:mt-auto lg:px-0 lg:text-left">
                        <Label className="font-serif text-xl font-normal text-black">
                            Each session is summarized in a concise, actionable
                            format that is easy to understand and act upon.
                        </Label>
                        <div className="flex w-full flex-col justify-center gap-2 gap-x-2 py-6 sm:flex-row lg:justify-start">
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
                </div>
            </Section>
        </div>
    );
};

export default SummariesSection;
