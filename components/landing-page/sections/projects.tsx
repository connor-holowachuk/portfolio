import React from 'react';
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import ProjectCard from './project-card';
import { WorkExperience, Project } from '@/lib/types';
import { ProjectData } from '@/lib/constants';

type ProjectsProps = {
	workExperience: WorkExperience;
	projects?: Project[];
};

const ProjectsSection: React.FC<ProjectsProps> = ({
	workExperience,
	projects,
}) => {
	const getProjects = () => {
		if (projects && projects.length > 0) return projects;
		const workExperienceProjectsIds = workExperience.projectsIds;
		const workExperienceProjects = ProjectData.filter((project) =>
			workExperienceProjectsIds?.includes(project.id)
		);
		return workExperienceProjects;
	};

	return (
		<Section fullWidth borderBottom id="workplaces">
			<Column
				width={1}
				borderRight
				className="col-span-1 sticky top-0 h-screen">
				<div className="w-full h-full flex flex-col justify-center px-12 py-12 relative">
					<SectionCross />
					<Label variant="body" color="muted">
						While at {workExperience.company}
					</Label>
					<Label variant="titleXl">Projects</Label>
					<Label
						variant="title3"
						color="muted"
						className="mt-8 font-normal">
						Dolor sit aute voluptate magna. Sunt velit
						culpa sint eu in pariatur duis ex culpa id
						est. Velit incididunt ad culpa irure nisi
						consectetur minim dolore amet.
					</Label>
				</div>
			</Column>
			<Column width={2} className="flex flex-col">
				<div className="w-full flex flex-col gap-16 px-12 py-48">
					{getProjects().map(
						(item: Project, index: number) => (
							<ProjectCard
								key={`card-${index}`}
								project={item}
							/>
						)
					)}
				</div>
			</Column>
		</Section>
	);
};

export default ProjectsSection;
