import {
	Project,
	ProjectTag,
	ImageLargeSection,
	OtherProjectsSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
	FeaturesSection,
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
	src: '/images/projects/personal/cup-u/screens-1.png',
	title: 'Client & Runner Apps',
	caption:
		'To assist coaches and gyms improve their website, the Coaching platform monitored in-depth analytics on the website traffic and user engagement. This included page views, user engagement, visit location, device type, and more.',
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		'The Eigen Coach dashboard provides a comprehensive set of features to help coaches manage their remote clients, track their progress, and provide them with personalized feedback – all at lightning speed.',
	features: [
		{
			title: 'Geofencing',
			description: `CupU uses geofencing with the Google Maps API to deliver coffee, tea, and hot chocolate to customers only on-campus.`,
			icon: <MapPinned />,
		},
		{
			title: 'Customizable Menu',
			description:
				'Customers can customize their drink by selecting their preferred coffee, tea, and hot chocolate, as well as the size and sweetness of their drink.',
			icon: <Coffee />,
		},
		{
			title: 'Payment Processing',
			description:
				'CupU uses Stripe to process payments for orders. This helped to provide a quick and easy experience for customers.',
			icon: <Wallet />,
		},
		{
			title: 'Real-Time Order Tracking',
			description:
				'Customers can track the progress of their order in real-time, and the runner can update the customer with the progress of their order.',
			icon: <Timer />,
		},
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'eigen-nodes',
		'eigen-mobile-app',
		'dnai-labs-realtime-chat',
	],
};

export const CupU: Project = {
	title: 'CupU',
	companyId: 'personal',
	id: 'personal-cup-u',
	description:
		'On-campus coffee, tea, and hot chocolate delivery service',
	link: '',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE, ProjectTag.STARTUP],
	thumbnailUrl: '/images/projects/personal/cup-u/hero-3.png',
	page: {
		summary:
			'As a coffee lover and focused studier, I found it difficult to find time to fuel up and stay focused – as do many university students. CupU is a coffee, tea, and hot chocolate brewing and delivery service, geofenced to my university campus, that hand delivers drinks anywhere on campus, at any time of the day. While not scalable, CupU was a fun project to work on – and helped students across campus stay focused and energized.',
		heroImageSrc: '/images/projects/personal/cup-u/hero-2.png',
		placeholderHeroImageSrc:
			'/images/projects/personal/cup-u/hero-2.png',
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
