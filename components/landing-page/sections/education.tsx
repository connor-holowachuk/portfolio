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
				<div className="flex flex-col gap-6 justify-center h-full px-4 md:px-12 py-12">
					<Label variant="titleXl">Education</Label>
					<div className="flex flex-col">
						<Label variant="title2" color="default">
							Ba.Sc. in Electrical Engineering
						</Label>
						<Label
							variant="title3"
							color="muted"
							className="font-normal">
							University of Windsor
						</Label>
						<Label
							variant="title3"
							color="muted"
							className="font-normal">
							September 2014 - August 2019
						</Label>
					</div>
					<div className="flex flex-col gap-2">
						<Label
							variant="title3"
							color="muted"
							className="font-normal">
							Graduated in August 2019 with Honours
						</Label>
						<Label
							variant="title3"
							color="muted"
							className="font-normal">
							President’s Roll, Electrical Engineering
							Deans List, GPA: 3.28
						</Label>
						<Label
							variant="title3"
							color="muted"
							className="font-normal">
							Accepted with Entrance Scholarship and
							John Cater William Scholarship.
							<br />
							Member of Outstanding Scholars Research
							Program
						</Label>
					</div>
				</div>
			</Column>
		</Section>
	);
};

// University of Windsor 2014-2019
// Ba.Sc. in Electrical Engineering
// Graduated in August 2019 with Honours
// Accepted with Entrance Scholarship and John Cater William Scholarship. Member of Outstanding Scholars Research Program
// President’s Roll, Electrical Engineering Deans List, GPA: 3.28

export default Education;
