'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Section } from './section-wrapper';
import { InView } from '@/components/ui/in-view';
import {
	IconBoxAlignRightFilled,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from '@tabler/icons-react';

// Import icons
import { PenTool, ChevronRight } from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Import actions

// Import providers

// Define and import types
type FeaturesSectionProps = {};

const FeaturesSection = ({}: FeaturesSectionProps) => {
	return (
		<div className="flex flex-row">
			<div className="flex w-full flex-row overflow-hidden">
				<div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-32 sm:py-48 lg:px-8 lg:py-32">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 100,
								filter: 'blur(12px)',
							},
							visible: {
								opacity: 1,
								y: 0,
								filter: 'blur(0px)',
							},
						}}
						viewOptions={{ margin: '0px 0px -100px 0px' }}
						transition={{
							duration: 0.6,
							ease: 'easeInOut',
						}}>
						<div className="flex w-full flex-row items-center justify-between pb-4">
							<div className="flex flex-row items-center gap-2.5 gap-x-2.5">
								<PenTool className="h-5 w-5 text-black/60" />
								<Label className="text-md font-sans font-normal text-black/60">
									Built for you
								</Label>
							</div>
							<Link
								href="/"
								className="hidden cursor-pointer flex-row items-center gap-1 gap-x-1 transition-all duration-200 ease-in-out hover:opacity-70 md:flex">
								<Label className="text-md cursor-pointer font-sans font-normal text-primary">
									Check out all features
								</Label>
								<ChevronRight className="h-icon w-icon mt-[3px] text-primary" />
							</Link>
							<Link
								href="/"
								className="flex cursor-pointer flex-row items-center gap-1 gap-x-1 transition-all duration-200 ease-in-out hover:opacity-70 md:hidden">
								<Label className="text-md cursor-pointer font-sans font-normal text-primary">
									All features
								</Label>
								<ChevronRight className="h-icon w-icon mt-[3px] text-primary" />
							</Link>
						</div>
						<div className="flex w-full flex-col border-t border-black/5 py-12 md:flex-row">
							<div className="flex w-full flex-row pb-6 md:w-1/2 md:pb-0">
								<Label className="w-full font-serif text-3xl font-normal leading-tight text-black">
									Everything you need to grow your
									business
								</Label>
							</div>
							<div className="flex w-full flex-row pl-0 md:w-1/2 md:pl-4">
								<Label className="w-full font-sans text-xl font-normal leading-loose text-black/50">
									Discover the features that will
									help you grow your business,
									deepend client relationships, and
									increase your revenue.
								</Label>
							</div>
						</div>
					</InView>
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 100,
								filter: 'blur(12px)',
							},
							visible: {
								opacity: 1,
								y: 0,
								filter: 'blur(0px)',
							},
						}}
						viewOptions={{ margin: '0px 0px -100px 0px' }}
						transition={{
							duration: 0.6,
							ease: 'easeInOut',
						}}>
						<div className=""></div>
					</InView>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;

