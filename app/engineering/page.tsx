import React from 'react';
import type { Metadata } from 'next';

// Import components
import HeroSmallSection from '@/components/landing-page/sections/hero-small';
import AnalyticsHelper from '@/components/landing-page/analytics-helper';

type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};

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
			{/* <div className="flex w-full max-w-full flex-col"> */}
			<HeroSmallSection
				title="Electrical Engineering"
				imageSrc="/images/project-types/electrical-engineering.jpeg"
				imagePlaceholderSrc="/images/project-types/electrical-engineering-sm.png"
			/>
			{/* </div> */}
		</main>
	);
}
