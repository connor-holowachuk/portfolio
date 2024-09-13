import { Project, ProjectTag } from '@/lib/types';

export const PersonalProjects: Project[] = [
	{
		title: 'Personal Website',
		id: 'personal-website',
		description: 'My personal portfolio website',
		link: 'https://www.connorholowachuk.com',
		color: '#9C27B0',
		tags: [
			ProjectTag.FRONTEND,
			ProjectTag.BACKEND,
			ProjectTag.WEB,
		],
	},
	{
		title: 'Open Source Contributions',
		id: 'open-source',
		description: 'Various contributions to open source projects',
		link: 'https://github.com/connor-holowachuk',
		color: '#607D8B',
		tags: [
			ProjectTag.FRONTEND,
			ProjectTag.BACKEND,
			ProjectTag.WEB,
		],
	},
	// Add more personal projects as needed
];
