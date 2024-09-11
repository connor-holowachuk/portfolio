import React, { useRef, useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type WorkExperienceProps = {};
type WorkExperienceCardProps = {
	company: string;
	role: string;
	date: string;
	location: string;
	description: string;
	scheme: 'light' | 'dark' | 'color-blue' | 'color-green';
	image: string;
};

const workExperienceData: WorkExperienceCardProps[] = [
	{
		company: 'DNAi Labs',
		role: 'Founder & CEO',
		date: 'May 2024 - Present',
		location: 'Vancouver, BC',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/dnai-dark.png',
		scheme: 'light',
	},
	{
		company: 'Eigen Fitness',
		role: 'Co-founder & CEO',
		date: 'June 2022 - May 2024',
		location: 'Toronto, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/eigen-fitness-light.png',
		scheme: 'dark',
	},
	{
		company: 'EXACT Technology Corporation',
		role: 'Electrical Engineer',
		date: 'Sept 2019 - June 2022',
		location: 'Toronto, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/exact-light.png',
		scheme: 'dark',
	},
	{
		company: 'PaperDoDo',
		role: 'Software Development Intern',
		date: 'Sept 2018 - Dec 2018',
		location: 'Toronto, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/paperdodo-color.png',
		scheme: 'color-blue',
	},
	{
		company: 'BlackBerry',
		role: 'Software Development Intern',
		date: 'Jan 2018 - Apr 2018',
		location: 'Toronto, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/blackberry-light.png',
		scheme: 'dark',
	},
	{
		company: 'WorkRide',
		role: 'Founder & CEO',
		date: 'May 2017 - Sept 2017',
		location: 'Windsor, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/workride-dark.png',
		scheme: 'color-green',
	},
	{
		company: 'Eigen Advertisement',
		role: 'Co-founder & CEO',
		date: 'Aug 2016 - May 2017',
		location: 'Windsor, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/eigen-ads-color.png',
		scheme: 'light',
	},
];

const WorkExperience: React.FC<WorkExperienceProps> = async () => {
	return (
		<Section fullWidth borderBottom>
			<Column
				width={1}
				borderRight
				className="col-span-1 sticky top-0 h-screen">
				<div className="w-full h-full flex flex-col justify-center px-12 py-12 relative">
					<SectionCross />
					<Label variant="body" color="muted">
						Past & Present
					</Label>
					<Label variant="titleXl">Work Experience</Label>
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
			<Column width={2} className=" flex flex-col ">
				<div className="w-full flex flex-col gap-16 px-12 py-48">
					{workExperienceData.map((item, index) => (
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

export default WorkExperience;

const WorkExperienceCard = ({
	company,
	role,
	date,
	location,
	description,
	scheme,
	image,
}: WorkExperienceCardProps) => {
	return (
		<div
			className={cn(
				'grid grid-cols-2 relative flex-row p-8 rounded-xs h-[500px] w-full',
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
					'flex flex-col gap-2 border-r border-border py-4',
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
			<div className="flex flex-col gap-2 p-8">
				<Label variant="body" className="text-auto">
					{description}
				</Label>
			</div>
		</div>
	);
};
