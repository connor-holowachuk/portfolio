import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DialogBasicImage } from '@/components/ui/dialog-image';
import { InView } from '@/components/ui/in-view';
// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Define and import types
import {
	Project,
	PageSection,
	ImageGallerySection,
} from '@/lib/types';
type ImageGalleryProps = {
	project: Project;
	section: ImageGallerySection;
};

const ImageGallery = async ({
	project,
	section,
}: ImageGalleryProps) => {
	const { images } = section;
	return (
		<div className="w-full border-b border-border border-dashed">
			{section.title && (
				<InView
					variants={{
						hidden: {
							opacity: 0,
							y: 100,
							filter: 'blur(12px)',
						},
						visible: {
							opacity: 1,
							y: 0,
							filter: 'blur(0px)',
						},
					}}
					viewOptions={{ margin: '0px 0px -100px 0px' }}
					transition={{
						duration: 0.9,
						ease: 'easeInOut',
					}}>
					<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
						<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
							<Label variant="titleLg">
								{section.title}
							</Label>
							{section.subtitle && (
								<Label
									variant="title3"
									font="mono"
									color="muted"
									className="font-light">
									{section.subtitle}
								</Label>
							)}
						</div>
						<div className="grid-span-1">
							<Label
								variant="title"
								color="muted"
								className="font-normal tracking-normal leading-normal">
								{section.description}
							</Label>
						</div>
					</div>
				</InView>
			)}
			<div className="container w-full max-w-7xl mx-auto grid grid-cols-1 gap-x-6 gap-y-6 md:gap-y-12 md:grid-cols-3 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
				{images.map((image, index) => (
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 100,
								filter: 'blur(12px)',
							},
							visible: {
								opacity: 1,
								y: 0,
								filter: 'blur(0px)',
							},
						}}
						viewOptions={{ margin: '0px 0px -100px 0px' }}
						transition={{
							duration: 0.9,
							ease: 'easeInOut',
						}}>
						<div className="grid-span-1 flex flex-col gap-6">
							<DialogBasicImage
								src={image.src}
								alt={image.alt}
								className="w-full h-[260px] object-cover"
							/>
							<div className="flex flex-col gap-2">
								<Label variant="title2">
									{image.captionHeader}
								</Label>
								<Label variant="body" color="muted">
									{image.caption}
								</Label>
							</div>
						</div>
					</InView>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;
