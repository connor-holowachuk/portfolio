import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	VideoLargeSection,
	OtherProjectsSection,
} from '@/lib/types';

export const ExactMatch1: Project = {
	title: 'Exact Match 1',
	companyId: 'exact-technology',
	id: 'exact-exact-match-1',
	description:
		'A rugged and portable concrete curing chamber designed to match the exact environmental conditions of on-site curing.',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.FIRMWARE,
		ProjectTag.PCBA,
		ProjectTag.MECHANICAL,
	],
	date: '2019-2021',
	thumbnailBlurUrl:
		'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	thumbnailUrl:
		'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	page: {
		summary:
			'The Crane Avoidance System is a safety feature designed to prevent collisions between cranes and other structures. The system uses a combination of sensors and software to detect the presence of other cranes and other structures and to provide a warning to the operator.',
		heroImageSrc:
			'/images/projects/exact-technology/exact-match-2/hero.png',
		placeholderHeroImageSrc:
			'/images/projects/exact-technology/exact-match-2/hero.png',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
		sections: [],
	},
};
