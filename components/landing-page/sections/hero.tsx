'use client';
import React from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Label } from '@/components/ui/label';
import { TextEffect } from '@/components/ui/text-effect';
import { cn } from '@/lib/utils';

// Define and import types
type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
	const titleSizeClassNames =
		'text-[60px] h-[46px] md:text-[100px] md:h-[72px] lg:h-[100px] lg:text-[140px]';
	return (
		<div className="relative  h-[800px] min-h-[800px] w-full">
			<div className="z-0 w-full h-full absolute inset-0">
				<div className="w-full h-full relative">
					<div className="h-full w-full hidden md:block">
						<OptimizedImage
							src="/images/hero-bg.jpg"
							placeholderSrc="/images/hero-bg-sm.png"
							alt="Hero image"
							width={1920}
							height={1080}
							className="w-full h-full"
						/>
					</div>
					<div className="h-full w-full block md:hidden">
						<OptimizedImage
							src="/images/hero-bg-mobile.jpg"
							placeholderSrc="/images/hero-bg-mobile-sm.png"
							alt="Hero image"
							width={1920}
							height={1080}
							className="w-full h-full"
						/>
					</div>
					<div className="absolute z-50 h-1/6 w-full bg-gradient-to-t bottom-0 from-background to-background/0" />

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

			<div className="relative z-10 h-full inset-0 md:bg-black md:bg-opacity-20">
				{/* Content overlay */}
				<div className="container max-w-7xl mx-auto h-full flex flex-col justify-end pb-32 md:pb-24 px-4 md:px-8 lg:px-4 xl:px-0">
					<div className="text-white text-left flex flex-col">
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
								Connor
							</TextEffect>
						</Label>
						<Label
							variant="title"
							className={cn(
								titleSizeClassNames,
								'text-accent/80 tracking-tighter'
							)}>
							<TextEffect
								per="word"
								as="h3"
								preset="blur"
								delay={0.5}>
								Holowachuk
							</TextEffect>
						</Label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
