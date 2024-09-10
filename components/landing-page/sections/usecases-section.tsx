'use server';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import components
import { Label } from '@/components/ui/label';
import { Section } from './section-wrapper';
import { InView } from '@/components/ui/in-view';

// Import icons
import { ChevronRight, Rocket } from 'lucide-react';

// Define and import types
type UseCasesSectionProps = {};

const UseCasesSection = async ({}: UseCasesSectionProps) => {
	return (
		<Section
			outerClassName="border-t border-t-white/50 border-b border-b-black/10 lg:px-0 bg-black/10"
			className="flex w-full max-w-full flex-col items-center py-32 sm:py-48 lg:px-0 lg:py-32">
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
				transition={{ duration: 0.6, ease: 'easeInOut' }}>
				<div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between px-4 pb-4 lg:px-8"></div>
			</InView>
		</Section>
	);
};

export default UseCasesSection;
