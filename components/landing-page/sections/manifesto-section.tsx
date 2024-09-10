"use server";
import React from "react";

// Import components
import { Label } from "@/components/ui/label";
import { Section } from "./section-wrapper";
import { InView } from "@/components/ui/in-view";

// Import icons
import { Stars, Scan, PaintRoller, HeartHandshake } from "lucide-react";

// Define and import types
type ManifestoSectionProps = {};

const ManifestoSection = async ({}: ManifestoSectionProps) => {
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
                <div className="flex w-full flex-col items-start pb-4">
                    <div className="flex w-full flex-col items-start text-left">
                        <div className="flex flex-row items-center gap-2.5 gap-x-2.5">
                            <Stars className="h-5 w-5 text-black/60" />
                            <Label className="text-md font-sans font-normal text-black/60">
                                Our guiding principles.
                            </Label>
                        </div>

                        <Label className="w-full font-serif text-4xl font-normal leading-[52px] text-black md:w-auto">
                            Manifesto.
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
                <div className="flex w-full flex-col py-12">
                    <div className="flex w-full flex-row items-center justify-between border-b border-black/10 pb-4">
                        <div className="flex flex-row items-center gap-2.5 gap-x-2.5">
                            <Scan className="h-5 w-5 text-black/60" />
                            <Label className="text-md font-sans font-normal text-black/60">
                                Relational Service Providers
                            </Label>
                        </div>
                    </div>
                    <div className="w-full py-8">
                        <Label className="font-serif text-2xl font-normal text-black/70">
                            Netflix, Uber, and AirBnb, and many more have
                            demonstrated consumers' desire for on-demand
                            services.
                            <br />
                            <br />
                            Powered by the rise of the internet, the on-demand
                            revolution took the consumer landscape by storm for
                            transactional services. With the tap of a finger,
                            you now have access to a car ride, hot meal, bed to
                            sleep in, and movie to watch. The on-demand
                            revolution stops at transactional services, where
                            the service provider is fungible; there is no value
                            in the same Uber driver on every trip, or movie on
                            Netflix. What about relational interactions where
                            the value lies in the peer-to-peer relationship? The
                            internet- powered on-demand revolution stopped
                            there.
                            <br />
                            <br />
                            Your personal trainer, family doctor,
                            physiotherapist, councillor, and professor are
                            inherently limited by their time. Their time supply
                            is fundamentally capped at 40-50h/wk, and their time
                            demand varies on their value to their respective
                            market; the greater their demand, the more their
                            service costs, and the lower the number of consumers
                            that can afford their service.
                            <br />
                            <br />
                            As we’ve seen with the most successful companies of
                            today listed above, the future is accessible and
                            on-demand. Let’s zoom out and imagine a world where
                            relational interactions are equally as accessible
                            and on-demand as an Uber ride.
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
                <div className="flex w-full flex-col py-12">
                    <div className="flex w-full flex-row items-center justify-between border-b border-black/10 pb-4">
                        <div className="flex flex-row items-center gap-2.5 gap-x-2.5">
                            <PaintRoller className="h-5 w-5 text-black/60" />
                            <Label className="text-md font-sans font-normal text-black/60">
                                Painting a Picture
                            </Label>
                        </div>
                    </div>
                    <div className="w-full py-8">
                        <Label className="font-serif text-2xl font-normal text-black/70">
                            You wake up at 6am, down a quick Cliff bar, and head
                            downstairs to the PlanetFitness in your Philadelphia
                            condo building. It’s not the most elite gym. But it
                            does have everything that Steven, your personal
                            trainer, said you need to loose the 10LBS you want
                            to before summer comes. And it’s affordable.
                            <br />
                            <br />
                            You hit the gym floor, and meet Steven. But Steven
                            is in San Diego, still fast asleep. The Steven you
                            meet lives in your smartphone.
                            <br />
                            <br />
                            You wave and groggily say hello to him through your
                            camera. He says – in his familiar energetic tone –
                            “Morning sunshine! How was the weekend? Ready to hit
                            chest and triceps today?”. It’s clear by his clever
                            smirk he’s eagerly awaiting a response. You’re tired
                            from a late Sunday night out, but manage to work up
                            an “Oh yeah, can’t wait.” His energy is a lot to
                            digest this early, but you know that in 20 minutes
                            his happy-go-lucky attitude will rub off on you, as
                            it does every morning. That’s one of the many
                            reasons why – of all the personal trainers in the
                            world – he’s the perfect trainer for you.
                            <br />
                            <br />
                            The Steven that guides you through your workout is a
                            Digital Clone of the real Steven, who is still fast
                            asleep 2,700 miles west – and will be for a few more
                            hours. But you still hear his voice, see him on your
                            smartphone, and absorb his outgoing personality; you
                            can’t tell the difference between the Steven on your
                            phone and video calling the biological Steven 3
                            timezones away.
                            <br />
                            <br />
                            Throughout your workout, Steven uses data from your
                            wearables and smartphone to assess your form. He
                            coaches you through improving that weird wiggle
                            thing that your left arm always does on bench press
                            because of your rotator cuff injury. He tells you
                            what weight to select, to slow down on the negatives
                            for tricep press downs, and makes friendly
                            conversation between sets. He even remembered today
                            is your Black Lab’s 4th birthday.
                            <br />
                            <br />
                            Your left shoulder is tighter than usual today, and
                            you bring this up with Steven. He suggests speaking
                            with Emilia, who has been a reliable physiotherapist
                            for the last 2 years. An event is created in your
                            smartphone calendar for a session with Emilia over
                            breakfast.
                            <br />
                            <br />
                            When you wrap up today’s workout, Steven gives you
                            props for the hard work today and reminds you not
                            too have to much birthday cake tonight for your
                            dog’s party.
                            <br />
                            <br />
                            Over your 8am breakfast, Emilia says hello and asks
                            how the shoulder is doing. Like Steven, the Emilia
                            you’re speaking with is a Digital Clone. Unlike
                            Steven, Emilia is a 20 minute drive from you in
                            downtown Philly. After sharing details on your
                            shoulder pain this morning and an examination of
                            your ROM and velocity trends from this morning’s gym
                            session, Emilia determines it’s best to come in for
                            an in-person rehab session. Here, she can physically
                            work on stretching out your tissues to prevent
                            further damage and continue towards the pain-free
                            workouts you’re looking for.
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
                <div className="flex w-full flex-col py-12">
                    <div className="flex w-full flex-row items-center justify-between border-b border-black/10 pb-4">
                        <div className="flex flex-row items-center gap-2.5 gap-x-2.5">
                            <HeartHandshake className="h-5 w-5 text-black/60" />
                            <Label className="text-md font-sans font-normal text-black/60">
                                The Future is Not Digital. It’s Augmented.
                            </Label>
                        </div>
                    </div>
                    <div className="w-full py-8">
                        <Label className="font-serif text-2xl font-normal text-black/70">
                            Along with your family physician, professor, and
                            therapist, Steven and Emilia are Digital Clones made
                            possible by the latest revelations in AI. Models are
                            trained on curated datasets to understand their
                            behavioural tendencies, temperament, and tone of
                            voice to embody the outward facing attributes of the
                            individual. They are then imposed on lip-synced
                            images and videos of the individual to provide the
                            visual and audio representation needed to close the
                            loop of a fully Digital Clone. They make use of
                            various data-gathering endpoints – such as
                            wearables, health sensors, and computer vision – to
                            make in-depth judgements in line with their service.
                            <br />
                            <br />
                            The next obvious question is “can we just replace
                            the service individual with the clone?” This plagued
                            me for years with both family physicians and
                            personal trainers. Both positions are regurgitations
                            of well understood literature; if-this-then-that
                            algorithms are followed to provide a prescription –
                            may it be a pharmaceutical for low blood pressure,
                            or a workout plan to tack on an extra 5LBS of lean
                            muscle. How soon can these, and similar positions,
                            be replaced with a nameless, faceless digital
                            version?
                            <br />
                            <br />
                            Both my wife and my father are physicians, with whom
                            I’ve had long discussions about their seemingly
                            imminent replacement. They were certain that their
                            careers cannot be replaced by such an artificial
                            entity. While I wasn’t convinced, both argued one
                            key point:{" "}
                            <span className="font-bold italic text-black">
                                relationship
                            </span>
                            . People need the doctor for the human-to-human
                            relationship.
                            <br />
                            <br />I became convinced over the last 5 years
                            working with personal trainers. Like physicians, I
                            assumed the value of a trainer was the workout
                            program itself. Digging deep with countless personal
                            training clients, I discovered the true value of the
                            trainer.{" "}
                            <span className="font-bold italic text-black">
                                Relationship
                            </span>
                            .
                            <br />
                            <br />
                            The future will not be one filled with nameless,
                            faceless algorithms. Humans innovate and build tools
                            to better the lives of humans. And humans are deeply
                            emotional, social beings. The next revolution will
                            produce tools that augment ourselves.
                            <br />
                            <br />
                            We’ve seen this time and time again. The industrial
                            revolution was feared to replace human workmanship –
                            instead, it produced tools to make workmanship
                            easier. The computer revolution was set to replace
                            human creativity – instead, it produced tools to
                            expand our creativity. And today, the AI revolution
                            is set to replace human-to-human connections –
                            instead, it will produce tools to expand the ability
                            we have to interact with each other on a wider
                            level.
                        </Label>
                    </div>
                </div>
            </InView>
        </Section>
    );
};

export default ManifestoSection;
