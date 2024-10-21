import {
	Project,
	ProjectTag,
	ImageGallerySection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
	VideoLargeSection,
	OtherProjectsSection,
	FeaturesSection,
} from '@/lib/types';

import {
	Cable,
	Database,
	Rabbit,
	LockIcon,
	Notebook,
	ListCheck,
	Camera,
	User,
	Satellite,
	Tv,
	Shrink,
	BatteryFull,
	Radio,
	SunSnow,
	BatteryWarning,
} from 'lucide-react';

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.ESP32,
		SoftwareTechnologyOption.IRIDIUM,
		SoftwareTechnologyOption.ARDUINO,
	],
};

const videoLargeSection1: VideoLargeSection = {
	type: 'video-large',
	src: '/videos/projects/exact-technology/satellite-logger/video1.mov',
	alt: 'Satellite Logger',
	title: 'Prototype Power On',
	description:
		'The first iteration of the Satellite Logger powered on to display a welcome screen as system health checks are running and a initial satellite connection is established, followed by a termperature report from all 4 thermistor probes.',
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	images: [
		{
			src: '/images/projects/exact-technology/satellite-logger/logger-open-1.jpeg',
			srcBlur:
				'/images/projects/exact-technology/satellite-logger/logger-open-1.jpeg',
			alt: 'Satellite Logger',
			captionHeader: 'Open Logger',
			caption:
				'Each logger was equipped with manual power controls and a 2.8" LCD screen for connection status, temperature readings, and battery capacity.',
		},
		{
			src: '/images/projects/exact-technology/satellite-logger/logger-screen-1.jpeg',
			srcBlur:
				'/images/projects/exact-technology/satellite-logger/logger-screen-1.jpeg',
			alt: 'Connecting to Iridium',
			captionHeader: 'Connecting to Iridium',
			caption:
				'The logger handled automatic connection to the Iridium network, pushing highly compressed temperature data to minimize cost and latency.',
		},
		{
			src: '/images/projects/exact-technology/satellite-logger/logger-prototype-1.jpeg',
			srcBlur:
				'/images/projects/exact-technology/satellite-logger/logger-prototype-1.jpeg',
			alt: 'Prototype Wiring',
			captionHeader: 'Prototype Wiring',
			caption:
				'The prototype was equipped with a custom PCB and a battery pack, with additional wiring for the thermistor probes and LCD screen. Prototype wiring here was soldered to test new features.',
		},
	],
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		'The Satellite Logger was equipped with a number of features to provide reliable and secure data transmission over the Iridium network.',
	features: [
		{
			title: 'Iridium Connectivity',
			description:
				'The logger was equipped with an Iridium modem to provide reliable and secure data transmission over the Iridium network.',
			icon: <Satellite />,
		},
		{
			title: 'Automatic Data Logging',
			description:
				'The logger was equipped with a microcontroller to automatically log data when the Iridium modem was able to connect to the network.',
			icon: <Database />,
		},
		{
			title: 'Heads Up Display',
			description:
				'The logger was equipped with a 2.8" LCD screen to provide a heads up display for the operator to view the status of the logger and the temperature readings from the probes.',
			icon: <Tv />,
		},
		{
			title: 'Custom Data Compression',
			description:
				'The logger was equipped with a custom data compression algorithm to minimize the amount of data sent over the Iridium network, reducing costs by more than 80%.',
			icon: <Shrink />,
		},
		{
			title: 'Low Power Consumption',
			description:
				'To extend the battery life of the device, a low power SoC was used, along with power routing to prioritize vital functions like the Iridium modem and temperature sensors.',
			icon: <BatteryFull />,
		},
		{
			title: '802.11 Radio',
			description:
				'The logger is Bluetooth and WiFi enabled to allow for on-the-spot configuration and updates to the device.',
			icon: <Radio />,
		},
		{
			title: 'Power Alerts',
			description:
				'The logger was equipped with a battery status display to provide the operator with the remaining battery capacity of the logger.',
			icon: <BatteryWarning />,
		},
		{
			title: 'Temperature Readings',
			description:
				'The logger was equipped with thermistor probes to measure the temperature of the concrete.',
			icon: <SunSnow />,
		},
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

export const SatelliteLogger: Project = {
	title: 'Satellite Logger',
	companyId: 'exact-technology',
	id: 'exact-satellite-logger',
	description:
		'Monitor concrete curing profiles from remote sites with Iridium connectivity.',
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
		sections: [
			softwareTechnologiesSection1,
			videoLargeSection1,
			gallerySection1,
			featuresSection1,
			otherProjectsSection,
		],
	},
};
