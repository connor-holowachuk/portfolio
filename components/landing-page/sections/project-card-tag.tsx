import React from 'react';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { cn } from '@/lib/utils';
type ProjectCardTagProps = {
	tag: string;
	variant?: 'default' | 'light' | 'accent';
};

const ProjectCardTag: React.FC<ProjectCardTagProps> = ({
	tag,
	variant = 'default',
}) => {
	const tagWords = tag.split('_');
	const tagString = tagWords
		.map(
			(word) =>
				word.charAt(0).toUpperCase() +
				word.slice(1).toLowerCase()
		)
		.join(' ');
	// tagWords.charAt(0).toUpperCase() +
	// tagWords.slice(1).toLowerCase();
	return (
		<Link
			href={`/tags/${tag.toLowerCase()}`}
			key={tag}
			className={cn(
				'flex flex-row items-center gap-4 rounded-full border px-2 h-5 bg-white/10 border-border text-white/50 hover:bg-accent/20 hover:text-accent hover:border-accent cursor-auto transition-all duration-200 ease-in-out',
				variant === 'light' &&
					'bg-white/10 backdrop-blur-md border-white text-white/80',
				variant === 'accent' &&
					'bg-accent/20 backdrop-blur-md border-accent text-accent'
			)}>
			<Label
				variant="helper"
				color="muted"
				className={cn(
					'font-normal hover:text-accent',
					variant === 'light' && 'text-white/80',
					variant === 'accent' && 'text-accent'
				)}
				cursor="pointer">
				{tagString}
			</Label>
		</Link>
	);
};

export default ProjectCardTag;
