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
import WorkExperienceSection from '@/components/landing-page/sections/work-experience';
import Showcase from '@/components/landing-page/sections/showcase';
import { Label } from '@/components/ui/label';
import InfoImage from '@/components/landing-page/sections/info-image';

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
			<HeroSmallSection
				title="Design"
				imageSrc="/images/project-types/design-hero.png"
				imagePlaceholderSrc="/images/project-types/design-hero-sm.png"
			/>
			<WorkplaceScroller filterType="software" />
			<Showcase
				projectIds={[
					'eigen-nodes',
					'exact-pcb-antenna-tuning',
					'exact-crane-avoidance',
					'exact-temperature-logger',
					'blackberry-hr-monitor',
					'university-tesla-coil',
					'personal-reflow-oven',
					'exact-rh-monitor-boring',
					'exact-satellite-logger',
				]}
			/>
			<InfoImage
				imageSrc="/images/projects/dnai/dashboard/hero-cropped-2.png"
				imagePlaceholderSrc="/images/projects/dnai/dashboard/hero-cropped-2.png"
				title="Design Philosophy"
				content={
					<Label
						variant="title"
						color="muted"
						className="font-normal leading-relaxed">
						A truly enjoyable user experience doesn't end
						with functionality. Design, both in the
						physical and digital sense, is essential in
						communicating just how much the product
						designer cares about the user. I believe that
						great design is the result of a deep
						understanding of the user and their needs,
						combined with a healthy dose of creativity and
						attention to detail.
					</Label>
				}
			/>
			<WorkExperienceSection
				title="Design Work Experience"
				filterType="design"
			/>
			<Technologies forceTab="Design" />
		</main>
	);
}
