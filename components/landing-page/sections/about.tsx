import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { InView } from '@/components/ui/in-view';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import { OptimizedImage } from '@/components/ui/optimized-image';
import Link from 'next/link';

const About = async () => {
	return (
		<Section fullWidth>
			<Column
				width={1}
				className="col-span-1 sticky top-0 h-1/2 pt-32 lg:pt-64 lg:h-screen ">
				<div className="w-full flex flex-col items-center justify-center">
					<div className="w-36 h-36 flex items-center justify-center rounded-full overflow-hidden mb-6 p-2 bg-[#2F2C31] border border-[#3E3A40]">
						<video
							src="/videos/memoji-1.mov"
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col items-center">
						<Label variant="title3">
							Connor Holowachuk
						</Label>
						<Label variant="body" color="muted">
							Vancouver, BC
						</Label>
					</div>
				</div>
			</Column>
			<Column
				width={2}
				className="col-span-2 flex flex-col items-center lg:pt-64  ">
				<div className="w-full h-[250px] relative z-10 block lg:hidden">
					<div
						className="gradient-blur absolute z-0"
						style={{ height: '100%' }}>
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
					</div>
					<div className="absolute z-10 w-full h-full bg-gradient-to-b from-background/0 to-background" />
				</div>
				<div className="w-full max-w-3xl mx-auto  px-4 flex flex-col gap-20 bg-background z-50">
					<div className="h-36 w-full flex items-center ">
						<Label
							variant="titleLg"
							color="white"
							className="leading-normal">
							👋 Welcome to my portfolio!
						</Label>
					</div>

					<InViewTextWrapper>
						<Label
							variant="titleLg"
							className="font-normal leading-normal"
							color="muted">
							I'm an{' '}
							<InlineLink href="/engineering">
								Electrical Engineer
							</InlineLink>
							,{' '}
							<InlineLink href="/software">
								Software Developer
							</InlineLink>
							, and{' '}
							<InlineLink href="/design">
								UI/UX Designer
							</InlineLink>{' '}
							who is passionate about{' '}
							<InlineCallout>
								building products that users truly
								love
							</InlineCallout>
							.
						</Label>
					</InViewTextWrapper>
					<InViewTextWrapper>
						<Label
							variant="titleLg"
							className="font-normal text-center leading-normal"
							color="muted">
							Since 2014, I've built a wide range of
							products, startups, and side projects from{' '}
							<InlineLink href="/workplace/eigen-fitness">
								motion tracking wearables
							</InlineLink>{' '}
							to{' '}
							<InlineLink href="/workplace/dnai">
								AI-powered clones
							</InlineLink>
							.
						</Label>
					</InViewTextWrapper>
					<InViewTextWrapper>
						<Label
							variant="titleLg"
							className="font-normal text-center leading-normal"
							color="muted">
							While formally trained as an Electrical
							Engineer, the endless possibilities when{' '}
							<InlineLink href="/tags/hardware">
								hardware
							</InlineLink>
							,{' '}
							<InlineLink href="/tags/firmware">
								firmware
							</InlineLink>
							, and{' '}
							<InlineLink href="/tags/software">
								software
							</InlineLink>{' '}
							are combined has led me to found{' '}
							<InlineLink href="/tags/startup">
								three software-focused startups
							</InlineLink>
							.
						</Label>
					</InViewTextWrapper>
					<InViewTextWrapper>
						<Label
							variant="titleLg"
							className="font-normal text-center leading-normal"
							color="muted">
							I hope you're as excited as I am to build{' '}
							<InlineCallout>
								the next generation of great products
								together
							</InlineCallout>
							.
						</Label>
					</InViewTextWrapper>
					<InViewTextWrapper>
						<Label
							variant="title"
							className="font-normal text-center leading-normal"
							color="muted">
							P.S. I designed and built this portfolio
							with Next.js and TailwindCSS, and the
							source code is available on{' '}
							<InlineLink href="https://github.com/connor-holowachuk/portfolio">
								GitHub
							</InlineLink>
							.
						</Label>
					</InViewTextWrapper>
				</div>
			</Column>
		</Section>
	);
};

export default About;

const InViewTextWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<InView
			variants={{
				hidden: {
					opacity: 0,
					y: 100,
					filter: 'blur(12px)',
				},
				visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
			}}
			viewOptions={{ margin: '0px 0px -100px 0px' }}
			transition={{ duration: 0.9, ease: 'easeInOut' }}>
			{children}
		</InView>
	);
};

const InlineLink = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) => {
	return (
		<Link
			href={href}
			className="text-accent/70 hover:underline hover hover:text-accent-foreground cursor-pointer">
			{children}
		</Link>
	);
};

const InlineCallout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <span className="text-white">{children}</span>;
};
