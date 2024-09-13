'use client';
import React from 'react';
import { useTechnologies } from '@/lib/providers/TechnologiesContext';
import {
	TechnologyPage,
	TechnologyGroup,
	Technology,
	WorkExperience,
	Project,
} from '@/lib/types';
import {
	TechnologiesOptions,
	WorkExperienceData,
	ProjectData,
} from '@/lib/constants';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const TechnologiesPages = () => {
	const { selectedTab } = useTechnologies();

	return (
		<>
			{TechnologiesOptions.map((option: TechnologyPage) => {
				return selectedTab === option.title ? (
					<TechnologiesPage
						key={option.title}
						page={option}
					/>
				) : null;
			})}
		</>
	);
};

export default TechnologiesPages;

const TechnologiesPage = ({ page }: { page: TechnologyPage }) => {
	return (
		<div className="w-full flex flex-col">
			<div className="w-full flex flex-row items-center gap-4">
				<div className="w-14 h-14 rounded-full bg-gradient-to-b from-accent from-0% to-border to-60% p-[1px]">
					<div className="w-full h-full rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center">
						<div className="scale-150">
							<div className="opacity-20 animate-slow-spin">
								{page.icon}
							</div>
						</div>
					</div>
				</div>
				<Label variant="title">{page.title}</Label>
			</div>
			<div className="w-full pt-12">
				{page.groups.map((content: TechnologyGroup) => {
					return (
						<TechnologyGroupBlock
							key={content.title}
							group={content}
						/>
					);
				})}
			</div>
		</div>
	);
};

const TechnologyGroupBlock = ({
	group,
}: {
	group: TechnologyGroup;
}) => {
	return (
		<div className="w-full border-t border-border pt-6 pb-12 flex flex-col items-center gap-4">
			<div className="flex flex-row w-full">
				<Label variant="title2" className="w-1/2">
					{group.title}
				</Label>
				{group.description ? (
					<div className="w-1/2 flex flex-row items-center justify-end text-right">
						<Label
							variant="helper"
							color="muted"
							font="mono"
							className="font-light">
							{group.description}
						</Label>
					</div>
				) : null}
			</div>
			<div
				className={cn(
					'w-full ',
					group.splitColumns
						? 'grid grid-cols-2'
						: 'flex flex-col'
				)}>
				{group.technologies.map((technology: Technology) => {
					return (
						<TechnologyCell
							key={technology.title}
							technology={technology}
						/>
					);
				})}
			</div>
		</div>
	);
};

const TechnologyCell = ({
	technology,
}: {
	technology: Technology;
}) => {
	const currentYear = new Date().getFullYear();

	const getWorkExperience = (id: string) => {
		return (
			WorkExperienceData.find((item) => item.id === id) ?? null
		);
	};
	const getProject = (id: string) => {
		return ProjectData.find((item) => item.id === id) ?? null;
	};

	const yearsOfExperience = technology.yearsOfExperience
		? technology.yearsOfExperience
		: currentYear - technology.startYear;

	return (
		<div
			key={technology.title}
			className="w-full flex flex-col  py-1">
			<div className="flex flex-row items-center gap-4">
				<ChevronRight size={16} className="text-accent" />
				<Label variant="title3">{technology.title}</Label>
			</div>
			<div className="items-center justify-between flex w-full pl-8">
				<Label variant="default" color="muted">
					{yearsOfExperience < 1
						? 'Less than 1'
						: yearsOfExperience}{' '}
					year{yearsOfExperience > 1 ? 's' : ''} experience
				</Label>
				<div className="flex flex-row items-center gap-1">
					{technology.workExperienceIds &&
					technology.workExperienceIds.length > 0
						? technology.workExperienceIds.map((id) => {
								return (
									<TechnologyChip
										key={id}
										workExperience={getWorkExperience(
											id
										)}
									/>
								);
							})
						: null}
					{technology.projectIds &&
					technology.projectIds.length > 0
						? technology.projectIds.map((id) => {
								return (
									<TechnologyChip
										key={id}
										workExperience={getProject(
											id
										)}
									/>
								);
							})
						: null}
				</div>
			</div>
		</div>
	);
};

type TechnologyChipProps = {
	workExperience: WorkExperience | Project | null;
};
const TechnologyChip = ({ workExperience }: TechnologyChipProps) => {
	return (
		<Link
			href={`/workplace/${workExperience?.id}`}
			className="flex flex-row items-center gap-4 rounded-full border px-2 h-5 bg-white/10 border-border text-white/50 hover:bg-accent/20 hover:text-accent hover:border-accent cursor-auto transition-all duration-200 ease-in-out">
			<Label
				variant="helper"
				className="text-auto text-xs"
				cursor="pointer">
				{workExperience && 'company' in workExperience
					? workExperience.company
					: (workExperience?.title ?? 'bing')}
			</Label>
		</Link>
	);
};
