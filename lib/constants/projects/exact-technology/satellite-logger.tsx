import { Project, ProjectTag } from '@/lib/types';

export const SatelliteLogger: Project = {
	title: 'Satellite Logger',
	companyId: 'exact-technology',
	id: 'exact-satellite-logger',
	description: 'Exact',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	date: '2021-2022',
	thumbnailBlurUrl:
		'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	thumbnailUrl:
		'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	page: {
		element: <div>Hello</div>,
		summary:
			'Concrete curing is not limited to geographical regions that have ready access to internet. Remote sites demanded a solution that would allow for data to be logged and sent to a central location without the need for internet access. The Satellite Logger is a rugged and portable device that is mounted on a satellite modem and is able to log data and send it to a central location when the modem is able to connect to the internet.',
		heroImageSrc:
			'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		placeholderHeroImageSrc:
			'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
	},
};
