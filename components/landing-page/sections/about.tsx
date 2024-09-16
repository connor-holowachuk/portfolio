import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import { OptimizedImage } from '@/components/ui/optimized-image';
import Link from 'next/link';

const About = async () => {
	return (
		<Section borderBottom noCols>
			<div className="w-full py-24 px-4 md:px-12 h-full flex flex-col ">
				<div className="w-36 h-36 flex items-center justify-center   rounded-full overflow-hidden mb-6 p-2 bg-[#2F2C31] border border-[#3E3A40]">
					<video
						src="/videos/memoji-1.mov"
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="w-full max-w-3xl mx-auto   flex flex-col gap-6">
					<Label
						variant="titleLg"
						color="white"
						className="leading-normal">
						👋 Welcome to my portfolio!
					</Label>
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
							building products that users truly love
						</InlineCallout>
						.
					</Label>
					<Label
						variant="title"
						className="font-normal text-center leading-normal"
						color="muted">
						Since 2014, I've built a wide range of
						products, startups, and side projects from
						wearable motion tracking to AI-powered clones.
						.
					</Label>
				</div>
			</div>
		</Section>
	);
};

export default About;

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
