import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import WorkplacePageWrapper from './workplace-page-wrapper';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import { OptimizedImage } from '@/components/ui/optimized-image';
import Role from '@/components/landing-page/sections/role';
import ProjectsSection from '@/components/landing-page/sections/projects';

// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

import { WorkExperienceData } from '@/lib/constants';

const ExactTechnologyPage = async () => {
	const workplace = WorkExperienceData.find(
		(workplace) => workplace.id === 'exact-technology'
	);
	return (
		workplace && (
			<WorkplacePageWrapper experience={workplace}>
				<div className="flex flex-col w-full">
					<Role
						description="I was employee number 9 at EXACT, leaving after 30+ employees. I worked alongside hardware team to design and manufacture LoRa-based environmental sensors, concrete curing chambers, internal tools, and more."
						points={[
							'Designed and managed manufacturing of high density PCBs for sensor nodes and gateways.',
							'Optimize RF efficiency through antenna design and tuning.',
							'Design and manage manufacturing of injection molded parts.',
							'Worked alongside software team to seamlessly integrate hardware and software for sensor nodes and gateways.',
							'Design and work with suppliers on custom laser cut acrylics for curing chambers.',
						]}
						imageSrc="/images/workplaces/exact-technology/role.jpeg"
						placeholderImageSrc="/images/workplaces/exact-technology/role-sm.png"
					/>
					<ProjectsSection workExperience={workplace} />
				</div>
			</WorkplacePageWrapper>
		)
	);
};

export default ExactTechnologyPage;
