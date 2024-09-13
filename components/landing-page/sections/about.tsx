import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import { OptimizedImage } from '@/components/ui/optimized-image';

const About = async () => {
	return (
		<Section fullWidth borderBottom>
			<Column className="col-span-2" width={2} borderRight>
				<div className="w-full py-12 px-12 h-full flex flex-col justify-center">
					<Label variant="title">
						Dolor sit aute voluptate magna. Sunt velit
						culpa sint eu in pariatur duis ex culpa id
						est. Velit incididunt ad culpa irure nisi
						consectetur minim dolore amet.
					</Label>
				</div>
			</Column>
			<Column width={1} className="h-[500px]">
				<OptimizedImage
					src="/images/about.png"
					placeholderSrc="/images/about-sm.png"
					alt="Hero image"
					width={1920}
					height={500}
					className="w-full h-full"
				/>
			</Column>
		</Section>
	);
};

export default About;
