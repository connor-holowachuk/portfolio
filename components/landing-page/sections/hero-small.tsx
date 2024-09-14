'use client';
import React from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Label } from '@/components/ui/label';
import { TextEffect } from '@/components/ui/text-effect';
import { cn } from '@/lib/utils';

// Define and import types
type HeroSectionProps = {
	title: string;
	imageSrc: string;
	imagePlaceholderSrc: string;
};

const HeroSmallSection: React.FC<HeroSectionProps> = ({
	title,
	imageSrc,
	imagePlaceholderSrc,
}) => {
	const titleSizeClassNames =
		'text-[60px] h-[46px] md:text-[100px]  md:leading-[100px] lg:leading-[120px] lg:text-[140px]';
	return (
		<div className="relative  h-[500px] min-h-[500px] w-full mb-24">
			<div className="z-0 w-full h-full absolute inset-0">
				<div className="w-full h-full relative">
					<div className="h-full w-full">
						<OptimizedImage
							src={imageSrc}
							placeholderSrc={imagePlaceholderSrc}
							alt="Hero image"
							width={1920}
							height={1080}
							className="w-full h-full"
						/>
					</div>
					<div className="absolute z-50 h-1/6 w-full bg-gradient-to-t bottom-0 from-background to-background/0" />
					<div className="absolute z-50 h-full w-2/3 bg-gradient-to-r top-0 from-background/50 to-background/0" />
					<div
						className="gradient-blur z-20"
						style={{ height: '16.67%', zIndex: 20 }}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>

			<div className="relative z-10 h-full inset-0 bg-black bg-opacity-20">
				{/* Content overlay */}
				<div className="container max-w-7xl mx-auto h-full flex flex-col justify-end pb-32 md:pb-32 px-4 md:px-8 lg:px-4 xl:px-0">
					<div className="text-white text-left flex flex-col w-full md:w-2/3">
						<Label
							variant="title"
							className={cn(
								titleSizeClassNames,
								' tracking-tighter '
							)}>
							<TextEffect
								per="word"
								as="h3"
								preset="blur">
								{title}
							</TextEffect>
						</Label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSmallSection;