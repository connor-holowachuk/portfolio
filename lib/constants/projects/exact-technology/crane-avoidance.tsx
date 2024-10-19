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
	title: 'Miniature Model',
	description:
		'A wood model powered by a stepper motor was created to test the rotational accuracy of IMU used in the crane avoidance system. Please excuse the camera focus issues.',
	src: 'https://qbizcrwoohmzgibntrca.supabase.co/storage/v1/object/public/personal_site_large_files/projects/exact-technology/crane-avoidance/video-1.MOV?t=2024-10-16T00%3A58%3A25.397Z',
	alt: 'Miniature Model Video',
};
const videoLargeSection2: VideoLargeSection = {
	type: 'video-large',
	title: 'Adding Collision Zones',
	description:
		'In addition to avoiding other cranes, the boom and rear counterweight must also avoid nearby towers, especially in dense urban environments. Adding collision zones to the system helped the crane opperator to avoid collisions with out-of-sight nearby structures.',
	src: 'https://qbizcrwoohmzgibntrca.supabase.co/storage/v1/object/public/personal_site_large_files/projects/exact-technology/crane-avoidance/video-1.MOV?t=2024-10-16T00%3A58%3A25.397Z',
	alt: 'Adding Deadzones Video',
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Software',
	description:
		'The software was built using Vue.js and is a single page application that runs on a Raspberry Pi. It interfaced over I2C to an IMU secured within the enclosure for real-time orientation data, filtered by a an adjusted AHRS algorithm.',
	images: [
		{
			src: '/images/projects/exact-technology/crane-avoidance/sw-test.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Nearby Crane Avoidance',
			caption:
				'A combination of 3D printed components, off-the-shelf plastic enclosures, and a custom CNC milled screen window, the enclosure provided a simple installation and interface for the operator to view the status of the system and control the crane.',
		},
		{
			src: '/images/projects/exact-technology/crane-avoidance/screen-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Weather Updates',
			caption:
				'Equipped with a u-blox 4G modem and optional wind speed sensor, the software was able to provide the operator with weather updates and warnings when the wind speed exceeded safe operating limits.',
		},
		{
			src: '/images/projects/exact-technology/crane-avoidance/screen-3.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Collision Zones',
			caption:
				'Along with avoiding other cranes, the boom and rear counterweight must also avoid nearby towers, especially in dense urban environments. Calibrating collision zones for the boom and counterweight helped the operator to avoid collisions with nearby towers.',
		},
	],
};
const gallerySection2: ImageGallerySection = {
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
		'exact-exact-match-2',
	],
};

export const CraneAvoidance: Project = {
	title: 'Crane Avoidance',
	companyId: 'exact-technology',
	id: 'exact-crane-avoidance',
	description:
		'In-cab display to help crane operators avoid collisions.',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	page: {
		summary:
			'The Crane Avoidance System is a safety feature designed to prevent collisions between cranes and other structures. The system uses a combination of sensors and software to detect the presence of other cranes and other structures and to provide a warning to the operator.',
		heroImageSrc:
			'https://images.unsplash.com/photo-1516971849755-77ddd3e004b0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		placeholderHeroImageSrc:
			'https://images.unsplash.com/photo-1516971849755-77ddd3e004b0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
		sections: [
			videoLargeSection1,
			gallerySection1,
			gallerySection2,
			videoLargeSection2,
			otherProjectsSection,
		],
	},
	thumbnailUrl:
		'https://images.unsplash.com/photo-1516971849755-77ddd3e004b0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	thumbnailBlurUrl:
		'https://images.unsplash.com/photo-1516971849755-77ddd3e004b0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
