"use server";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import components
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Section } from "./section-wrapper";
import { InView } from "@/components/ui/in-view";

// Import icons
import { Trophy, ChevronRight } from "lucide-react";

// Import utils
import { cn } from "@/lib/utils";

// Import actions

// Import providers

// Define and import types
type SectionOneProps = {};

type HighlightSectionProps = {
    title: string;
    description: string;
    imgUri: string;
};

const sections: HighlightSectionProps[] = [
    {
        title: "Share Your DNAi",
        description:
            "Once you’ve created your DNAi, you can share it with your clients through a simple link.",
        imgUri: "https://images.unsplash.com/photo-1675270855267-3c73bfd13849?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Clients Get Unlimited Access",
        description:
            "Your clients have on-demand access to your DNAi through voice, text, and video.",
        imgUri: "https://images.unsplash.com/photo-1608138279038-8dd61d909bd0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "90 Second Summaries",
        description:
            "Each session generates a concise, actionable summary that takes less than 90 seconds to review.",
        imgUri: "https://images.unsplash.com/photo-1675270529033-4b04426cb2d0?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const SectionOne = async ({}: SectionOneProps) => {
    return (
        <Section
            outerClassName="bg-black/5 border-t border-t-white/50 border-b border-b-black/10"
            className="flex w-full flex-col items-center px-4 py-24 sm:py-48 lg:px-8 lg:py-48"
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
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div className="flex w-full flex-row items-center justify-between pb-4">
                    <div className="flex flex-row items-center gap-2.5 gap-x-2.5">
                        <Trophy className="h-5 w-5 text-black/60" />
                        <Label className="text-md font-sans font-normal text-black/60">
                            More Happy Clients
                        </Label>
                    </div>
                    <Link
                        href="/"
                        className="hidden cursor-pointer flex-row items-center gap-1 gap-x-1 transition-all duration-200 ease-in-out hover:opacity-70 md:flex"
                    >
                        <Label className="text-md cursor-pointer font-sans font-normal text-primary">
                            Check out all features
                        </Label>
                        <ChevronRight className="h-icon w-icon mt-[3px] text-primary" />
                    </Link>
                    <Link
                        href="/"
                        className="flex cursor-pointer flex-row items-center gap-1 gap-x-1 transition-all duration-200 ease-in-out hover:opacity-70 md:hidden"
                    >
                        <Label className="text-md cursor-pointer font-sans font-normal text-primary">
                            All features
                        </Label>
                        <ChevronRight className="h-icon w-icon mt-[3px] text-primary" />
                    </Link>
                </div>
                <div className="flex w-full flex-col border-t border-black/5 py-12 md:flex-row">
                    <div className="flex w-full flex-row pb-6 md:w-1/2 md:pb-0">
                        <Label className="w-full font-serif text-3xl font-normal leading-tight text-black">
                            The easiest way to expand{" "}
                            <br className="hidden md:block" />
                            client care capacity
                        </Label>
                    </div>
                    <div className="flex w-full flex-row pl-0 md:w-1/2 md:pl-4">
                        <Label className="w-full font-sans text-xl font-normal leading-loose text-black/50">
                            Client relationships are the foundation of your
                            business, but you can’t be everywhere at once. DNAi
                            lets you expand your client care capacity through
                            high frequency interactions with your digital clone
                            for unlimited, personalized care.
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
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div className="flex-grid flex w-full flex-col gap-2 gap-x-2 py-6 md:grid-rows-3 md:flex-row">
                    {sections.map(
                        (item: HighlightSectionProps, index: number) => {
                            return (
                                <HighlightSection
                                    title={item.title}
                                    description={item.description}
                                    imgUri={item.imgUri}
                                    key={`card-${index}`}
                                />
                            );
                        },
                    )}
                </div>
            </InView>
        </Section>
    );
};

export default SectionOne;

const HighlightSection = ({
    title,
    description,
    imgUri,
}: HighlightSectionProps) => {
    return (
        <div className="bg-background-dnai flex w-full flex-grow flex-col rounded-lg border border-black/10 p-1.5 pb-4 shadow-md shadow-black/[2%]">
            <div className="flex h-[240px] w-full items-center justify-center overflow-hidden rounded-t-[12px] bg-black/5">
                <Image
                    src={imgUri}
                    alt="Picture of the author"
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="contain"
                    className="min-h-full object-contain"
                />
            </div>
            <div className="flex flex-grow flex-col p-5">
                <Label className="font-serif text-[1.25rem] font-normal text-black">
                    {title}
                </Label>
                <Label className="mt-2 font-sans text-lg font-normal text-black/50">
                    {description}
                </Label>
            </div>
            <div className="group flex w-full cursor-pointer flex-row px-5 pb-2 transition-all duration-200 ease-in-out">
                <Link
                    href="/demo"
                    className="flex w-full flex-row items-center gap-1 gap-x-1 border-t border-black/5 pt-4"
                >
                    <Label className="text-md cursor-pointer font-sans font-normal text-black transition-all duration-200 ease-in-out group-hover:text-primary">
                        Try now
                    </Label>
                    <ChevronRight className="h-icon w-icon cursor-pointer text-black/60 transition-all duration-200 ease-in-out group-hover:text-primary" />
                </Link>
            </div>
        </div>
    );
};
