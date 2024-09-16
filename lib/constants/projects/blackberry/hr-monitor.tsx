import { Project, ProjectTag } from '@/lib/types';

export const HRMonitor: Project = {
	title: 'HR Monitor',
	companyId: 'blackberry',
	id: 'blackberry-hr-monitor',
	description: 'Blackberry',
	link: 'https://www.blackberry.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	thumbnailUrl:
		'/images/projects/blackberry/hr-monitor/monitor-1.png',
};
