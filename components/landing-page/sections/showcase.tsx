import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

import { OptimizedImage } from '@/components/ui/optimized-image';
import Link from 'next/link';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { ProjectData } from '@/lib/constants/projects';

const defaultShowcaseProjectIds = [
	'eigen-nodes',
	'dnai-labs-realtime-chat',
	'eigen-dashboard',
	'university-tesla-coil',
	'eigen-mobile-app',
	'exact-temperature-logger',
	'personal-reflow-oven',
	'exact-rh-monitor-boring',
	'dnai-labs-dashboard',
	'eigen-ads-mobile-app',
	'exact-pcb-antenna-tuning',
	'exact-satellite-logger',
];

type ShowcaseProps = {
	title?: string;
	projectIds?: string[];
};

const Showcase = async ({ title, projectIds }: ShowcaseProps) => {
	const showcaseProjectIds =
		projectIds ?? defaultShowcaseProjectIds;

	// Get projects from project data
	const projects = ProjectData.filter((project) =>
		showcaseProjectIds.includes(project.id)
	);

	// Sort projects by place in showcaseProjectIds
	projects.sort(
		(a, b) =>
			showcaseProjectIds.indexOf(a.id) -
			showcaseProjectIds.indexOf(b.id)
	);

	return (
		<div className="w-full bg-background z-50 flex flex-col items-center h-auto overflow-hidden border-b border-border border-dashed">
			<div className="w-full pt-64 pb-12 flex flex-col items-center">
				<Label variant="titleXl" className="text-center">
					{title ?? 'Featured Projects'}
				</Label>
			</div>
			<div className="w-full px-0 py-24">
				<ParallaxScroll projects={projects} />
			</div>
			<Link
				href="/projects"
				className="px-4 group py-2 mb-24 items-center text-accent justify-center flex flex-row">
				<Label
					variant="default"
					color="accent"
					underline="group-hover">
					View All Projects
				</Label>
				<ArrowRight className="w-4 h-4 ml-2" />
			</Link>
		</div>
	);
};

export default Showcase;
