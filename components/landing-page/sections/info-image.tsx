import React from 'react';
import { Label } from '@/components/ui/label';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import { OptimizedImage } from '@/components/ui/optimized-image';

type InfoImageProps = {
	imageSrc: string;
	imagePlaceholderSrc: string;
	title: string;
	content: React.ReactNode;
};

const InfoImage: React.FC<InfoImageProps> = async ({
	imageSrc,
	imagePlaceholderSrc,
	title,
	content,
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
					placeholderSrc={imagePlaceholderSrc}
					alt="Hero image"
					width={1920}
					height={600}
					className="w-full h-full"
				/>
			</Column>
			<Column width={2} className=" flex flex-col gap-12">
				<div className="flex flex-col gap-6 justify-center h-full px-4 md:px-12 py-12">
					<Label variant="titleXl">{title}</Label>
					{content}
				</div>
			</Column>
		</Section>
	);
};

export default InfoImage;
