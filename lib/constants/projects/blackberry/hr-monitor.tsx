import { Project, ProjectTag } from '@/lib/types';

export const HRMonitor: Project = {
	title: 'HR Monitor',
	companyId: 'blackberry',
	id: 'blackberry-hr-monitor',
	description: 'E2E encrypted wireless HR monitoring with BBM-e.',
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
