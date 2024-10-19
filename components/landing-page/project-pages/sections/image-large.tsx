import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DialogBasicImage } from '@/components/ui/dialog-image';

// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Define and import types
import { Project, PageSection, ImageLargeSection } from '@/lib/types';
import { InView } from '@/components/ui/in-view';
type ListProps = {
	project: Project;
	section: ImageLargeSection;
};

const ImageLarge = async ({ project, section }: ListProps) => {
	return (
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
			<div className="w-full ">
				<div className="container max-w-7xl mx-auto py-32 px-4 md:px-8 lg:px-8 xl:px-2">
					{section.title && (
						<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pb-12 px-4 md:px-8 lg:px-8 xl:px-2">
							<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
								<Label variant="titleLg">
									{section.title}
								</Label>
							</div>
						</div>
					)}
					{section.description && (
						<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pb-32 px-4 md:px-8 lg:px-8 xl:px-2">
							<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
								<Label
									variant="title"
									color="muted"
									className="font-normal">
									{section.description}
								</Label>
							</div>
						</div>
					)}
					<DialogBasicImage
						src={section.src}
						alt={section.alt}
						className="w-full h-[660px] object-cover"
					/>
					{section.caption && (
						<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-12 px-4 md:px-8 lg:px-8 xl:px-2">
							<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
								<Label
									variant="default"
									color="muted"
									className="font-normal">
									{section.caption}
								</Label>
							</div>
						</div>
					)}
				</div>
			</div>
		</InView>
	);
};

export default ImageLarge;
