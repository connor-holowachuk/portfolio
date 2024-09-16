import { Project, ProjectTag } from '@/lib/types';

export const CraneAvoidance: Project = {
	title: 'Crane Avoidance',
	companyId: 'exact-technology',
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
		summary:
			'The Crane Avoidance System is a safety feature designed to prevent collisions between cranes and other structures. The system uses a combination of sensors and software to detect the presence of other cranes and other structures and to provide a warning to the operator.',
		heroImageSrc:
			'https://images.unsplash.com/photo-1516971849755-77ddd3e004b0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		placeholderHeroImageSrc:
			'https://images.unsplash.com/photo-1516971849755-77ddd3e004b0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
	},
	thumbnailUrl:
		'https://images.unsplash.com/photo-1516971849755-77ddd3e004b0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	thumbnailBlurUrl:
		'https://images.unsplash.com/photo-1516971849755-77ddd3e004b0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
