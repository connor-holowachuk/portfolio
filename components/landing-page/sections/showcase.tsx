import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { InView } from '@/components/ui/in-view';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';

import { OptimizedImage } from '@/components/ui/optimized-image';
import Link from 'next/link';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { ProjectData } from '@/lib/constants/projects';

const showcaseProjectIds = [
	'eigen-nodes',
	'exact-crane-avoidance',
	'exact-temperature-logger',
	'blackberry-hr-monitor',
	'university-tesla-coil',
	'personal-reflow-oven',
	'exact-rh-monitor-boring',
	'exact-satellite-logger',
	'eigen-ads-mobile-app',
	'exact-pcb-antenna-tuning',
];

const Showcase = async () => {
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
			<div className="w-full px-0 py-24">
				<ParallaxScroll projects={projects} />
			</div>
		</div>
	);
};

export default Showcase;
