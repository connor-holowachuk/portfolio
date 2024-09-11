'use client';
import React from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Label } from '@/components/ui/label';
import { InView } from '@/components/ui/in-view';
import { TextEffect } from '@/components/ui/text-effect';

// Define and import types
type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
	return (
		<div className="relative  h-[800px] min-h-[800px] w-full">
			<div className="z-0 w-full h-full absolute inset-0">
				<div className="w-full h-full relative">
					<OptimizedImage
						src="/images/hero-bg.jpg"
						placeholderSrc="/images/hero-bg-sm.png"
						alt="Hero image"
						width={1920}
						height={1080}
						className="w-full h-full"
					/>
					<div className="absolute z-50 h-1/6 w-full bg-gradient-to-t bottom-0 from-background to-background/0" />

					<div
						className="gradient-blur z-20"
						style={{ height: '16.67%' }}>
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
				<div className="container max-w-screen-lg mx-auto h-full flex flex-col justify-end pb-24">
					<div className="text-white text-left flex flex-col">
						<Label
							variant="title"
							className="text-[140px] tracking-tighter leading-[100px]">
							<TextEffect
								per="word"
								as="h3"
								preset="blur">
								Connor
							</TextEffect>
						</Label>
						<Label
							variant="title"
							className="text-accent/80 text-[140px] tracking-tighter leading-[100px]">
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
