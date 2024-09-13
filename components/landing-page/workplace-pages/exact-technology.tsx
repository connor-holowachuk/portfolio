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
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
						points={[
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
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
