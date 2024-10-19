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
	LockIcon,
	Activity,
	Rabbit,
	Move,
} from 'lucide-react';

const dividerSection1: DividerSection = {
	type: 'divider',
};

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.OBJECTIVE_C,
		SoftwareTechnologyOption.FIREBASE,
		SoftwareTechnologyOption.NODE,
		SoftwareTechnologyOption.RASPBERRY_PI,
		SoftwareTechnologyOption.BBME,
		SoftwareTechnologyOption.COCOAPODS,
	],
};

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/blackberry/hr-monitor/phones-1.png',
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Hardware & Firmware',
	description:
		'The software runs on a Raspberry Pi and interfaces over I2C to a signal amplifier and LED controller for real-time HR and SpO2 data.',
	images: [
		{
			src: '/images/projects/blackberry/hr-monitor/monitor-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'LED SpO2 + HR Monitor',
			caption:
				'A combination of 3D printed components, off-the-shelf plastic enclosures, and a custom CNC milled screen window, the enclosure provided a simple installation and interface for the operator to view the status of the system and control the crane.',
		},
		{
			src: '/images/projects/blackberry/hr-monitor/breadboard-1.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'Breadboard Prototype',
			caption:
				'Equipped with a u-blox 4G modem and optional wind speed sensor, the software was able to provide the operator with weather updates and warnings when the wind speed exceeded safe operating limits.',
		},
		{
			src: '/images/projects/blackberry/hr-monitor/phone-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Mobile App',
			caption:
				'Along with avoiding other cranes, the boom and rear counterweight must also avoid nearby towers, especially in dense urban environments. Calibrating collision zones for the boom and counterweight helped the operator to avoid collisions with nearby towers.',
		},
	],
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		"The BBM Enterprise HR Monitor was designed to demonstrate the feasibility of a secure, portable, and wearable HR monitoring device to BlackBerry's enterprise customers.",
	features: [
		{
			title: 'E2E Encryption',
			description: `End-to-end encryption is a must for any medical device. The BBM Enterprise SDK provides industry standard encryption to ensure that the data between the device and the cloud is private.`,
			icon: <LockIcon />,
		},
		{
			title: 'SpO2 and HR Waveforms',
			description:
				'The device provides real-time SpO2 and HR waveforms to help the user understand their heart rate and how it changes over time.',
			icon: <Activity />,
		},
		{
			title: 'High-speed HR Measurement',
			description:
				"The monitor is capable of measuring and updating HR every 3 seconds, providing a more accurate and responsive measurement of the user's heart rate.",
			icon: <Rabbit />,
		},
		{
			title: 'Portable Code',
			description:
				'Powered by Node.js and a Raspberry Pi, porting the software to other devices was simple and allowed for adaptation by industry leading manufacturers.',
			icon: <Move />,
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
		'/images/projects/blackberry/hr-monitor/thumbnail.png',
	page: {
		summary:
			"The BBM Enterprise HR Monitor was designed to demonstrate the feasibility of a secure, portable, and wearable HR monitoring device to BlackBerry's enterprise customers. It was powered by a Raspberry Pi running the BBM-e SDK on Node.js, and interfaced to the ADC and LED controllers via I2C and custom hardware libraries. The data was securely sent to the BlackBerry BBM Enterprise Server using the BBM-e SDK, visible on the iOS mobile app.",
		heroImageSrc:
			'/images/projects/blackberry/hr-monitor/hero.png',
		placeholderHeroImageSrc:
			'/images/projects/blackberry/hr-monitor/hero.png',
		headerLogoSrc:
			'/images/projects/blackberry/hr-monitor/logo.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			softwareTechnologiesSection1,
			imageLargeSection1,
			gallerySection1,
			dividerSection1,
			featuresSection1,
			otherProjectsSection,
		],
	},
};
