import React, { useState } from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';
import Link from 'next/link';

// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Import actions

// Import providers

// Define and import types
type WorkplaceScrollerProps = {
	filterType?: 'hardware' | 'software' | 'design' | undefined;
};
type WorkplaceScrollerItem = {
	title: string;
	url: string;
	imgUrl: string;
	types: ('hardware' | 'software' | 'design' | undefined)[];
};

const items: WorkplaceScrollerItem[] = [
	{
		title: 'BlackBerry',
		imgUrl: '/images/workplaces/0.png',
		url: '/workplace/blackberry',
		types: ['hardware', 'software'],
	},
	{
		title: 'Eigen Fitness',
		imgUrl: '/images/workplaces/1.png',
		url: '/workplace/eigen-fitness',
		types: ['hardware', 'software', 'design'],
	},
	{
		title: 'DNAi',
		imgUrl: '/images/workplaces/2.png',
		url: '/workplace/dnai-labs',
		types: ['software', 'design'],
	},
	{
		title: 'EXACT Technology Corporation',
		imgUrl: '/images/workplaces/3.png',
		url: '/workplace/exact-technology',
		types: ['hardware', 'software'],
	},
	{
		title: 'PaperDoDo',
		imgUrl: '/images/workplaces/4.png',
		url: '/workplace/paperdododo',
		types: ['software', 'design'],
	},
	{
		title: 'Eigen Ads',
		imgUrl: '/images/workplaces/5.png',
		url: '/workplace/eigen-ads',
		types: ['software', 'design'],
	},
	{
		title: 'WorkRide',
		imgUrl: '/images/workplaces/6.png',
		url: '/workplace/workride',
		types: ['software', 'design'],
	},
];

const WorkplaceScroller = async ({
	filterType,
}: WorkplaceScrollerProps) => {
	const filteredItems = items.filter(
		(item) => !filterType || item.types.includes(filterType)
	);
	return (
		<div className="w-full border-b border-border border-dashed">
			<InfiniteSlider
				gap={
					filterType
						? filterType === 'hardware'
							? 140
							: filterType === 'software'
								? 120
								: 80
						: 80
				}>
				{filteredItems.map((item) => (
					<Link
						key={item.title}
						href={item.url}
						className="w-full h-full hover:scale-110 cursor-pointer transition-all duration-300">
						<Image
							src={item.imgUrl}
							alt={item.title}
							width={200}
							height={200}
						/>
					</Link>
				))}
			</InfiniteSlider>
		</div>
	);
};

export default WorkplaceScroller;
