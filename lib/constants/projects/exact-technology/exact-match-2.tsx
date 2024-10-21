import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	VideoLargeSection,
	OtherProjectsSection,
	FeaturesSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
	DividerSection,
} from '@/lib/types';

import {
	Satellite,
	Database,
	Tv,
	Shrink,
	BatteryFull,
	Radio,
	BatteryWarning,
	SunSnow,
} from 'lucide-react';

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	src: '/images/projects/exact-technology/exact-match-2/hero.png',
	alt: 'Exact Match',
};

const videoLargeSection1: VideoLargeSection = {
	type: 'video-large',
	title: 'Fan Controller PWM Testing',
	description:
		'The temperature inside the curing chamber was monitored with a combination of fans, heaters, and refrigeration. The fans were controlled with a PWM signal to achieve an airflow that closely adheres to the desired temperature profile.',
	src: 'https://qbizcrwoohmzgibntrca.supabase.co/storage/v1/object/public/personal_site_large_files/projects/exact-technology/exact-match-2/video-1.MOV?t=2024-10-16T01%3A00%3A40.073Z',
	alt: 'Fan Controller PWM Testing Video',
};

const gallerySection2: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Chassis Design',
	description:
		'A combination of 3D printed components, off-the-shelf plastic enclosures, and a custom CNC milled screen window, the enclosure provided a simple installation and interface for the operator to view the status of the system and control the crane.',
	images: [
		{
			src: '/images/projects/exact-technology/exact-match-2/inner-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Miniature Screen',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/shelf-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Tapered Airflow Holes',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/shelf-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Laser Cut Components',
			caption: '',
		},

		{
			src: '/images/projects/exact-technology/exact-match-2/shelf-mounting-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Economical & Fast Mounting',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/heat-set-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Heat Set Threaded Inserts',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/compressor-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Controlling Fridge Compressor',
			caption: '',
		},
	],
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'PCB Design',
	description:
		'A combination of 3D printed components, off-the-shelf plastic enclosures, and a custom CNC milled screen window, the enclosure provided a simple installation and interface for the operator to view the status of the system and control the crane.',
	images: [
		{
			src: '/images/projects/exact-technology/exact-match-2/pcb-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'High Voltage Protection',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/pcb-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'DC-DC Converter',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/routing-pcb-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Cable Routing for Assembly',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/heatsinks.png',
			alt: 'Eigen Nodes',
			captionHeader: 'High Power MOSFETs',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/screen-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'DC-DC Converter',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/screen-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Tracking Cable Management',
			caption: '',
		},

		{
			src: '/images/projects/exact-technology/exact-match-2/thumbnail.png',
			alt: 'Eigen Nodes',
			captionHeader: 'DC-DC Converter',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/temp-profile-testing.png',
			alt: 'Eigen Nodes',
			captionHeader: 'High Power MOSFETs',
			caption: '',
		},
		{
			src: '/images/projects/exact-technology/exact-match-2/cable-mgmt-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Tracking Cable Management',
			caption: '',
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

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.PARTICLE,
		SoftwareTechnologyOption.ARDUINO,
		SoftwareTechnologyOption.CPP,
		SoftwareTechnologyOption.NODE,
		SoftwareTechnologyOption.ALTIUM,
		SoftwareTechnologyOption.FUSION,
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

const dividerSection1: DividerSection = {
	type: 'divider',
};

export const ExactMatch2: Project = {
	title: 'Exact Match',
	companyId: 'exact-technology',
	id: 'exact-exact-match-2',
	description:
		'Remote concrete curing chambers that match on-site curing conditions.',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.FIRMWARE,
		ProjectTag.PCBA,
		ProjectTag.MECHANICAL,
	],
	date: '2020-2022',
	page: {
		summary: '',
		heroImageSrc:
			'/images/projects/exact-technology/exact-match-2/hero.png',
		placeholderHeroImageSrc:
			'/images/projects/exact-technology/exact-match-2/hero.png',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
		sections: [
			imageLargeSection1,
			videoLargeSection1,
			dividerSection1,
			gallerySection1,
			gallerySection2,
			featuresSection1,
			softwareTechnologiesSection1,
			otherProjectsSection,
		],
	},
	thumbnailUrl:
		'/images/projects/exact-technology/exact-match-2/thumbnail.png',
	thumbnailBlurUrl:
		'/images/projects/exact-technology/exact-match-2/thumbnail.png',
};
