"use server";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import components
import { Label } from "@/components/ui/label";
import { Section } from "./section-wrapper";
import { InView } from "@/components/ui/in-view";

// Define and import types
type RoadmapSectionProps = {};

const RoadmapSection = async ({}: RoadmapSectionProps) => {
    return (
        <Section
            outerClassName="border-b border-b-black/10 px-4 md:px-0"
            className="flex w-full flex-col px-4 py-24 sm:py-32 md:px-8 lg:px-0 lg:py-36"
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
                            So much to come
                        </Label>
                        <Label className="w-full font-serif text-4xl font-normal leading-[52px] text-black md:w-auto">
                            Feature Roadmap.
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
                                Clone your persona.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Extract 23 unique traits from a short
                                conversation with our onboarding AI, Brandon,
                                and duplicate in your sharable DNAi.
                            </Label>
                            <div className="mr-auto mt-1 flex rounded-md bg-green-400/20 px-2.5 py-0.5 md:mx-auto">
                                <Label className="text-md font-sans font-normal text-green-500">
                                    Released August 2024
                                </Label>
                            </div>
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
                                Sub-1 second latency.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Improve conversation flow with 350ms average
                                latency between finishing your latency and start
                                of DNAi response.
                            </Label>
                            <div className="ml-auto mt-1 flex rounded-md bg-green-400/20 px-2.5 py-0.5 md:mx-auto">
                                <Label className="text-md font-sans font-normal text-green-500">
                                    Released August 2024
                                </Label>
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
                                Summary inbox & client profiles.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Quickly access and respond to your client's DNAi
                                summaries from a single inbox.
                            </Label>
                            <div className="mr-auto mt-1 flex rounded-md bg-green-400/20 px-2.5 py-0.5 md:mx-auto">
                                <Label className="text-md font-sans font-normal text-green-500">
                                    Released August 2024
                                </Label>
                            </div>
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
                                Task Triaging.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Action items are automatically triaged by
                                priority in a simple timeline for quick,
                                efficient task management.
                            </Label>
                            <div className="mt-1 rounded-md bg-primary/20 px-2.5 py-0.5">
                                <Label className="text-md font-sans font-normal text-primary">
                                    Coming September 2024
                                </Label>
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
                    <div className="relative flex w-full flex-row items-center py-8 md:py-0">
                        <div
                            className="absolute -left-64 -top-12 hidden md:block"
                            style={{ transform: `scaleX(-1)` }}
                        >
                            <Image
                                src="/images/hero/illustrations/ill-person-4.png"
                                alt="Demo section 1"
                                width={220}
                                height={220}
                            />
                        </div>
                        <div className="flex w-full flex-col items-start text-left md:max-w-[380px] md:items-center md:text-center">
                            <div className="my-3 hidden h-24 w-[1px] border-l border-dashed border-black/20 md:block"></div>
                            <Label className="pb-1 font-serif text-2xl font-normal leading-7 text-black">
                                Automated billing & payments.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Manage your billing and payments for review time
                                directly through your DNAi dashboard.
                            </Label>
                            <div className="mt-1 rounded-md bg-primary/20 px-2.5 py-0.5">
                                <Label className="text-md font-sans font-normal text-primary">
                                    Coming September 2024
                                </Label>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <Image
                                src="/images/hero/illustrations/ill-person-4.png"
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
                                In-app video calling.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                You can schedule virtual sessions with your
                                clients directly through the DNAi dashboard.
                            </Label>
                            <div className="mt-1 rounded-md bg-primary/20 px-2.5 py-0.5">
                                <Label className="text-md font-sans font-normal text-primary">
                                    Coming October 2024
                                </Label>
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
                                Video DNAi Interactions
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Clients interact with your DNAi through an
                                intuitive, Facetime-like video-based experience.
                            </Label>
                            <div className="mt-1 rounded-md bg-primary/20 px-2.5 py-0.5">
                                <Label className="text-md font-sans font-normal text-primary">
                                    Coming November 2024
                                </Label>
                            </div>
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
                        <div className="flex w-full flex-col items-start text-left md:max-w-[380px] md:items-center md:text-center">
                            <div className="my-3 hidden h-24 w-[1px] border-l border-dashed border-black/20 md:block"></div>
                            <Label className="font-serif text-2xl font-normal text-black">
                                Build better relationships.
                            </Label>
                            <Label className="text-md font-sans font-normal text-black/50">
                                Connecting relationship-based professionals and
                                clients for deeper, more meaningful connections,
                                and a more accessible and inclusive world.
                            </Label>
                            <div className="mt-1 rounded-md bg-primary/20 px-2.5 py-0.5">
                                <Label className="text-md font-sans font-normal text-primary">
                                    Ongoing
                                </Label>
                            </div>
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

export default RoadmapSection;
