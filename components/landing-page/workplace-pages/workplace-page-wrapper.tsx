import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { TextEffect } from '@/components/ui/text-effect';
import Image from 'next/image';

// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Import actions

// Import providers

// Define and import types
import { WorkExperience } from '@/lib/types';
type WorkplacePageWrapperProps = {
	experience: WorkExperience;
	children: React.ReactNode;
};

const WorkplacePageWrapper = async ({
	experience,
	children,
}: WorkplacePageWrapperProps) => {
	return (
		<div className="w-full ">
			<div className="relative  h-[800px] min-h-[800px] w-full">
				<div className="z-0 w-full h-full absolute inset-0">
					<div className="w-full h-full relative">
						<OptimizedImage
							src={experience.page?.heroImageSrc ?? ''}
							placeholderSrc={
								experience.page
									?.placeholderHeroImageSrc ?? ''
							}
							alt="Hero image"
							width={1920}
							height={1080}
							className="w-full h-full"
						/>
						<div className="absolute z-40 h-full w-2/3 bg-gradient-to-r bottom-0 from-background to-background/0" />
						<div className="absolute z-40 h-1/4 w-full bg-gradient-to-t bottom-0 from-background to-background/0" />
						<div className="absolute z-50"></div>
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
				<div className="relative z-40 h-full inset-0 bg-black bg-opacity-20">
					{/* Content overlay */}
					<div className="container max-w-7xl mx-auto h-full flex flex-col justify-center pt-12 px-4 md:px-8 lg:px-8 xl:px-2">
						<div className="text-white text-left flex flex-col">
							<Image
								src={
									experience.page?.headerLogoSrc ??
									''
								}
								alt="Header logo"
								width={400}
								height={300}
							/>
							<Label
								variant="title3"
								font="mono"
								color="muted"
								className="font-light">
								{experience.role}
							</Label>
							<Label
								variant="title3"
								font="mono"
								color="muted"
								className="font-light">
								{experience.date}
							</Label>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full border-b border-border border-dashed">
				<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
					<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0">
						<Label variant="titleLg">
							Company Overview
						</Label>
					</div>
					<div className="grid-span-1">
						<Label
							variant="title"
							color="muted"
							className="font-normal tracking-normal leading-normal">
							{experience.page?.infoBlurb}
						</Label>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default WorkplacePageWrapper;
