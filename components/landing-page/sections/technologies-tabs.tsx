'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useTechnologies } from '@/lib/providers/TechnologiesContext';
import { TechnologiesOptions } from '@/lib/constants';

const TechnologiesTabs = () => {
	const { selectedTab, setSelectedTab } = useTechnologies();

	return (
		<div className="flex flex-col gap-2 w-auto float-left py-8">
			{TechnologiesOptions.map((option, index) => (
				<div
					key={index}
					onClick={() => setSelectedTab(option.title)}
					className={cn(
						'flex flex-row gap-2 items-center float-left h-12  transition-all duration-200 ease-in-out cursor-pointer px-4 color-white/50 justify-start w-auto rounded-xs hover:bg-accent-foreground',
						selectedTab === option.title
							? 'bg-accent'
							: 'opacity-50 hover:opacity-100'
					)}>
					{option.icon}
					<Label variant="button" cursor="pointer">
						{option.title}
					</Label>
				</div>
			))}
		</div>
	);
};

export default TechnologiesTabs;
