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

const BlackberryPage = async () => {
	const workplace = WorkExperienceData.find(
		(workplace) => workplace.id === 'blackberry'
	);
	return (
		workplace && (
			<WorkplacePageWrapper experience={workplace}>
				<div className="flex flex-col w-full">
					<Role
						description="As an intern on the BlackBerry Enterprise Solutions team, I was tasked with designing, prototyping, and building enterprise ready applications to illustrate the capabilities of BlackBerry's BBM-e platform."
						points={[
							'Talk with customers to understand their uinque needs for secure communication infrastructure.',
							"Design and build enterprise ready applications to illustrate the capabilities of BlackBerry's BBM-e platform.",
							"Implemented first ever hardware applications for BlackBerry's BBM-e platform.",
							'Work with the enterprise solutions team on rolling new features out to existing enterprise customers.',
						]}
						imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						placeholderImageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
					<ProjectsSection workExperience={workplace} />
				</div>
			</WorkplacePageWrapper>
		)
	);
};

export default BlackberryPage;
