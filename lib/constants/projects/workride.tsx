import { Project, ProjectTag } from '@/lib/types';

export const ProjectsWorkride: Project[] = [
	{
		title: 'Workride',
		id: 'workride',
		description: 'Carpooling solution for businesses',
		link: 'https://www.workride.com',
		color: '#4CAF50',
		tags: [
			ProjectTag.FRONTEND,
			ProjectTag.BACKEND,
			ProjectTag.WEB,
		],
	},
];
