'use client';

import React, { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Project } from '@/lib/types';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/optimized-image';

import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
	project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
			className="group project-card-border relative flex-row p-[1px] rounded-sm h-[500px] w-full bg-border/50 overflow-hidden transition-all duration-300 ease-in-out"
			style={
				{
					'--project-color-border':
						project.color ?? '#FC5F2B',
				} as React.CSSProperties
			}>
			<div
				className="project-card relative z-10 w-full h-full rounded-sm bg-[#0E0E0E] p-8 grid grid-cols-2 overflow-hidden"
				style={
					{
						'--project-color': project.color ?? '#FC5F2B',
					} as React.CSSProperties
				}>
				<Link
					href={projectUri}
					className=" border-r border-white/5 h-full pr-8 relative z-10">
					<div className="group-hover:scale-110 w-full h-full rounded-sm border border-border overflow-hidden shadow-lg  transition-all duration-200 ease-in-out">
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
				<div className="relative z-10 pl-8 flex flex-col gap-2 py-4">
					{project.date && (
						<Label
							variant="body"
							font="mono"
							color="muted"
							className="font-light">
							{project.date}
						</Label>
					)}
					<Label variant="titleLg">{project.title}</Label>

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
						className="flex flex-row items-center gap-2 hover:text-accent text-white/50 hover:bg-accent/20 rounded-sm px-2 w-auto mr-auto transition-all duration-200 ease-in-out">
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

const ProjectCardTag: React.FC<{ tag: string }> = ({ tag }) => {
	const tagString =
		tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
	return (
		<Link
			href={`/tags/${tag.toLowerCase()}`}
			key={tag}
			className="flex flex-row items-center gap-4 rounded-full border px-2 h-5 bg-white/10 border-border text-white/50 hover:bg-accent/20 hover:text-accent hover:border-accent cursor-auto transition-all duration-200 ease-in-out">
			<Label
				variant="helper"
				color="muted"
				className="font-normal hover:text-accent"
				cursor="pointer">
				{tagString}
			</Label>
		</Link>
	);
};
