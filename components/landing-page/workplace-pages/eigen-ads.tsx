import React from 'react';

// Import components
import WorkplacePageWrapper from './workplace-page-wrapper';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import SectionCross from '@/components/landing-page/sections/section-cross';
import Role from '@/components/landing-page/sections/role';
import ProjectsSection from '@/components/landing-page/sections/projects';

import { WorkExperienceData } from '@/lib/constants';

const EigenAdsPage = async () => {
	const workplace = WorkExperienceData.find(
		(workplace) => workplace.id === 'eigen-ads'
	);
	return (
		workplace && (
			<WorkplacePageWrapper experience={workplace}>
				<div className="flex flex-col w-full">
					<Role
						description="As founder and CEO of Eigen Advertisement, I led our team of 6 developers to build a product that our early users loved. I was also responsible for overseeing the company's direction and deal flow."
						points={[
							'Partnered with local business and event managers to wrap more than 20 cars in Windsor, ON.',
							'Built the iOS application responsible for tracking vehicle location for impression calculation.',
							'Developed the underlying algorithms to calculate impressions and match advertisers with the most relevant commuters.',
							'Managed a team of 6 developers to build the business-facing impressions reporting dashboard.',
						]}
						imageSrc="/images/education.png"
						placeholderImageSrc="/images/education-sm.png"
					/>
					<ProjectsSection workExperience={workplace} />
				</div>
			</WorkplacePageWrapper>
		)
	);
};

export default EigenAdsPage;
