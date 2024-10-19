import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	VideoLargeSection,
	OtherProjectsSection,
} from '@/lib/types';

const videoLargeSection1: VideoLargeSection = {
	type: 'video-large',
	title: 'LED PWM Testing',
	description:
		'A wood model powered by a stepper motor was created to test the rotational accuracy of IMU used in the crane avoidance system. Please excuse the camera focus issues.',
	src: 'https://qbizcrwoohmzgibntrca.supabase.co/storage/v1/object/public/personal_site_large_files/projects/exact-technology/exact-match-2/video-1.MOV?t=2024-10-16T01%3A00%3A40.073Z',
	alt: 'LED PWM Testing Video',
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Enclosure Design',
	description:
		'A combination of 3D printed components, off-the-shelf plastic enclosures, and a custom CNC milled screen window, the enclosure provided a simple installation and interface for the operator to view the status of the system and control the crane.',
	images: [
		{
			src: '/images/projects/exact-technology/crane-avoidance/enclosure-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Enclosure Design',
			caption:
				'The enclosure was designed to be easily installed on the crane, and to provide a simple interface for the operator to view the status of the system and control the crane.',
		},
		{
			src: '/images/projects/exact-technology/crane-avoidance/enclosure-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Peripheral Ports',
			caption:
				'Using ethernet ports with LED indicators, periperal ports were added to easily interface with the Raspberry Pi for expansion features without altering the design.',
		},
		{
			src: '/images/projects/exact-technology/crane-avoidance/screen-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Miniature Screen',
			caption:
				'A 4.7" OLED display used to test a portable model of the system. Using a Raspberry Pi, the screen was connected over HDMI and controlled with custom software (Vue.js).',
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

export const ExactMatch2: Project = {
	title: 'Exact Match 2',
	companyId: 'exact-technology',
	id: 'exact-exact-match-2',
	description: 'Exact',
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
		sections: [
			videoLargeSection1,
			gallerySection1,
			otherProjectsSection,
		],
	},
	thumbnailUrl:
		'/images/projects/exact-technology/exact-match-2/thumbnail.png',
	thumbnailBlurUrl:
		'/images/projects/exact-technology/exact-match-2/thumbnail.png',
};
