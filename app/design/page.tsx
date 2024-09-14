import React from 'react';
import type { Metadata } from 'next';

// Import components
import HeroSmallSection from '@/components/landing-page/sections/hero-small';
import WorkplaceScroller from '@/components/landing-page/sections/workplace-scroller';
import About from '@/components/landing-page/sections/about';
import ProjectTypes from '@/components/landing-page/sections/project-types';
import WorkExperience from '@/components/landing-page/sections/work-experience';
import Education from '@/components/landing-page/sections/education';
import Technologies from '@/components/landing-page/sections/technologies';

import AnalyticsHelper from '@/components/landing-page/analytics-helper';

type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};

export const metadata: Metadata = {
	title: 'Connor Holowachuk',
	description: "Let's build cool sh*t.",
};

export default function Design({ searchParams }: SearchParamProps) {
	return (
		<main className="bg-background relative flex w-screen flex-col items-center justify-between">
			<AnalyticsHelper pageName="Design" />
			{/* <div className="flex w-full max-w-full flex-col"> */}
			<HeroSmallSection
				title="Design"
				imageSrc="/images/project-types/design.png"
				imagePlaceholderSrc="/images/project-types/design-sm.png"
			/>
			{/* </div> */}
		</main>
	);
}
