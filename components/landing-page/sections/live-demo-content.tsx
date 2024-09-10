"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Import components
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Conversation from "@/components/dnai/chat/conversation";

// Import icons
import {} from "lucide-react";

// Import utils
import { cn } from "@/lib/utils";
import { DEMO_USERS } from "@/lib/constants/conversations";
import { Mixpanel } from "@/lib/mixpanel";

// Import actions

// Import providers
import { DnaiSessionProvider } from "@/lib/providers/dnai-session-provider";
import { NowPlayingContextProvider } from "react-nowplaying";
import { CartesiaProvider } from "@/lib/providers/cartesia-provider";
import { TranscriptionProvider } from "@/lib/providers/transcription-provider";
import { DeepgramContextProvider } from "@/lib/providers/deepgram-provider";
import { MicrophoneContextProvider } from "@/lib/providers/microphone-provider";
import { AudioStoreContextProvider } from "@/lib/providers/audio-store-provider";
import { MessageMetadataContextProvider } from "@/lib/providers/message-metadata-provider";

// Define and import types
import { LiveDemoDNAi } from "@/lib/types";
type LiveDemoContentProps = {};

const LiveDemoContent = ({}: LiveDemoContentProps) => {
    const router = useRouter();

    const [selectedDemoDNAi, setSelectedDemoDNAi] =
        useState<LiveDemoDNAi | null>(null);

    const [userFullName, setUserFullName] = useState<string | null>(null);

    const beginChat = (demo: LiveDemoDNAi) => {
        Mixpanel.track("live_demo_started", {
            assistantId: demo.assistantId,
            assistantName: demo.name,
            voiceId: demo.voiceId,
            coachId: demo.coachId,
            userFullName: userFullName ?? "Anonymous",
        });
        setSelectedDemoDNAi(demo);
    };

    const createDNAi = () => {
        Mixpanel.track("create_DNAi_clicked", {
            location: "live_demo",
            userFullName: userFullName ?? "Anonymous",
        });
        router.push("/dnai-login/get-started");
    };

    return (
        <div className="h-full w-full">
            {selectedDemoDNAi ? (
                <div className="h-full w-full pt-24">
                    <MicrophoneContextProvider>
                        <AudioStoreContextProvider>
                            <NowPlayingContextProvider>
                                <MessageMetadataContextProvider>
                                    <DeepgramContextProvider>
                                        <DnaiSessionProvider>
                                            <Conversation
                                                assistantId={
                                                    selectedDemoDNAi?.assistantId ??
                                                    null
                                                }
                                                voiceId={
                                                    selectedDemoDNAi?.voiceId ??
                                                    null
                                                }
                                                assistantName={
                                                    selectedDemoDNAi?.name ??
                                                    null
                                                }
                                                profileImgAddress={
                                                    selectedDemoDNAi?.imgUrl ??
                                                    null
                                                }
                                                isOnboarding={false}
                                                userFirstName={
                                                    userFullName
                                                        ? (userFullName.split(
                                                              " ",
                                                          )[0] ?? null)
                                                        : null
                                                }
                                                userFullName={
                                                    userFullName ?? null
                                                }
                                                coachId={
                                                    selectedDemoDNAi?.coachId ??
                                                    "552698ff-18aa-457b-9a65-ccb0a4e0f8d9"
                                                }
                                                forceSystemMessage={
                                                    selectedDemoDNAi?.systemMessage ??
                                                    null
                                                }
                                                forceGreetingMessage={
                                                    selectedDemoDNAi
                                                        ?.greetings[0] ?? null
                                                }
                                                nameUpdated={(n: string) =>
                                                    setUserFullName(n)
                                                }
                                                timeLimit={300}
                                            />
                                        </DnaiSessionProvider>
                                    </DeepgramContextProvider>
                                </MessageMetadataContextProvider>
                            </NowPlayingContextProvider>
                        </AudioStoreContextProvider>
                    </MicrophoneContextProvider>
                </div>
            ) : (
                <div className="flex h-full w-full flex-row">
                    <div className="hidden h-full w-full flex-row sm:flex">
                        <div className="flex h-full w-1/2 flex-col pb-6 pr-6 pt-20">
                            <div className="flex w-full flex-grow flex-col justify-center">
                                <div className="float-left mb-4 mr-auto flex w-auto cursor-pointer flex-row items-center gap-3 gap-x-3 rounded-full bg-black/5 p-1 transition-all duration-200 ease-in-out hover:opacity-70">
                                    <div className="flex items-center justify-center rounded-full bg-primary px-4 py-1">
                                        <Label className="text-md cursor-pointer font-sans font-normal text-white">
                                            New
                                        </Label>
                                    </div>
                                    <div className="pr-4">
                                        <Label className="text-md cursor-pointer overflow-hidden whitespace-nowrap font-sans font-normal text-black/50">
                                            Live Demo of DNAi voice chat
                                        </Label>
                                    </div>
                                </div>
                                <Label className="mb-2 font-serif text-[80px] font-normal leading-[72px] text-black">
                                    Try chatting with a DNAi
                                </Label>
                                <Label className="font-sans text-xl font-normal text-black">
                                    Explore the DNAi experience by chatting with
                                    a clone.
                                </Label>
                            </div>
                            <div className="flex w-full flex-col pb-20">
                                <div
                                    onClick={createDNAi}
                                    className="float-right mr-auto mt-8 flex h-12 w-auto cursor-pointer flex-row items-center justify-center rounded-md bg-black px-12 shadow-none transition-all duration-200 hover:opacity-80 hover:shadow-lg"
                                >
                                    <Label className="cursor-pointer font-sans text-lg font-normal text-white">
                                        Create my own DNAi
                                    </Label>
                                </div>
                                <div className="flex w-full flex-col py-2">
                                    <Label className="text-md font-sans font-normal text-black/50">
                                        Already have an account?{" "}
                                        <Link
                                            className="text-md font-sans font-normal text-black underline"
                                            href="/login"
                                        >
                                            Sign in
                                        </Link>
                                    </Label>
                                </div>
                            </div>
                            <div className="flex w-full flex-row items-center gap-6 gap-x-6">
                                <Label className="font-sans text-xs font-normal text-black/30">
                                    Made with ❤️ in Vancouver, BC.
                                </Label>
                                <Label className="font-sans text-xs font-normal text-black/30">
                                    ©2024 DNAi. All Rights Reserved.
                                </Label>
                            </div>
                            <div className="w-full"></div>
                        </div>
                        <div className="no-scrollbar flex h-full w-1/2 flex-col gap-2 gap-y-2 overflow-auto border-l border-black pb-8 pl-6 pt-24">
                            {DEMO_USERS.map((demoDNAi, index) => (
                                <LiveDemoDNAiCard
                                    key={index}
                                    demoDNAi={demoDNAi}
                                    isSelected={false}
                                    setSelectedDemoDNAi={beginChat}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex h-full w-full flex-col items-center justify-center sm:hidden">
                        <div className="w-full pb-1">
                            <Label className="font-serif text-2xl font-normal text-black">
                                Live Demo only on Desktop
                            </Label>
                        </div>
                        <div className="w-full">
                            <Label className="text-md font-sans font-normal text-black/50">
                                The DNAi live demo is only available on desktop
                                at this point in time. Open getdnai.com on your
                                computer to get started chatting with a DNAi!
                            </Label>
                        </div>
                        <Link
                            href="/"
                            className="mt-8 flex h-12 w-full cursor-pointer flex-row items-center justify-center rounded-md bg-black px-6 shadow-none transition-all duration-200 hover:opacity-80 hover:shadow-lg sm:w-auto"
                        >
                            <Label className="cursor-pointer font-sans text-lg font-normal text-white">
                                Go back
                            </Label>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LiveDemoContent;

type LiveDemoDNAiCardProps = {
    demoDNAi: LiveDemoDNAi;
    isSelected: boolean;
    setSelectedDemoDNAi: (demoDNAi: LiveDemoDNAi) => void;
};
const LiveDemoDNAiCard = ({
    demoDNAi,
    isSelected,
    setSelectedDemoDNAi,
}: LiveDemoDNAiCardProps) => {
    const [isLoading, setLoading] = useState(true);

    const src =
        demoDNAi.bgImgUrl && demoDNAi.bgImgUrl !== ""
            ? demoDNAi.bgImgUrl
            : "https://images.unsplash.com/photo-1711349171498-0368bda02a9b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-[40px] shadow-xl shadow-black/5">
            <div className="absolute z-0 h-full w-full">
                <Image
                    className={cn(
                        "h-full w-full scale-100 object-cover transition duration-300 hover:scale-110 hover:opacity-80",
                        isLoading ? "blur-sm" : "blur-0",
                    )}
                    onLoad={() => setLoading(false)}
                    src={src}
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    blurDataURL={typeof src === "string" ? src : undefined}
                    alt="demo-bg"
                />
            </div>
            <div className="relative z-10 flex h-full w-full flex-col justify-between bg-white/10 p-6">
                <div className="flex w-full flex-row items-start justify-between">
                    <div className="flex flex-grow flex-col pr-12">
                        <Label className="py-2 font-serif text-4xl font-normal leading-[50px] text-white">
                            {demoDNAi.name}
                        </Label>
                        <Label className="font-sans text-lg font-normal tracking-wide text-white">
                            {demoDNAi.profession}
                        </Label>
                    </div>
                    <div className="rounded-full bg-white/20 px-3 py-0.5">
                        <Label className="text-md font-sans font-normal uppercase text-white">
                            {demoDNAi.professionType}
                        </Label>
                    </div>
                </div>
                <div className="flex w-full flex-row items-end justify-between">
                    <div className="h-28 w-20 overflow-hidden rounded-xl">
                        <Image
                            src={demoDNAi.imgUrl || "/default-profile.png"}
                            alt={`${demoDNAi.name}'s profile`}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {demoDNAi.comingSoon ? (
                        <div className="float-right ml-auto mt-8 flex h-12 w-auto cursor-pointer flex-row items-center justify-center rounded-lg bg-white/20 px-6">
                            <Label className="text-md cursor-pointer font-sans font-medium text-white">
                                Coming soon
                            </Label>
                        </div>
                    ) : (
                        <div
                            className="float-right ml-auto mt-8 flex h-12 w-auto cursor-pointer flex-row items-center justify-center rounded-lg bg-white px-6 shadow-none transition-all duration-200 hover:opacity-80 hover:shadow-lg"
                            onClick={() => setSelectedDemoDNAi(demoDNAi)}
                        >
                            <Label className="text-md cursor-pointer font-sans font-medium text-black">
                                Start Chat
                            </Label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
