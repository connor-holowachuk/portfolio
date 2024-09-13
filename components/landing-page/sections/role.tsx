import React from 'react';
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import { OptimizedImage } from '@/components/ui/optimized-image';

import { ChevronRight } from 'lucide-react';

type RoleProps = {
	description: string;
	points: string[];
	imageSrc: string;
	placeholderImageSrc: string;
};

const Role: React.FC<RoleProps> = async ({
	description,
	points,
	imageSrc,
	placeholderImageSrc,
}) => {
	return (
		<Section fullWidth borderBottom>
			<Column
				width={1}
				className="h-[600px] relative"
				borderRight>
				<SectionCross />
				<OptimizedImage
					src={imageSrc}
					placeholderSrc={placeholderImageSrc}
					alt="Role image"
					width={1920}
					height={600}
					className="w-full h-full"
				/>
			</Column>
			<Column width={2} className=" flex flex-col gap-12">
				<div className="flex flex-col gap-4 justify-center h-full px-12 py-12">
					<Label variant="titleLg">My Role</Label>
					<Label
						variant="title"
						color="muted"
						className="font-normal">
						{description}
					</Label>
					<div className="flex flex-col gap-2">
						{points.map((point, index) => (
							<div
								className="flex flex-row items-center gap-4"
								key={index}>
								<ChevronRight
									size={20}
									className="text-accent"
								/>
								<Label
									variant="title2"
									color="muted"
									className="font-normal">
									{point}
								</Label>
							</div>
						))}
					</div>
				</div>
			</Column>
		</Section>
	);
};

export default Role;
