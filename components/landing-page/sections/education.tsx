import React from 'react';
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import { OptimizedImage } from '@/components/ui/optimized-image';

type WorkExperienceProps = {};

const Education: React.FC<WorkExperienceProps> = async () => {
	return (
		<Section fullWidth borderBottom>
			<Column
				width={1}
				className="h-[600px] relative"
				borderRight>
				<SectionCross />
				<OptimizedImage
					src="/images/education.png"
					placeholderSrc="/images/education-sm.png"
					alt="Hero image"
					width={1920}
					height={600}
					className="w-full h-full"
				/>
			</Column>
			<Column width={2} className=" flex flex-col gap-12">
				<div className="flex flex-col gap-4 justify-center h-full px-12 py-12">
					<Label variant="titleXl">Education</Label>
					<Label variant="title3" color="muted">
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quisquam, quos.
					</Label>
				</div>
			</Column>
		</Section>
	);
};

export default Education;
