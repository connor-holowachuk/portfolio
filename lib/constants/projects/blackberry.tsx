import { Project, ProjectTag } from '@/lib/types';

export const ProjectsBlackberry: Project[] = [
	{
		title: 'Blackberry',
		id: 'blackberry',
		description: 'Mobile security and communication solutions',
		link: 'https://www.blackberry.com',
		color: '#000000',
		tags: [
			ProjectTag.HARDWARE,
			ProjectTag.SOFTWARE,
			ProjectTag.FIRMWARE,
		],
	},
];
