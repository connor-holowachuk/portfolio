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
import YoutubeLarge from '@/components/landing-page/project-pages/sections/youtube-large';
import Divider from '@/components/ui/divider';
import { WorkExperienceData } from '@/lib/constants';

const EigenFitnessPage = async () => {
	const workplace = WorkExperienceData.find(
		(workplace) => workplace.id === 'eigen-fitness'
	);
	return (
		workplace && (
			<WorkplacePageWrapper experience={workplace}>
				<div className="flex flex-col w-full">
					<Role
						description="As co-founder and CEO of Eigen Fitness, I was responsible for the overall direction and success of the company, as well as building the software and hardware products from 0 to 1."
						points={[
							'Design, prototype, and manufacture high density PCBs, plastic enclosures, and bands for Nodes.',
							'Design and develop mobile application for Node users to track their health vitals and receive real-time feedback.',
							'Design and build Coaching Platform for trainers to manage clients, track progress, and design programs.',
							'Develop Apple Watch application that operates as a Node, porting C/C++ firmware into Swift.',
							'Work with gyms and independant trainers to increase efficiency and revenue with Eigen.',
						]}
						imageSrc="/images/workplaces/eigen-fitness/role.png"
						placeholderImageSrc="/images/workplaces/eigen-fitness/role-sm.png"
					/>
					<ProjectsSection workExperience={workplace} />
					<YoutubeLarge
						section={{
							type: 'youtube-large',
							title: 'Nodes Promotion Video',
							description:
								'I created the Node promotion video over the course of 2 weeks using Adobe Premier, After Effects, and Blender to promote Nodes and how they help gym goers maximize their potential.',
							src: 'https://www.youtube.com/embed/MMQmWUwqzgk',
							alt: 'Eigen Fitness Demo',
						}}
					/>
					<Divider />
					<YoutubeLarge
						section={{
							type: 'youtube-large',
							title: "LIFTS Interview (CES '24)",
							description:
								'LIFTS is a podcast that discusses the latest news in fitness technology. I was invited to discuss the Nodes and the future of fitness technology at CES 2024.',
							src: 'https://www.youtube.com/embed/jw1u3ZbaOvM?start=3595',
							alt: 'Eigen Fitness Demo',
						}}
					/>
					<Divider />
				</div>
			</WorkplacePageWrapper>
		)
	);
};

export default EigenFitnessPage;
