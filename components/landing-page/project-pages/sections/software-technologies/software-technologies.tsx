import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { InView } from '@/components/ui/in-view';
import ProjectCard from '@/components/landing-page/sections/project-card';
import TechnologyOption from './technology-option';
// Import utils
import { cn } from '@/lib/utils';

// Define and import types
import {
	Project,
	PageSection,
	OtherProjectsSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
} from '@/lib/types';
type SoftwareTechnologiesProps = {
	project: Project;
	section: SoftwareTechnologiesSection;
};
import { ProjectData } from '@/lib/constants/projects';

const SoftwareTechnologies = async ({
	project,
	section,
}: SoftwareTechnologiesProps) => {
	const { technologyOptions } = section;

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
				<div className="container max-w-7xl mx-auto flex flex-col gap-4 pt-32 px-4 md:px-8 lg:px-8 xl:px-2">
					<div className=" pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
						<Label variant="titleLg">
							{section.title ?? 'Technologies'}
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
					<div className="">
						<Label
							variant="title2"
							color="muted"
							className="font-normal tracking-normal leading-normal">
							{section.description ??
								'Explore the technologies I used to build this project'}
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
				<div className="container w-full max-w-7xl mx-auto grid grid-cols-1 gap-x-6 gap-y-3 md:gap-y-6 md:grid-cols-3 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
					{technologyOptions.map((technology, index) => (
						<TechnologyOption
							key={index}
							technology={technology}
						/>
					))}
				</div>
			</InView>
		</div>
	);
};

export default SoftwareTechnologies;
