import { Metadata } from 'next';

import HeroSmallSection from '@/components/landing-page/sections/hero-small';
import PageNotFound from '@/components/landing-page/sections/page-not-found';
import AnalyticsHelper from '@/components/landing-page/analytics-helper';
import { ProjectData } from '@/lib/constants';

type Props = {
	params: { id: string };
};

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	// You can use the id to fetch data and generate dynamic metadata
	return {
		title: `Connor Holowachuk | Project ${params.id}`,
	};
}

export default function ProjectPage({ params }: Props) {
	const { id } = params;

	const project = ProjectData.find((p) => p.id === id);

	return (
		<div className="bg-background relative flex  w-screen flex-col items-center justify-between">
			<AnalyticsHelper
				pageName="Project Page"
				pageData={{ id: project?.id ?? '' }}
			/>
			<HeroSmallSection
				title={project?.title ?? ''}
				imageSrc={
					project?.page?.heroImageSrc ??
					'/images/project-types/electrical-engineering.jpeg'
				}
				imagePlaceholderSrc={
					project?.page?.placeholderHeroImageSrc ??
					'/images/project-types/electrical-engineering-sm.png'
				}
				tags={project?.tags ?? []}
			/>
			{project?.page?.element ?? <PageNotFound id={id} />}
		</div>
	);
}
