import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	VideoLargeSection,
	OtherProjectsSection,
	DividerSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
} from '@/lib/types';

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	src: '/images/projects/exact-technology/antenna-tuning/relay-f-1.jpeg',
	alt: 'Eigen Nodes',
	title: 'Signal Optimization',
	caption:
		'The Relay PCB accepts incoming signals from temperature loggers via LoRa and pushes them to the cloud using a u-blox 4G modem.',
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Tuning the Antenna',
	description:
		'Using a spectrum analyzer and smith chart, the antenna was tested and tuned in a variety of environments to ensure optimal performance in real-world conditions.',
	images: [
		{
			src: '/images/projects/exact-technology/antenna-tuning/ant-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Antenna Isolation',
			caption:
				"To measure the etched antenna's baseline performance, the PCB was placed a sufficent distance form any conductive medium and testing with a spectrum analyzer.",
		},
		{
			src: '/images/projects/exact-technology/antenna-tuning/smith-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Smith Chart Analysis',
			caption:
				'A Smith Chart was used to analyze the antenna performance and determine the optimal impedance and tuning component configuration for efficient performance of the on-board antenna.',
		},
		{
			src: '/images/projects/exact-technology/antenna-tuning/ant-3.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Real-world Conditions Testing',
			caption:
				"Adding a nearby battery, a highly conductive medium, helped to test the antenna in a real-world environment. Tests were also conducted with nearby steel structures to test the antenna's ability to avoid interference.",
		},
	],
};

const gallerySection2: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Relay Design Improvements',
	description:
		'The Relay PCB accepts incoming signals from temperature loggers via LoRa and pushes them to the cloud using a u-blox 4G modem. An SMA connector was added for interchangable antennas and the layout was improved to reduce parasitic capacitance and improve signal strength.',
	images: [
		{
			src: '/images/projects/exact-technology/antenna-tuning/relay-f-1.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'Relay Signal Optimization',
			caption:
				'Optimizing the Relay design for use with an SMA connector for interchangabile antennas. The on-board signal routing was carefully measured to ensure optimal signal strength.',
		},
		{
			src: '/images/projects/exact-technology/antenna-tuning/relay-b-1.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'PCB Layout Improvements',
			caption:
				'Improving the layout of components on the PCB, and adding high density ground plane vias, helped to reduce the parasitic capacitance and improve the signal strength.',
		},
		{
			src: '/images/projects/exact-technology/antenna-tuning/tin-can-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Noise Attenuation',
			caption:
				'Adding a tin can connected to the ground plane helped to reduce the noise from the environment and LoRa interference with GSM signals and improve the signal strength.',
		},
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'eigen-nodes',
		'exact-temperature-logger',
		'exact-exact-match-2',
	],
};

export const PCBAntennaTuning: Project = {
	title: 'RF Antenna Tuning',
	companyId: 'exact-technology',
	id: 'exact-pcb-antenna-tuning',
	description: 'PCB antenna tuning for long-range communication.',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [ProjectTag.HARDWARE, ProjectTag.PCBA],
	thumbnailBlurUrl:
		'/images/projects/exact-technology/antenna-tuning/relay-f-1.jpeg',
	thumbnailUrl:
		'/images/projects/exact-technology/antenna-tuning/relay-f-1.jpeg',
	page: {
		summary:
			'Noisy construction environments make it difficult to achieve reliable long-range communication. The goal of the project was to optimize the signal strength of both the Temperature Logger and Relay PCBs to ensure reliable long-range communication.',
		heroImageSrc:
			'/images/projects/exact-technology/antenna-tuning/hero.png',
		placeholderHeroImageSrc:
			'/images/projects/exact-technology/antenna-tuning/hero.png',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
		sections: [
			imageLargeSection1,
			gallerySection1,
			gallerySection2,
			otherProjectsSection,
		],
	},
};
