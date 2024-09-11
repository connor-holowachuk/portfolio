import React, { useState } from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';

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
	url?: string;
	imgUrl: string;
};

const items: WorkplaceScrollerItem[] = [
	{
		title: 'BlackBerry',
		imgUrl: '/images/workplaces/0.png',
	},
	{
		title: 'Eigen Fitness',
		imgUrl: '/images/workplaces/1.png',
	},
	{
		title: 'DNAi',
		imgUrl: '/images/workplaces/2.png',
	},
	{
		title: 'EXACT Technology Corporation',
		imgUrl: '/images/workplaces/3.png',
	},
	{
		title: 'PaperDoDo',
		imgUrl: '/images/workplaces/4.png',
	},
	{
		title: 'Eigen Ads',
		imgUrl: '/images/workplaces/5.png',
	},
	{
		title: 'WorkRide',
		imgUrl: '/images/workplaces/6.png',
	},
];

const WorkplaceScroller = async ({}: WorkplaceScrollerProps) => {
	return (
		<div className="w-full border-b border-border border-dashed">
			<InfiniteSlider gap={80}>
				{items.map((item) => (
					<div key={item.title} className="w-full h-full">
						<Image
							src={item.imgUrl}
							alt={item.title}
							width={200}
							height={200}
						/>
					</div>
				))}
			</InfiniteSlider>
		</div>
	);
};

export default WorkplaceScroller;
