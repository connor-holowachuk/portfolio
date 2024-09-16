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
type WorkplaceScrollerProps = {};
type WorkplaceScrollerItem = {
	title: string;
	url: string;
	imgUrl: string;
};

const items: WorkplaceScrollerItem[] = [
	{
		title: 'BlackBerry',
		imgUrl: '/images/workplaces/0.png',
		url: '/workplace/blackberry',
	},
	{
		title: 'Eigen Fitness',
		imgUrl: '/images/workplaces/1.png',
		url: '/workplace/eigen-fitness',
	},
	{
		title: 'DNAi',
		imgUrl: '/images/workplaces/2.png',
		url: '/workplace/dnai',
	},
	{
		title: 'EXACT Technology Corporation',
		imgUrl: '/images/workplaces/3.png',
		url: '/workplace/exact-technology',
	},
	{
		title: 'PaperDoDo',
		imgUrl: '/images/workplaces/4.png',
		url: '/workplace/paperdododo',
	},
	{
		title: 'Eigen Ads',
		imgUrl: '/images/workplaces/5.png',
		url: '/workplace/eigen-ads',
	},
	{
		title: 'WorkRide',
		imgUrl: '/images/workplaces/6.png',
		url: '/workplace/workride',
	},
];

const WorkplaceScroller = async ({}: WorkplaceScrollerProps) => {
	return (
		<div className="w-full border-b border-border border-dashed">
			<InfiniteSlider gap={80}>
				{items.map((item) => (
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
