import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DialogBasicImage } from '@/components/ui/dialog-image';

// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Import actions

// Import providers

// Define and import types
import { Project } from '@/lib/types';
type ProjectPageWrapperProps = {
	header: React.ReactNode;
	children: React.ReactNode;
	project: Project;
};

const ProjectPageWrapper = async ({
	header,
	children,
	project,
}: ProjectPageWrapperProps) => {
	return (
		<div className="w-full ">
			{header}
			<div className="w-full">
				<div className="w-full border-b border-border border-dashed">
					<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
						<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
							<Label variant="titleLg">
								Project Overview
							</Label>
							<Label
								variant="title3"
								font="mono"
								color="muted"
								className="font-light">
								{project.date}
							</Label>
						</div>
						<div className="grid-span-1">
							<Label
								variant="title"
								color="muted"
								className="font-normal tracking-normal leading-normal">
								{project.page?.summary}
							</Label>
						</div>
					</div>
				</div>
				<div className="w-full border-b border-border border-dashed">
					<div className="container w-full max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
						<div className="grid-span-1 flex flex-col gap-6">
							<DialogBasicImage
								src={
									'/images/projects/exact-technology/satellite-logger/logger-open-1.jpeg'
								}
								alt={`${project.title} Project Thumbnail`}
								className="w-full h-[260px] object-cover"
							/>
							<div className="flex flex-col gap-4">
								<Label variant="title2">
									Open Logger
								</Label>
								<Label variant="body" color="muted">
									Satellite Logger
								</Label>
							</div>
						</div>
						<div className="grid-span-1">
							<DialogBasicImage
								src={
									'/images/projects/exact-technology/satellite-logger/logger-open-2.jpeg'
								}
								alt={`${project.title} Project Thumbnail`}
								className="w-full h-[260px] object-cover"
							/>
						</div>
						<div className="grid-span-1">
							<DialogBasicImage
								src={
									'/images/projects/exact-technology/satellite-logger/logger-prototype-1.jpeg'
								}
								alt={`${project.title} Project Thumbnail`}
								className="w-full h-[260px] object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default ProjectPageWrapper;
