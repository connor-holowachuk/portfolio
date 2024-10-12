import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Import actions

// Import providers

// Define and import types
import {
	SoftwareTechnologyOption,
	SoftwareTechnologyOptionType,
} from '@/lib/types';
import { SoftwareTechnologiesData } from '@/lib/constants/software-technologies';

type TechnologyOptionProps = {
	technology: SoftwareTechnologyOption;
};

const TechnologyOption = ({ technology }: TechnologyOptionProps) => {
	const technologyData =
		SoftwareTechnologiesData.find((t) => t.type === technology) ??
		null;
	return (
		<Link
			href={technologyData?.link ?? '#'}
			target={technologyData?.link ? '_blank' : '_self'}
			className="group cursor-pointer hover:border-white/80 transition-all duration-300 grid-span-1 p-6 border border-border rounded-lg border-dashed flex items-center justify-center">
			<div className="group-hover:scale-105 transition-all duration-300 flex flex-row w-full items-center gap-4">
				<Image
					src={technologyData?.iconUrl ?? ''}
					alt={technologyData?.title ?? ''}
					width={40}
					height={40}
					className="rounded-md"
				/>
				<Label variant="title3" cursor="pointer">
					{technologyData?.title}
				</Label>
			</div>
		</Link>
	);
};

export default TechnologyOption;