const SkeletonOne = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2">
			<motion.div
				variants={variants}
				className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2">
				<div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
				<div className="h-4 w-full rounded-full bg-gray-100" />
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2">
				<div className="h-4 w-full rounded-full bg-gray-100" />
				<div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
			</motion.div>
			<motion.div
				variants={variants}
				className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2">
				<div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
				<div className="h-4 w-full rounded-full bg-gray-100" />
			</motion.div>
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: '100%',
			transition: {
				duration: 0.2,
			},
		},
		hover: {
			width: ['0%', '100%'],
			transition: {
				duration: 2,
			},
		},
	};
	const arr = new Array(6).fill(0);
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2">
			{arr.map((_, i) => (
				<motion.div
					key={'skelenton-two' + i}
					variants={variants}
					style={{
						maxWidth:
							Math.random() * (100 - 40) + 40 + '%',
					}}
					className="flex h-4 w-full flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-neutral-100 p-2"></motion.div>
			))}
		</motion.div>
	);
};
const SkeletonThree = () => {
	const variants = {
		initial: {
			backgroundPosition: '0 50%',
		},
		animate: {
			backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				repeat: Infinity,
				repeatType: 'reverse',
			}}
			className="bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 rounded-lg"
			style={{
				background:
					'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
				backgroundSize: '400% 400%',
			}}>
			<motion.div className="h-full w-full rounded-lg"></motion.div>
		</motion.div>
	);
};
const SkeletonFour = () => {
	const first = {
		initial: {
			x: 20,
			rotate: -5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const second = {
		initial: {
			x: -20,
			rotate: 5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2">
			<motion.div
				variants={first}
				className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4">
				<Image
					src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
					alt="avatar"
					height="100"
					width="100"
					className="h-10 w-10 rounded-full"
				/>
				<p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
					"I've been feeling a bit off since we upped my
					blood thinner."
				</p>
				<p className="mt-4 rounded-md border border-red-500 bg-red-100 px-2 py-0.5 text-center text-xs leading-4 text-red-600">
					Review Perscription
				</p>
			</motion.div>
			<motion.div className="relative z-20 flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4">
				<Image
					src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
					alt="avatar"
					height="100"
					width="100"
					className="h-10 w-10 rounded-full"
				/>
				<p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
					"I hit 225lbs on Bench Press today, I'm so happy!"
				</p>
				<p className="mt-4 rounded-md border border-green-500 bg-green-100 px-2 py-0.5 text-center text-xs leading-4 text-green-600">
					Celebrate Will's Success
				</p>
			</motion.div>
			<motion.div
				variants={second}
				className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4">
				<Image
					src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
					alt="avatar"
					height="100"
					width="100"
					className="h-10 w-10 rounded-full"
				/>
				<p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
					"I read the book you suggested, but it wasn't very
					helpfull."
				</p>
				<p className="mt-4 rounded-md border border-orange-500 bg-orange-100 px-2 py-0.5 text-center text-xs leading-4 text-orange-600">
					Suggest New Book
				</p>
			</motion.div>
		</motion.div>
	);
};
const SkeletonFive = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2">
			<motion.div
				variants={variants}
				className="flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100 bg-white p-2">
				<Image
					src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
					alt="avatar"
					height="100"
					width="100"
					className="h-10 w-10 rounded-full"
				/>
				<p className="text-xs text-neutral-500">
					I had another argument with my wife today. I'm not
					sure what to do anymore.
				</p>
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="ml-auto flex w-3/4 flex-row items-center justify-end space-x-2 rounded-lg border border-neutral-100 bg-white p-2">
				<p className="text-xs text-neutral-500">
					Thanks for sharing that, Will. That sounds really
					difficult. How did you leave things with your
					wife?
				</p>
				<div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
			</motion.div>
		</motion.div>
	);
};
const items = [
	{
		title: '90 Second Summaries',
		description: (
			<span className="text-sm">
				Each session with your client and your DNAi is
				summarized in a 90 second summary.
			</span>
		),
		header: <SkeletonTwo />,
		className: 'md:col-span-1',
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Real-time Audio Transcription',
		description: (
			<span className="text-sm">
				Review full transcripts of your DNAi-client sessions
				alongside the condensed 90s summaries.
			</span>
		),
		header: <SkeletonOne />,
		className: 'md:col-span-1',
		icon: (
			<IconClipboardCopy className="h-4 w-4 text-neutral-500" />
		),
	},

	{
		title: 'Scheduled Follow-ups',
		description: (
			<span className="text-sm">
				Save time by deploying your DNAi with a list of
				questions to conduct follow-ups with your clients.
			</span>
		),
		header: <SkeletonThree />,
		className: 'md:col-span-1',
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Action Items',
		description: (
			<span className="text-sm">
				Each DNAi-client session generates a short list of
				action items to provide personalized care to your
				client.
			</span>
		),
		header: <SkeletonFour />,
		className: 'md:col-span-2',
		icon: (
			<IconTableColumn className="h-4 w-4 text-neutral-500" />
		),
	},

	{
		title: 'Secure, Private Messaging',
		description: (
			<span className="text-sm">
				Securily engage your clients directly through the DNAi
				platform.
			</span>
		),
		header: <SkeletonFive />,
		className: 'md:col-span-1',
		icon: (
			<IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />
		),
	},
];
