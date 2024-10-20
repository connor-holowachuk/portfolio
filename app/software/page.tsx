import React from 'react';
import type { Metadata } from 'next';

// Import components
import HeroSmallSection from '@/components/landing-page/sections/hero-small';
import WorkplaceScroller from '@/components/landing-page/sections/workplace-scroller';
import Technologies from '@/components/landing-page/sections/technologies';
import Contact from '@/components/landing-page/sections/contact';

import AnalyticsHelper from '@/components/landing-page/analytics-helper';
import WorkExperienceSection from '@/components/landing-page/sections/work-experience';
import Showcase from '@/components/landing-page/sections/showcase';
import InfoImage from '@/components/landing-page/sections/info-image';
import { Label } from '@/components/ui/label';

type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};

export const metadata: Metadata = {
	title: 'Connor Holowachuk',
	description: "Let's build cool sh*t.",
};

export default function Software({ searchParams }: SearchParamProps) {
	return (
		<main className="bg-background relative flex w-screen flex-col items-center justify-between">
			<AnalyticsHelper pageName="Software Development" />
			<HeroSmallSection
				title="Software Development"
				imageSrc="/images/project-types/software-2.jpg"
				imagePlaceholderSrc="/images/project-types/software-2.jpg"
			/>
			<WorkplaceScroller filterType="software" />

			<Showcase
				projectIds={[
					'eigen-mobile-app',
					'exact-crane-avoidance',
					'personal-cup-u',
					'eigen-apple-watch-app',
					'dnai-labs-dashboard',
					'dnai-labs-realtime-chat',
					'eigen-ads-mobile-app',
					'eigen-dashboard',
				]}
			/>
			<InfoImage
				imageSrc="/images/project-types/software.jpeg"
				imagePlaceholderSrc="/images/project-types/software.jpeg"
				title="Coding for 10+ Years 👨‍💻"
				content={
					<Label
						variant="title"
						color="muted"
						className="font-normal leading-relaxed">
						I fell in love with hardware when I was 8
						years old. Starting by collecting PCBs from
						old toys, I quickly moved into soldering
						motors to other small electronics. At 14, I
						used a 555 timer to create my first blinking
						LED, which was soon followed by a passion for
						robotics. Firmware followed soon after with
						Arduino and Raspberry Pi. I've been fortunate
						to have been able to turn my hobby into a
						career, and I've been working in the field of
						electrical engineering for over 5 years.
					</Label>
				}
			/>
			<WorkExperienceSection
				title="Software Work Experience"
				filterType="software"
			/>
			<Technologies forceTab="Software" />
			<Contact />
		</main>
	);
}
