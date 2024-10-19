'use client';

import React, { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Project } from '@/lib/types';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/optimized-image';
import ProjectCardTag from './project-card-tag';

// Import icons
import { ArrowRight } from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Import and declare types
type ProjectCardProps = {
	project: Project;
	variant?: 'small' | 'large';
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	variant = 'large',
}) => {
	const projectTitleInitials = project.title
		.split(' ')
		.map((word) => word[0])
		.join('')
		.toUpperCase();

	const projectUri = `/projects/${project.id}`;

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			let allElements = Array.from(
				document.getElementsByClassName('project-card')
			);
			allElements.push(
				...Array.from(
					document.getElementsByClassName(
						'project-card-border'
					)
				)
			);

			for (const card of allElements) {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				(card as HTMLElement).style.setProperty(
					'--mouse-x',
					`${x}px`
				);
				(card as HTMLElement).style.setProperty(
					'--mouse-y',
					`${y}px`
				);
			}
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener(
				'mousemove',
				handleMouseMove
			);
		};
	}, []);

	return (
		<div
			className="group project-card-border relative  p-[1px] rounded-sm h-auto md:h-[500px] w-full bg-border/50 overflow-hidden transition-all duration-300 ease-in-out"
			style={
				{
					'--project-color-border':
						project.color ?? '#FC5F2B',
				} as React.CSSProperties
			}>
			<div
				className={cn(
					'project-card relative z-10 w-full h-full rounded-sm bg-[#0E0E0E]  grid  overflow-hidden',
					variant === 'small'
						? 'grid-cols-1 md:grid-cols-1 p-4 md:p-4'
						: 'grid-cols-1 md:grid-cols-2 p-4 md:p-8'
				)}
				style={
					{
						'--project-color': project.color ?? '#FC5F2B',
					} as React.CSSProperties
				}>
				<Link
					href={projectUri}
					className={cn(
						' border-white/5  md:h-full w-full  relative z-10',
						variant === 'small'
							? 'border-b border-r-0 w-full pb-8 mb-4 h-[200px] min-h-[200px]'
							: 'border-b md:border-b-0 md:border-r md:w-auto md:pr-8 pb-4 md:pb-0 h-[300px]'
					)}>
					<div
						className={cn(
							' w-full h-full rounded-sm border border-border overflow-hidden shadow-lg  transition-all duration-200 ease-in-out',
							variant === 'small'
								? 'md:group-hover:scale-105'
								: 'md:group-hover:scale-110'
						)}>
						<OptimizedImage
							src={
								project.thumbnailUrl ??
								'/images/workplaces/exact-technology/role.jpeg'
							}
							placeholderSrc={
								project.thumbnailBlurUrl ??
								'/images/workplaces/exact-technology/role.jpeg'
							}
							alt={project.title}
							className="w-full h-full object-cover"
							width={1000}
							height={500}
						/>
					</div>
				</Link>
				<div
					className={cn(
						'relative z-10 px-2  flex flex-col gap-2 py-4',
						variant === 'small'
							? 'md:pl-4 md:pr-4'
							: 'md:pl-8 md:pr-0'
					)}>
					{project.date && (
						<Label
							variant="body"
							font="mono"
							color="muted"
							className="font-light">
							{project.date}
						</Label>
					)}
					<Link href={projectUri}>
						<Label variant="titleLg" cursor="pointer">
							{project.title}
						</Label>
					</Link>

					<div className="flex flex-wrap gap-1 mt-2 mb-4">
						{project.tags.map((tag) => (
							<ProjectCardTag tag={tag} key={tag} />
						))}
					</div>
					<div className="flex flex-col gap-2 flex-grow">
						<Label
							variant="title3"
							color="muted"
							className="font-normal">
							{project.description}
						</Label>
					</div>
					<Link
						href={projectUri}
						className="flex flex-row items-center gap-2 mt-4 md:mt-0 hover:text-accent text-white/50 hover:bg-accent/20 bg-white/10 rounded-sm px-2 w-auto mr-auto transition-all duration-200 ease-in-out">
						<Label
							variant="body"
							className="font-normal text-auto"
							cursor="pointer">
							View More
						</Label>
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
				<div className="absolute z-0 -top-20 -right-12  h-full flex items-end justify-start opacity-[1%]">
					<Label
						variant="titleXl"
						className="text-white text-right text-[400px] tracking-[-30px] font-extrabold">
						{projectTitleInitials}
					</Label>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
