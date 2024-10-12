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

const WorkRidePage = async () => {
	const workplace = WorkExperienceData.find(
		(workplace) => workplace.id === 'workride'
	);
	return (
		workplace && (
			<WorkplacePageWrapper experience={workplace}>
				<div className="flex flex-col w-full">
					<Role
						description="As the founder and CEO of WorkRide, I was responsible for the overall direction and success of the company, as well as building the product from the ground up."
						points={[
							'Talking to local businesses and employees to understand current commuting inefficiencies.',
							'Design a driver and passenger app to connect commuters and drivers.',
							'Develop a matching algorithm to connect commuters and drivers.',
							'Build a routing algorithm to find the best route for a given ride.',
						]}
						imageSrc="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						placeholderImageSrc="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
					<ProjectsSection workExperience={workplace} />
				</div>
			</WorkplacePageWrapper>
		)
	);
};

export default WorkRidePage;
