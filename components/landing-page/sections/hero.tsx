"use server";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import components
import { Label } from "@/components/ui/label";
import { Section } from "./section-wrapper";

// Define and import types
type HeroSectionProps = {};

const HeroSection = async ({}: HeroSectionProps) => {
    return (
        <Section
            outerClassName=""
            className="flex w-full flex-col py-24 sm:py-28 lg:flex-row lg:py-48"
        >
            <div className="flex w-full flex-col items-center px-4 md:items-start md:px-8 lg:w-1/2 lg:px-0">
                <Link
                    href="/get-started"
                    className="float-left flex w-auto cursor-pointer flex-row items-center gap-3 gap-x-3 rounded-full bg-black/5 p-1 transition-all duration-200 ease-in-out hover:opacity-70"
                >
                    <div className="flex items-center justify-center rounded-full bg-secondary px-4 py-1">
                        <Label className="text-md cursor-pointer font-sans font-normal text-white">
                            New
                        </Label>
                    </div>
                    <div className="pr-4">
                        <Label className="text-md hidden cursor-pointer overflow-hidden whitespace-nowrap font-sans font-normal text-black/50 md:block">
                            Share your DNAi with your clients for audio calls
                        </Label>
                        <Label className="text-md block cursor-pointer overflow-hidden whitespace-nowrap font-sans font-normal text-black/50 md:hidden">
                            DNAi Audio calls with your clients
                        </Label>
                    </div>
                </Link>
                <div className="flex w-full flex-col items-center gap-8 gap-y-8 pt-8 text-center md:items-start md:text-left">
                    <div className="w-full">
                        <Label className="font-serif text-[58px] font-normal leading-[50px] text-black md:text-[68px] md:leading-[60px] lg:text-[80px] lg:leading-[72px] xl:text-[100px] xl:leading-[90px]">
                            The assistant that thinks just like you.
                        </Label>
                    </div>
                    <div className="w-full">
                        <Label className="font-sans text-xl font-normal text-black/50">
                            DNAi is a{" "}
                            <span className="group relative cursor-pointer rounded-[6px] border border-transparent text-black/70 underline decoration-dotted underline-offset-2 transition-all duration-100 hover:border-black/5 hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-black/20">
                                digital cloning platform
                                <div className="ease-soft-spring absolute bottom-auto left-0 top-8 z-20 hidden h-0 w-[400px] scale-50 flex-col rounded-lg bg-black/70 p-6 opacity-0 shadow-xl shadow-black/20 blur-lg backdrop-blur-md transition-all delay-500 duration-300 group-hover:h-[400px] group-hover:scale-100 group-hover:opacity-100 group-hover:blur-none md:bottom-8 md:top-auto md:flex">
                                    <div className="w-full border-b border-white/5 pb-3">
                                        <Label className="font-sans text-2xl font-normal text-white">
                                            Digital Clone
                                        </Label>
                                    </div>
                                    <div className="py-3">
                                        <Label className="font-serif text-lg font-normal text-white/70">
                                            Digital clones are AI-powered
                                            assistants that are trained to
                                            sound, act, and think like you.
                                            <br />
                                            <br />
                                            During a short onboarding session,
                                            you'll teach your clone how you
                                            speak, think, and act. Once your
                                            clone is ready, you can start
                                            sharing it with clients to help them
                                            with their needs.
                                        </Label>
                                    </div>
                                </div>
                            </span>{" "}
                            that helps professionals deepen relationships
                            accross quickly growing rosters. If your service
                            demands relationship with clients, start cloning
                            yourself today.
                        </Label>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center gap-2 gap-x-2 py-6 md:flex-row">
                    <Link
                        href="/get-started"
                        className="flex h-12 w-full cursor-pointer flex-row items-center justify-center rounded-md bg-black px-6 shadow-none transition-all duration-200 hover:opacity-80 hover:shadow-lg sm:w-auto"
                    >
                        <Label className="cursor-pointer font-sans text-lg font-normal text-white">
                            Clone yourself
                        </Label>
                    </Link>
                    <Link
                        href="/demo"
                        className="group flex h-12 w-full cursor-pointer flex-row items-center justify-center rounded-md px-4 transition-all duration-200 ease-in-out hover:bg-black/10 sm:w-auto"
                    >
                        <Label className="cursor-pointer font-sans text-lg font-normal text-black/50 transition-all duration-200 ease-in-out group-hover:text-black">
                            Try the demo
                        </Label>
                    </Link>
                </div>
            </div>
            <div className="relative hidden w-full flex-grow flex-col lg:flex lg:w-1/2">
                <div className="border-3 absolute left-12 flex h-full min-h-[400px] items-center justify-center rounded-[40px] border-gray-600 bg-black p-6 shadow-xl shadow-black/20 md:w-[120%] xl:w-[150%]">
                    <div className="flex h-full w-full overflow-hidden rounded-[24px]">
                        <Image
                            src="https://images.unsplash.com/photo-1713947506048-80f76419b2fe?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" //"https://images.unsplash.com/photo-1713946598361-c9e5989cfff9?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Hero image"
                            height={500}
                            width={500}
                            objectFit="cover"
                            className="max-h-full min-w-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-grow flex-col px-2 md:px-6 lg:hidden">
                <div className="border-3 flex h-full min-h-[400px] w-full items-center justify-center rounded-[40px] border-gray-600 bg-black p-6 shadow-xl shadow-black/20">
                    <div className="flex h-full w-full overflow-hidden rounded-[24px]">
                        <Image
                            src="https://images.unsplash.com/photo-1713947506048-80f76419b2fe?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" //"https://images.unsplash.com/photo-1713946598361-c9e5989cfff9?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Hero image"
                            height={500}
                            width={500}
                            objectFit="cover"
                            className="max-h-full min-w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;
