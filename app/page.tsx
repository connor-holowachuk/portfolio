import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

// Import components
import Navbar from '@/components/landing-page/navbar';
import HeroSection from '@/components/landing-page/sections/hero';
import WorkplaceScroller from '@/components/landing-page/sections/workplace-scroller';
import About from '@/components/landing-page/sections/about';
import ProjectTypes from '@/components/landing-page/sections/project-types';
import WorkExperience from '@/components/landing-page/sections/work-experience';
import Education from '@/components/landing-page/sections/education';
import Technologies from '@/components/landing-page/sections/technologies';
import Footer from '@/components/landing-page/footer';

import AnalyticsHelper from '@/components/landing-page/analytics-helper';

type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};

export const metadata: Metadata = {
	title: 'Connor Holowachuk',
	description: "Let's build cool sh*t.",
};

export default function Home({ searchParams }: SearchParamProps) {
	return (
		<main className="bg-background relative flex h-screen w-screen flex-col items-center justify-between overflow-hidden">
			<Navbar />
			<AnalyticsHelper pageName="Home" />
			<div className="flex w-full max-w-full flex-col overflow-auto">
				<HeroSection />
				<WorkplaceScroller />
				<About />
				<ProjectTypes />
				<WorkExperience />
				<Education />
				<Technologies />
				<Footer />
			</div>
		</main>
	);
}
