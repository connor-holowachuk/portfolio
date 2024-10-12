import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { InView } from '@/components/ui/in-view';
import ProjectCard from '@/components/landing-page/sections/project-card';

// Define and import types
import { Project, OtherProjectsSection } from '@/lib/types';
type OtherProjectsProps = {
	project: Project;
	section: OtherProjectsSection;
};
import { ProjectData } from '@/lib/constants/projects';

const OtherProjects = async ({
	project,
	section,
}: OtherProjectsProps) => {
	const { projectIds } = section;
	const projects = ProjectData.filter((p) =>
		projectIds.includes(p.id)
	);
	return (
		<div className="w-full border-b border-border border-dashed">
			<InView
				variants={{
					hidden: {
						opacity: 0,
						y: 100,
						filter: 'blur(12px)',
					},
					visible: {
						opacity: 1,
						y: 0,
						filter: 'blur(0px)',
					},
				}}
				viewOptions={{ margin: '0px 0px -100px 0px' }}
				transition={{
					duration: 0.9,
					ease: 'easeInOut',
				}}>
				<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-32 px-4 md:px-8 lg:px-8 xl:px-2">
					<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
						<Label variant="titleLg">
							{section.title ?? 'Similar Projects'}
						</Label>
						{section.subtitle && (
							<Label
								variant="title3"
								font="mono"
								color="muted"
								className="font-light">
								{section.subtitle}
							</Label>
						)}
					</div>
					<div className="grid-span-1">
						<Label
							variant="title"
							color="muted"
							className="font-normal tracking-normal leading-normal">
							{section.description ??
								'Explore other projects similar to this one'}
						</Label>
					</div>
				</div>
			</InView>
			<InView
				variants={{
					hidden: {
						opacity: 0,
						y: 100,
						filter: 'blur(12px)',
					},
					visible: {
						opacity: 1,
						y: 0,
						filter: 'blur(0px)',
					},
				}}
				viewOptions={{ margin: '0px 0px -100px 0px' }}
				transition={{
					duration: 0.9,
					ease: 'easeInOut',
				}}>
				<div className="container w-full max-w-7xl mx-auto grid grid-cols-1 gap-x-6 gap-y-6 md:gap-y-12 md:grid-cols-3 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
					{projects.map((project, index) => (
						<div className="grid-span-1 flex flex-col gap-6">
							<ProjectCard
								project={project}
								variant="small"
							/>
						</div>
					))}
				</div>
			</InView>
		</div>
	);
};

export default OtherProjects;
