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
type ListProps = {
	project: Project;
	section: ImageLargeSection;
};

const ImageLarge = async ({ project, section }: ListProps) => {
	return (
		<div className="w-full ">
			{section.title && (
				<div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-32 px-4 md:px-8 lg:px-8 xl:px-2">
					<div className="grid-span-1 pr-0 md:pr-12 pb-12 md:pb-0 flex flex-col gap-4">
						<Label variant="titleLg">
							{section.title}
						</Label>
					</div>
				</div>
			)}
			<div className="container max-w-7xl mx-auto py-32 px-4 md:px-8 lg:px-8 xl:px-2">
				<DialogBasicImage
					src={section.src}
					alt={section.alt}
					className="w-full h-[660px] object-cover"
				/>
			</div>
		</div>
	);
};

export default ImageLarge;
