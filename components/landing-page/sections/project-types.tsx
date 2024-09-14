import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import Link from 'next/link';

// Import icons
import { Laptop, Cpu, Frame, ChevronRight } from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Import actions

// Import providers

// Define and import types
type ProjectTypesProps = {};
type ProjectType = {
	title: string;
	description: string;
	icon: React.ReactNode;
	dateRange: string;
	url: string;
};

const projectTypes: ProjectType[] = [
	{
		title: 'Electrical Engineering',
		description:
			'My passion for electrical engineering lies in the design and implementation of innovative solutions that address real-world challenges. I thrive on turning complex technical problems into simple, elegant solutions.',
		icon: <Cpu size={48} />,
		url: '/engineering',
		dateRange: '2020 - 2024',
	},
	{
		title: 'Software Development',
		description:
			'Web development is the process of creating websites and web applications.',
		icon: <Laptop size={48} />,
		url: '/software',
		dateRange: '2020 - 2024',
	},
	{
		title: 'UI/UX Design',
		description:
			'Web development is the process of creating websites and web applications.',
		icon: <Frame size={48} />,
		url: '/design',
		dateRange: '2020 - 2024',
	},
];

const ProjectTypes = async ({}: ProjectTypesProps) => {
	return (
		<Section
			fullWidth
			className="border-b border-border border-dashed">
			{projectTypes.map((projectType, index) => (
				<Column
					width={1}
					borderLeft={index === 1}
					borderRight={index === 1}>
					<ProjectTypeCard
						key={projectType.title}
						index={index}
						{...projectType}
					/>
				</Column>
			))}
		</Section>
	);
};

export default ProjectTypes;

const ProjectTypeCard = ({
	title,
	description,
	icon,
	dateRange,
	index,
	url,
}: ProjectType & { index: number }) => {
	return (
		<div className="cursor-pointer flex flex-col group h-full hover:bg-primary text-white hover:text-background transition-all border-b border-border border-dashed lg:border-b-0 ease-in-outtransition-all duration-200 ease-in-out relative">
			{index === 1 && <SectionCross />}

			<div className="w-full px-12 py-12  flex flex-row items-center justify-between">
				<div className=" ">{icon}</div>
				<div className="">
					<Label
						variant="default"
						color="muted"
						cursor="pointer">
						{dateRange}
					</Label>
				</div>
			</div>
			<div className="w-full px-12 py-12 flex flex-grow flex-col">
				<div className="w-full flex flex-col mb-6">
					{title.split(' ').map((word: string) => (
						<Label
							cursor="pointer"
							variant="title"
							className="text-auto leading-tight duration-200 transition-all ease-in-out">
							{word}
						</Label>
					))}
				</div>

				<Label
					variant="default"
					color="muted"
					cursor="pointer">
					{description}
				</Label>
			</div>
			<div className="w-full flex flex-grow flex-col justify-end px-12 py-12">
				<Link
					href={url}
					className="flex flex-row items-center gap-2">
					<Label
						variant="default"
						font="mono"
						className="text-accent hover:text-accent-foreground"
						cursor="pointer">
						View More
					</Label>
					<ChevronRight size={16} className="text-accent" />
				</Link>
			</div>
		</div>
	);
};
