import React from 'react';
import { Label } from '@/components/ui/label';
import {
	Column,
	Section,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from './section-cross';
import { TechnologiesProvider } from '@/lib/providers/TechnologiesContext';
import TechnologiesTabs from './technologies-tabs';
import TechnologiesPages from './technologies-pages';

const Technologies = () => (
	<TechnologiesProvider>
		<Section fullWidth borderBottom>
			<Column
				width={1}
				borderRight
				className="col-span-1 sticky top-0 h-screen">
				<div className="w-full h-full flex flex-col justify-center px-12 py-12 relative">
					<SectionCross />
					<Label variant="body" color="muted">
						Past & Present
					</Label>
					<Label variant="titleLg">Technologies</Label>
					<Label
						variant="title3"
						color="muted"
						className="mt-8 font-normal">
						Dolor sit aute voluptate magna. Sunt velit
						culpa sint eu in pariatur duis ex culpa id
						est. Velit incididunt ad culpa irure nisi
						consectetur minim dolore amet.
					</Label>
					<TechnologiesTabs />
				</div>
			</Column>
			<Column width={2} className="flex flex-col">
				<div className="w-full flex flex-col gap-16 px-12 py-40">
					<TechnologiesPages />
				</div>
			</Column>
		</Section>
	</TechnologiesProvider>
);

export default Technologies;

// ... rest of the file remains unchanged ...
