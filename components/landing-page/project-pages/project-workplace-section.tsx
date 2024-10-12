'use server';
import React from 'react';
import Link from 'next/link';

// Import components
import { Label } from '@/components/ui/label';
import { InView } from '@/components/ui/in-view';
import ProjectCard from '@/components/landing-page/sections/project-card';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';

// Import icons
import { ArrowRight } from 'lucide-react';

// Define and import types
import { ProjectData } from '@/lib/constants';
import { WorkExperience, Project } from '@/lib/types';
type ProjectWorkplaceSectionProps = {
	workplace: WorkExperience;
};

const ProjectWorkplaceSection = ({
	workplace,
}: ProjectWorkplaceSectionProps) => {
	const workplaceId = workplace.id;
	const workplaceProjects: Project[] = ProjectData.filter(
		(project) => project.companyId === workplaceId
	);

	return (
		<Section borderBottom className="py-12 px-4 lg:px-0">
			<Column
				width={1}
				className="col-span-1 lg:pr-6 pr-0 pb-8">
				<div className="w-full flex flex-col gap-4">
					<div className="w-full flex flex-col gap-1">
						<Label variant="title" color="default">
							{workplace.company}
						</Label>
						<Label variant="title3" color="muted">
							{workplace.role}
						</Label>
					</div>
					<Label variant="body" color="muted">
						{workplace.description}
					</Label>
					<Link
						href={`/workplace/${workplace.id}`}
						className="flex-row flex items-center gap-2 group">
						<Label
							variant="body"
							color="accent"
							underline="group-hover">
							View Workplace
						</Label>
						<ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-2 transition-all duration-300" />
					</Link>
				</div>
			</Column>
			<Column
				width={2}
				className="col-span-2 flex flex-col gap-4">
				{workplaceProjects.map((project) => (
					<ProjectCard
						project={project}
						variant="large"
						key={project.id}
					/>
				))}
			</Column>
		</Section>
	);
};

export default ProjectWorkplaceSection;
