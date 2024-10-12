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

const DNAiLabsPage = async () => {
	const workplace = WorkExperienceData.find(
		(workplace) => workplace.id === 'dnai-labs'
	);
	return (
		workplace && (
			<WorkplacePageWrapper experience={workplace}>
				<div className="flex flex-col w-full">
					<Role
						description="As founder and CEO of DNAi Labs, I lead customer engagement, product development, and business development."
						points={[
							'Discuss integration of DNAi Labs products with customers dependant on their specific market needs.',
							'Build highly requested features as requested by customers.',
							'Continuously improve conversational latency, accuracy, and overall user experience.',
						]}
						imageSrc="https://images.unsplash.com/photo-1528372444006-1bfc81acab02?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						placeholderImageSrc="https://images.unsplash.com/photo-1528372444006-1bfc81acab02?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
					<ProjectsSection workExperience={workplace} />
				</div>
			</WorkplacePageWrapper>
		)
	);
};

export default DNAiLabsPage;
