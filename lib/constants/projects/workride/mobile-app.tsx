import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	YoutubeLargeSection,
	OtherProjectsSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
	FeaturesSection,
	DividerSection,
} from '@/lib/types';

import {
	Notebook,
	Apple,
	MonitorSmartphone,
	ScreenShare,
	ChartSpline,
	ListCheck,
	Camera,
	User,
	MapPinned,
	Wallet,
	Coffee,
	Timer,
	Calendar,
} from 'lucide-react';

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.SWIFT,
		SoftwareTechnologyOption.FIREBASE,
		SoftwareTechnologyOption.NODE,
		SoftwareTechnologyOption.STRIPE,
		SoftwareTechnologyOption.GOOGLE_MAPS,
		SoftwareTechnologyOption.COCOAPODS,
	],
};

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/workride/mobile-app/screens-1.png',
	title: 'Get a Ride to Work',
	description:
		'WorkRide allows employees to easily find a ride to and from work with co-workers, organized by their employer.',
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		'The WorkRide mobile app provides a comprehensive set of features to help employees find rides to and from work with co-workers, organized by their employer.',
	features: [
		{
			title: 'Custom Route Optimization',
			description: `WorkRide uses a custom routing algorithm to match riders with drivers, and optimize routes to reduce travel time.`,
			icon: <MapPinned />,
		},
		{
			title: 'Schedule Rides',
			description:
				'Riders and drivers can schedule rides in advance, making the start of the day effortless for both riders and drivers.',
			icon: <Calendar />,
		},
		{
			title: 'Payment Processing',
			description:
				'WorkRide uses Stripe Connect to process payments for rides. This allows for simple, frictionless payment processing, without the need for employees to manually collect payment.',
			icon: <Wallet />,
		},
		{
			title: 'Real-Time Updates',
			description:
				'Riders and drivers can receive real-time updates on the status of their rides, and messages can be sent between riders and drivers.',
			icon: <Timer />,
		},
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'eigen-nodes',
		'eigen-apple-watch-app',
		'dnai-labs-realtime-chat',
	],
};

export const WorkRideMobileApp: Project = {
	title: 'WorkRide Mobile App',
	companyId: 'workride',
	id: 'workride-mobile-app',
	description:
		'Ride share to and from work with co-workers, organized by your employer.',
	link: '',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE, ProjectTag.STARTUP],
	thumbnailUrl: '/images/projects/workride/mobile-app/hero.png',
	page: {
		summary:
			'WorkRide is a ride share app that allows employees to request rides to and from work with co-workers, organized by their employer. I built the iOS app using Swift and Firebase, a custom routing algorithm, and the connection algorithm to match riders with drivers.',
		heroImageSrc:
			'/images/projects/workride/mobile-app/hero-cropped.png',
		placeholderHeroImageSrc:
			'/images/projects/workride/mobile-app/hero-cropped.png',
		headerLogoSrc:
			'/images/projects/eigen-fitness/nodes/logo-1.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			softwareTechnologiesSection1,
			imageLargeSection1,
			featuresSection1,
			otherProjectsSection,
		],
	},
};
