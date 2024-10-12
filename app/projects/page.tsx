import { Metadata } from 'next';

import HeroSmallSection from '@/components/landing-page/sections/hero-small';
import PageNotFound from '@/components/landing-page/sections/page-not-found';
import AnalyticsHelper from '@/components/landing-page/analytics-helper';
import { ProjectData, WorkExperienceData } from '@/lib/constants';
import ProjectWorkplaceSection from '@/components/landing-page/project-pages/project-workplace-section';
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
	return (
		<div className="bg-background relative flex  w-screen flex-col items-center justify-between">
			<AnalyticsHelper
				pageName="All Projects Page"
				pageData={{ id: 'none' }}
			/>
			<HeroSmallSection
				title="All Projects"
				imageSrc="/images/projects/eigen-fitness/nodes/node-pcb-1.png"
				imagePlaceholderSrc="/images/projects/eigen-fitness/nodes/node-pcb-1.png"
				tags={[]}
				heading=""
			/>
			<div className="w-full flex flex-col">
				{WorkExperienceData.map((workExperience) => (
					<ProjectWorkplaceSection
						key={workExperience.id}
						workplace={workExperience}
					/>
				))}
			</div>
		</div>
	);
}
