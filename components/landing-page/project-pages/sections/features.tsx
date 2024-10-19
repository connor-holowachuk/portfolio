import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DialogBasicImage } from '@/components/ui/dialog-image';
import { InView } from '@/components/ui/in-view';
// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Define and import types
import { Project, FeaturesSection, Feature } from '@/lib/types';
type FeaturesProps = {
	project: Project;
	section: FeaturesSection;
};

const Features = async ({ project, section }: FeaturesProps) => {
	const { features } = section;
	return (
		<div className="w-full border-b border-border border-dashed">
			{section.title && (
				<InView
					variants={{
						hidden: {
							opacity: 0,
							y: 100,
							filter: 'blur(12px)',
						},
						visible: {
							opacity: 1,
							y: 0,
							filter: 'blur(0px)',
						},
					}}
					viewOptions={{ margin: '0px 0px -100px 0px' }}
					transition={{
						duration: 0.9,
						ease: 'easeInOut',
					}}>
					<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
						<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
							<Label variant="titleLg">
								{section.title}
							</Label>
							{section.subtitle && (
								<Label
									variant="title3"
									font="mono"
									color="muted"
									className="font-light">
									{section.subtitle}
								</Label>
							)}
						</div>
						<div className="grid-span-1">
							<Label
								variant="title"
								color="muted"
								className="font-normal tracking-normal leading-normal">
								{section.description}
							</Label>
						</div>
					</div>
				</InView>
			)}
			<div className="container w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 pb-32 px-4 md:px-8 lg:px-8 xl:px-2">
				{features.map((feature, index) => (
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 100,
								filter: 'blur(12px)',
							},
							visible: {
								opacity: 1,
								y: 0,
								filter: 'blur(0px)',
							},
						}}
						viewOptions={{ margin: '0px 0px -100px 0px' }}
						transition={{
							duration: 0.9,
							ease: 'easeInOut',
						}}>
						<FeatureCard
							feature={feature}
							index={index}
						/>
					</InView>
				))}
			</div>
		</div>
	);
};

const FeatureCard = ({
	feature,
	index,
}: {
	feature: Feature;
	index: number;
}) => {
	return (
		<div
			className={cn(
				'flex flex-col lg:border-r  py-10 relative group/feature border-border border-dashed h-full',
				(index === 0 || index === 4) &&
					'lg:border-l dark:border-neutral-800',
				index < 4 && 'lg:border-b dark:border-neutral-800'
			)}>
			{index < 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-accent/20 to-transparent pointer-events-none" />
			)}
			{index >= 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-accent/20 to-transparent pointer-events-none" />
			)}
			<div className="mb-4 relative z-10 px-10 text-primary/60 group-hover/feature:text-accent transition duration-200">
				{feature.icon}
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-accent transition-all duration-200 origin-center" />
				<Label
					variant="title2"
					className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
					{feature.title}
				</Label>
			</div>
			<Label variant="body" className="px-10" color="muted">
				{feature.description}
			</Label>
		</div>
	);
};
export default Features;
