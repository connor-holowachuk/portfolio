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

const PaperdodoPage = async () => {
	const workplace = WorkExperienceData.find(
		(workplace) => workplace.id === 'paperdodo'
	);
	return (
		workplace && (
			<WorkplacePageWrapper experience={workplace}>
				<div className="flex flex-col w-full">
					<Role
						description="As a software development intern at an early stage startup, I was responsible for working with the team lead to develop a front end application that would allow users to schedule their own service appointments with businesses, including Tesla Motors."
						points={[
							'Built front end application that would allow users to schedule their own service appointments for Tesla Motors; completed in 10 days',
							"Worked alongside lead developer to integrate vehicle data streams and display the vehicle's location and orientation on the UI in real time.",
							'Collaborated between development and business teams to ensure all customer needs were met.',
						]}
						imageSrc="https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						placeholderImageSrc="https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
					<ProjectsSection workExperience={workplace} />
				</div>
			</WorkplacePageWrapper>
		)
	);
};

export default PaperdodoPage;
