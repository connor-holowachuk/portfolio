import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	VideoLargeSection,
	OtherProjectsSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
} from '@/lib/types';

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.SWIFT,
		SoftwareTechnologyOption.FIREBASE,
		SoftwareTechnologyOption.NODE,
		SoftwareTechnologyOption.GOOGLE_MAPS,
		SoftwareTechnologyOption.STRIPE,
		SoftwareTechnologyOption.COCOAPODS,
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'eigen-nodes',
		'exact-temperature-logger',
		'university-tesla-coil',
	],
};

export const MobileApp: Project = {
	title: 'Mobile App',
	companyId: 'eigen-ads',
	id: 'eigen-ads-mobile-app',
	description:
		'Launch the Eigen Ads app to monitor how much you made on your daily commutes.',
	link: 'https://www.eigenads.com',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE],
	thumbnailUrl:
		'/images/projects/eigen-ads/mobile-app/app-shot.jpeg',
	page: {
		summary:
			'To provide an easy way to track your earnings, I created the Eigen Ads mobile app. The app allows users to monitor their daily earnings, calculated in real-time by their driving route and estimated visual impressions. The app automatically prompted drivers to begin trips when entering their vehicle, powered by a custom BLE beacon.',
		heroImageSrc:
			'/images/projects/eigen-ads/mobile-app/app-shot.jpeg',
		placeholderHeroImageSrc:
			'/images/projects/eigen-ads/mobile-app/app-shot.jpeg',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
		sections: [
			softwareTechnologiesSection1,
			otherProjectsSection,
		],
	},
};
