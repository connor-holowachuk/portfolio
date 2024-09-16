import { Project, ProjectTag } from '@/lib/types';

export const TemperatureLogger: Project = {
	title: 'Temperature Logger',
	companyId: 'exact-technology',
	id: 'exact-temperature-logger',
	description: 'Exact',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.FIRMWARE,
		ProjectTag.PCBA,
		ProjectTag.PLASTIC_INJECTION,
	],
	thumbnailBlurUrl:
		'https://exacttechnology.com/wp-content/uploads/2023/12/site-logger.png',
	thumbnailUrl:
		'https://exacttechnology.com/wp-content/uploads/2023/12/site-logger.png',
};
