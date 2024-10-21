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
} from 'lucide-react';

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.VUE,
		SoftwareTechnologyOption.TAILWIND,
		SoftwareTechnologyOption.NODE,
		SoftwareTechnologyOption.MONGODB,
		SoftwareTechnologyOption.MAPBOX,
		SoftwareTechnologyOption.STRIPE,
	],
};

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/paperdodo/online-booking/thumbnail.png',
	title: 'Quickly Book Appointments',
	caption:
		'Customers can quickly and easily book appointments with service providers via a web app, and manage their appointments in a dashboard.',
};
const imageLargeSection2: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/paperdodo/online-booking/config-1.png',
	title: 'Customize Appointment Settings',
	caption:
		'Service providers can customize appointment settings such as availability, geographic location, service offerings,and more.',
};
const imageLargeSection3: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/paperdodo/online-booking/order-1.png',
	title: 'Physical Product Offerings',
	caption:
		'Service providers can also offer physical products to customers, such as food and beverages (this was slightly before UberEats and DoorDash became popular), and manage their inventory in a dashboard.',
};
const imageLargeSection4: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/paperdodo/online-booking/mobile-1.png',
	title: 'Mobile-Friendly Appointment Management',
	caption:
		'For on-the-go service providers, the mobile app allows them to manage their appointments and inventory on the go.',
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		'The Online Booking feature provides a comprehensive set of features to help service providers manage their appointments and inventory.',
	features: [
		{
			title: 'Customizable Offerings',
			description:
				'Customers can customize their appointment by selecting their preferred service provider, date, and time.',
			icon: <ListCheck />,
		},
		{
			title: 'Payment Processing',
			description:
				'PaperDodo uses Stripe to process payments for orders. This allows for a more personal and interactive experience.',
			icon: <Wallet />,
		},
		{
			title: 'Route Optimization',
			description: `PaperDodo uses route optimization algorithms to help service providers optimize their routes and reduce travel time.`,
			icon: <MapPinned />,
		},
		{
			title: 'Real-Time Updates',
			description:
				'Customers and service providers can receive real-time updates on the status of their appointments and orders.',
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

export const PaperDodoOnlineBooking: Project = {
	title: 'Online Booking',
	companyId: 'paperdodo',
	id: 'paperdodo-online-booking',
	description:
		'Easily provide customers with a seamless online booking experience.',
	link: '',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE, ProjectTag.STARTUP],
	thumbnailUrl:
		'/images/projects/paperdodo/online-booking/thumbnail.png',
	page: {
		summary:
			"In keeping with PaperDodo's mission to push the world towards a paperless future, PaperDodo Online Booking allows customers to book appointments with service providers via a web app, and manage their appointments in a dashboard. This feature was designed specifically for Tesla, who sought to streamline their at-home service booking process.",
		heroImageSrc:
			'/images/projects/paperdodo/online-booking/hero-cropped.png',
		placeholderHeroImageSrc:
			'/images/projects/paperdodo/online-booking/hero-cropped.png',
		headerLogoSrc:
			'/images/projects/eigen-fitness/nodes/logo-1.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			softwareTechnologiesSection1,
			imageLargeSection1,
			imageLargeSection2,
			imageLargeSection3,
			imageLargeSection4,
			featuresSection1,
			otherProjectsSection,
		],
	},
};
