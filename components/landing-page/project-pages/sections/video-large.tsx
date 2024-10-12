import React from 'react';

// Import components
import { Label } from '@/components/ui/label';

// Import utils
import { cn } from '@/lib/utils';

// Define and import types
import { Project, VideoLargeSection } from '@/lib/types';
type VideoProps = {
	project: Project;
	section: VideoLargeSection;
};

const VideoLarge = ({ project, section }: VideoProps) => {
	return (
		<div className="w-full">
			{section.title && (
				<div className="container max-w-7xl mx-auto grid grid-cols-1 pt-32 px-4 md:px-8 lg:px-8 xl:px-2">
					<div className="grid-span-1 pr-0 w-full md:w-2/3 flex flex-col gap-4">
						<Label variant="titleLg">
							{section.title}
						</Label>
						{section.description && (
							<Label
								variant="title2"
								color="muted"
								className="font-normal">
								{section.description}
							</Label>
						)}
					</div>
				</div>
			)}
			<div className="container max-w-7xl mx-auto py-32 px-4 md:px-8 lg:px-8 xl:px-2">
				<video
					src={section.src}
					controls
					className="w-full h-[660px] object-cover">
					<track kind="captions" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
};

export default VideoLarge;
