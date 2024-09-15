import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import { OptimizedImage } from '@/components/ui/optimized-image';
import Link from 'next/link';
const About = async () => {
	return (
		<Section fullWidth borderBottom>
			<Column className="col-span-2" width={2} borderRight>
				<div className="w-full py-12 px-4 md:px-12 h-full flex flex-col justify-center">
					<Label
						variant="title"
						className="font-normal"
						color="muted">
						<span className="text-primary">
							👋 Hey, welcome to my portfolio!
						</span>
						<br />
						<br />
						I'm an{' '}
						<Link
							href="/engineering"
							className="text-accent hover:underline underline-offset-4 transition-all duration-300 hover:text-accent-foreground">
							electrical engineer
						</Link>
						,{' '}
						<Link
							href="/software"
							className="text-accent hover:underline underline-offset-4 transition-all duration-300 hover:text-accent-foreground">
							software developer
						</Link>
						, and{' '}
						<Link
							href="/design"
							className="text-accent hover:underline underline-offset-4 transition-all duration-300 hover:text-accent-foreground">
							UI/UX designer
						</Link>{' '}
						with a passion for building products that
						users truly love.
						<br />
					</Label>
				</div>
			</Column>
			<Column width={1} className="h-[600px]">
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
