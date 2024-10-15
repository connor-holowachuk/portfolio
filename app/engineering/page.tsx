import React from 'react';
import type { Metadata } from 'next';

// Import components
import HeroSmallSection from '@/components/landing-page/sections/hero-small';
import AnalyticsHelper from '@/components/landing-page/analytics-helper';
import InfoImage from '@/components/landing-page/sections/info-image';
import WorkplaceScroller from '@/components/landing-page/sections/workplace-scroller';
import WorkExperienceSection from '@/components/landing-page/sections/work-experience';
type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};
import { Label } from '@/components/ui/label';

export const metadata: Metadata = {
	title: 'Connor Holowachuk',
	description: "Let's build cool sh*t.",
};

export default function Engineering({
	searchParams,
}: SearchParamProps) {
	return (
		<main className="bg-background relative flex w-screen flex-col items-center justify-between">
			<AnalyticsHelper pageName="ElectricalEngineering" />
			<HeroSmallSection
				title="Electrical Engineering"
				imageSrc="/images/project-types/electrical-engineering.jpeg"
				imagePlaceholderSrc="/images/project-types/electrical-engineering-sm.png"
			/>
			<WorkplaceScroller filterType="hardware" />
			<InfoImage
				imageSrc="/images/projects/eigen-fitness/nodes/testing-1.png"
				imagePlaceholderSrc="/images/project-types/electrical-engineering-sm.png"
				title="15 Years of Building Cool Stuff"
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
			<WorkExperienceSection />
		</main>
	);
}
