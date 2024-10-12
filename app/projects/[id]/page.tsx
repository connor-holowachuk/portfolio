import { Metadata } from 'next';

import HeroSmallSection from '@/components/landing-page/sections/hero-small';
import PageNotFound from '@/components/landing-page/sections/page-not-found';
import AnalyticsHelper from '@/components/landing-page/analytics-helper';
import { ProjectData, WorkExperienceData } from '@/lib/constants';
import ProjectPageWrapper from '@/components/landing-page/project-pages/project-page-wrapper';
import { PageSection } from '@/lib/types';
import ImageGallery from '@/components/landing-page/project-pages/sections/image-gallery';
import InfoSection from '@/components/landing-page/project-pages/sections/information';
import ListSection from '@/components/landing-page/project-pages/sections/list';
import ImageLarge from '@/components/landing-page/project-pages/sections/image-large';
import VideoLarge from '@/components/landing-page/project-pages/sections/video-large';
import YoutubeLarge from '@/components/landing-page/project-pages/sections/youtube-large';
import OtherProjects from '@/components/landing-page/project-pages/sections/other-projects';
import SoftwareTechnologies from '@/components/landing-page/project-pages/sections/software-technologies/software-technologies';

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

	if (!project?.page) return <PageNotFound id={id} />;

	const workExperience = WorkExperienceData.find(
		(w) => w.id === project.companyId
	);

	const renderSection = (section: PageSection) => {
		switch (section.type) {
			case 'image-gallery':
				return (
					<ImageGallery
						project={project}
						section={section}
					/>
				);
			case 'info':
				return (
					<InfoSection
						project={project}
						section={section}
					/>
				);
			case 'list':
				return (
					<ListSection
						project={project}
						section={section}
					/>
				);
			case 'image-large':
				return (
					<ImageLarge project={project} section={section} />
				);
			case 'video-large':
				return (
					<VideoLarge project={project} section={section} />
				);
			case 'youtube-large':
				return (
					<YoutubeLarge
						project={project}
						section={section}
					/>
				);
			case 'other-projects':
				return (
					<OtherProjects
						project={project}
						section={section}
					/>
				);
			case 'software-technologies':
				return (
					<SoftwareTechnologies
						project={project}
						section={section}
					/>
				);
			default:
				return null; // Handle unknown section types
		}
	};

	return (
		<div className="bg-background relative flex  w-screen flex-col items-center justify-between">
			<AnalyticsHelper
				pageName="Project Page"
				pageData={{ id: project?.id ?? 'none' }}
			/>
			<ProjectPageWrapper
				project={project}
				header={
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
						tags={[]}
						heading={`${workExperience?.company} | ${workExperience?.role}`}
					/>
				}>
				{/* Render all sections */}
				{project?.page?.sections?.map((section, index) => (
					<div key={index}>{renderSection(section)}</div>
				))}
			</ProjectPageWrapper>
		</div>
	);
}
