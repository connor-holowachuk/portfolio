import React from 'react';
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type WorkExperienceProps = {
	title?: string;
	filterType?: 'hardware' | 'software' | 'design' | undefined;
};
import { WorkExperience } from '@/lib/types';
import { WorkExperienceData } from '@/lib/constants';

const WorkExperienceSection: React.FC<WorkExperienceProps> = async ({
	title,
	filterType,
}) => {
	const filteredWorkExperience = WorkExperienceData.filter(
		(item) => {
			if (filterType) {
				return item.types?.includes(filterType);
			}
			return true;
		}
	);
	return (
		<Section fullWidth borderBottom id="workplaces">
			<Column
				width={1}
				borderRight
				className="col-span-1 sticky top-0 h-screen z-0">
				<div className="w-full h-full flex flex-col justify-center px-4 md:px-12 py-12 relative">
					<SectionCross />
					<Label variant="body" color="muted">
						Past & Present
					</Label>
					<Label variant="titleLg" className=" ">
						{title ?? 'Work Experience'}
					</Label>
					<Label
						variant="title3"
						color="muted"
						className="mt-8 font-normal">
						Between startups and large corporations, I've
						been fortunate to work with a variety of
						technologies and industries. Along the way, I
						learned a lot about what it takes to be a
						successful engineer from the great teams I've
						worked with, and I'm always looking for new
						challenges.
					</Label>
				</div>
			</Column>
			<Column
				width={2}
				className=" flex flex-col bg-background lg:bg-transparent">
				<div className="w-full h-[250px] relative z-10 block lg:hidden">
					<div
						className="gradient-blur absolute z-0"
						style={{ height: '100%' }}>
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
					</div>
					<div className="absolute z-10 w-full h-full bg-gradient-to-b from-background/0 to-background" />
				</div>
				<div className="w-full flex flex-col gap-6 md:gap-12 lg:gap-16 px-4 md:px-12 py-48 bg-background relative z-10 lg:bg-transparent">
					{filteredWorkExperience
						.filter((item) => !item.hideCard)
						.map((item, index) => (
							<WorkExperienceCard
								key={`card-${index}`}
								{...item}
							/>
						))}
				</div>
			</Column>
		</Section>
	);
};

export default WorkExperienceSection;

const WorkExperienceCard = ({
	company,
	role,
	date,
	location,
	description,
	scheme,
	image,
	id,
}: WorkExperience) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 lg:grid-cols-2 relative flex-row p-8 rounded-xs min-h-[500px] w-full',
				scheme === 'light'
					? 'bg-primary text-background'
					: scheme === 'color-blue'
						? 'bg-[#3B4563] text-white'
						: scheme === 'color-green'
							? 'bg-[#DEE902] text-black'
							: 'bg-[#17181A] text-white'
			)}>
			<div
				className={cn(
					'flex flex-col gap-2 border-b lg:border-b-0 lg:border-r border-border py-4',
					scheme === 'light'
						? 'border-border/20'
						: 'border-border/50'
				)}>
				<Label variant="body" font="mono" color="muted">
					{role}
				</Label>
				<div className="w-full py-4">
					<Image
						src={image}
						alt={company}
						width={240}
						height={100}
					/>
				</div>
				<div className="w-full flex flex-col justify-end flex-grow">
					<Label variant="body" color="muted">
						{date}
					</Label>
					<Label variant="body" color="muted">
						{location}
					</Label>
				</div>
			</div>
			<div className="flex flex-col gap-2 px-0 lg:px-8 py-4">
				<div className="w-full flex flex-grow py-4">
					<Label variant="body" className="text-auto">
						{description}
					</Label>
				</div>
				<Link
					href={`/workplace/${id}`}
					className={cn(
						'text-muted-foreground',
						scheme === 'light'
							? 'hover:text-black'
							: scheme === 'color-blue'
								? 'hover:text-white'
								: scheme === 'color-green'
									? 'hover:text-black'
									: 'hover:text-white'
					)}>
					<Label
						variant="body"
						className="text-auto"
						cursor="pointer">
						View More
					</Label>
				</Link>
			</div>
		</div>
	);
};
