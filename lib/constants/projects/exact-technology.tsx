import { Project, ProjectTag } from '@/lib/types';

const ExactMatch1: Project = {
	title: 'Exact Match 1',
	id: 'exact-exact-match-1',
	description:
		'A rugged and portable concrete curing chamber designed to match the exact environmental conditions of on-site curing.',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	date: '2019-2021',
};
const ExactMatch2: Project = {
	title: 'Exact Match 2',
	id: 'exact-exact-match-2',
	description: 'Exact',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	date: '2020-2022',
};
const PCBAntennaTuning: Project = {
	title: 'PCB Antenna Tuning',
	id: 'exact-pcb-antenna-tuning',
	description: 'Exact',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
};
const CraneAvoidance: Project = {
	title: 'Crane Avoidance',
	id: 'exact-crane-avoidance',
	description: 'Exact',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	page: {
		element: <div>Hello</div>,
		heroImageSrc: '/images/workplaces/exact-technology/role.jpeg',
		placeholderHeroImageSrc:
			'/images/workplaces/exact-technology/role-sm.png',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
	},
	thumbnailUrl:
		'/images/projects/exact-technology/crane-avoidance/sw-test.png',
	thumbnailBlurUrl:
		'/images/projects/exact-technology/crane-avoidance/sw-test.png',
};
const RHMonitorBoring: Project = {
	title: 'RH Monitor Boring',
	id: 'exact-rh-monitor-boring',
	description: 'Exact',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
};
const MultipointRHMonitor: Project = {
	title: 'Multipoint RH Monitor',
	id: 'exact-multipoint-rh-monitor',
	description: 'Exact',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
};

export const ProjectsExactTechnology: Project[] = [
	ExactMatch1,
	ExactMatch2,
	PCBAntennaTuning,
	CraneAvoidance,
	RHMonitorBoring,
	MultipointRHMonitor,
];
