import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	YoutubeLargeSection,
	VideoLargeSection,
	OtherProjectsSection,
} from '@/lib/types';

const videoLargeSection1: VideoLargeSection = {
	type: 'video-large',
	title: 'Winding the Coil',
	description:
		'With over 2,000 turns of 24 gauge wire on the seconary coil, constructing the Tesla Coil was no trivial task. To keep the windings tightly bound together, and to optimize for efficiency, I designed and built a custom winding machine. Two stepper motors were used, driven by custom firmware, to turn the coil and step the wire along the tube – just a hair above the last turn of the previous layer.',
	src: '/videos/projects/university/tesla-coil/winding-1.mov',
	alt: 'Eigen Nodes',
};

const videoLargeSection2: VideoLargeSection = {
	type: 'video-large',
	title: 'Phosphorus Bulb Test',
	description:
		"To test the Tesla Coil, I built a 120VAC power supply to power the coil and to illuminate a nearby fluorescent bulb. Dispite shorting my house's breaker and shooting lightning out of the MOSFETs on the first try, I was able to light the bulb after adjusting the power supply to limit the current draw.",
	src: '/videos/projects/university/tesla-coil/ph-bulb.mov',
	alt: 'Eigen Nodes',
};

const videoLargeSection3: VideoLargeSection = {
	type: 'video-large',
	title: 'Arcing (From a Distance)',
	description:
		"The ultimate test was to measure the arc distance when shorting the secondary coil to the primary circuit's ground. With the university's largest bench top power supply, I was able to arc across a 2.5cm gap – around 66kV.",
	src: '/videos/projects/university/tesla-coil/arc-1.mov',
	alt: 'Eigen Nodes',
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Prototyping & Testing',
	description:
		"The Tesla Coil design and testing was completed in 2 months. The end product made use of my custom power supply, primary coil driver, over 2,000 tuns on the secondary coil, and an audio signal modulator to play an audio track through the coil's arc. Unfortunately, I don't have any videos of the music playing, but I did successfully play Sail by AWOLNATION through the coil on demo day!",
	images: [
		{
			src: '/images/projects/university/tesla-coil/winding-1.png',
			alt: 'Winding the Coil',
			captionHeader: 'Winding the Coil',
			caption:
				'Using stepper motors and extruded aluminium, I designed and built a custom winding machine to wind over 2,000 turns of 24 gauge wire on the secondary coil.',
		},
		{
			src: '/images/projects/university/tesla-coil/circuit-2.jpg',
			alt: 'Breadboard Prototype',
			captionHeader: 'Breadboard Prototype',
			caption:
				"After winding the coil, I breadboarded the modulation circuit that controlled the frequency of the Tesla Coil's primary circuit. And audio signal served as the LM555's modulating signal on top of the base frequency.",
		},
		{
			src: '/images/projects/university/tesla-coil/circuit-1.jpg',
			alt: 'Power Supply',
			captionHeader: 'Power Supply',
			caption:
				'To power the Tesla Coil, I built a 120VAC-5V/24VDC power supply to power the coil and to illuminate a nearby fluorescent bulb. The 5V output was used to drive the modulation circuit, while the 24VDC output powered the primary circuit.',
		},
		{
			src: '/images/projects/university/tesla-coil/coil-1.jpg',
			alt: 'The Final Coil',
			captionHeader: 'The Final Coil',
			caption:
				'After 2 months of design, prototyping, and testing, the Tesla Coil was complete. PVC tubing and aluminium duct were used for the secondary coil and toroid, with over 2,000 turns of 24 gauge wire were wound on the secondary coil.',
		},

		{
			src: '/images/projects/university/tesla-coil/phosphorus-bulb-1.png',
			alt: 'Lighting the Bulb',
			captionHeader: 'Lighting the Bulb',
			caption:
				'With the Tesla Coil complete and powered by my custom power supply, I was able to light a nearby fluorescent bulb with the ~30kV output (the most I could achieve from a wall outlet)!',
		},

		{
			src: '/images/projects/university/tesla-coil/arc-1.png',
			alt: 'Lab Demo',
			captionHeader: 'Lab Demo',
			caption:
				"I demoed the Tesla Coil at the University's Electrical Engineering Lab, with the largest power supply available. With a 2.5cm gap and ~66kV, I was able to arc across the gap – and play music through the arc!",
		},
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'eigen-nodes',
		'exact-temperature-logger',
		'exact-pcb-antenna-tuning',
	],
};

export const TeslaCoil: Project = {
	title: 'Tesla Coil',
	companyId: 'university',
	id: 'university-tesla-coil',
	description:
		'A 66kV Tesla Coil that played music through the arc.',
	link: '',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	thumbnailUrl:
		'/images/projects/university/tesla-coil/phosphorus-bulb-2.png',
	page: {
		summary: `The Tesla Coil is a high voltage, high frequency transformer used to produce a spark gap discharge. 
			I built this Tesla Coil as part of a class electronics design project, and incorporated a frequency modulator to play an audio signal through the coil via a 3.5mm audio cable. Limited by the power source's current supply, I was able to achieve 66kV – enough to light a nearby fluorescent bulb and create a 2-3cm spark gap discharge.`,
		heroImageSrc:
			'/images/projects/university/tesla-coil/phosphorus-bulb-2.png',
		placeholderHeroImageSrc:
			'/images/projects/university/tesla-coil/phosphorus-bulb-1.png',
		headerLogoSrc:
			'/images/projects/eigen-fitness/nodes/logo-1.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			videoLargeSection1,
			videoLargeSection2,
			gallerySection1,
			otherProjectsSection,
		],
	},
};
