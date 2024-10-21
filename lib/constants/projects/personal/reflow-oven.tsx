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
	ScanLine,
	ChartNetwork,
	Tv,
	BellRing,
} from 'lucide-react';

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/personal/reflow-oven/oven-1.png',
	title: 'The Improved Toaster Oven',
	description:
		"Toaster ovens might be good for pizza, but they're even better for baking PCBs. I used the body and heating elements of a toaster oven to create a reflow oven, with an added IR temperature sensor mounted on the top to measure the temperature of the PCB.",
};
const imageLargeSection2: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/personal/reflow-oven/control-pcb-1.jpg',
	title: 'Chemically Etched PCB',
	description:
		'Before I ordered my first PCBs from a fab house, I chemically etched my own PCBs to test the reflow oven. This involved designing the routes in Eagle, transferring it to a transparency sheet, using an iron to transfer onto a copper clad board, and then using it to etch the PCB in a hydrochloric acid + hydrogen peroxide solution.',
};
const imageLargeSection3: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/personal/reflow-oven/temp-monitor.png',
	title: 'Logic Gate 7-seg Display Driver',
	description:
		'I designed a 7-segment display driver using logic gates to display the temperature of the oven. When counting up, a single ping from the Arduino would count the temperature up by 1 degree. When counting down, 999 pings would reduce the temperature by 1 degree.',
};
const imageLargeSection4: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/personal/reflow-oven/baking-2.png',
	title: 'Baking a PCB',
	description:
		'After using a solder stencil to apply the solder paste and components were placed on the PCB, the PCBs were placed in the oven and baked according to the solder paste reflow heating curve.',
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		'The reflow oven was designed to be a simple and affordable way to reflow solder SMT components on my PCB projects.',
	features: [
		{
			title: 'IR Temperature Sensor',
			description: `The reflow oven uses an IR temperature sensor mounted on the top to measure the temperature of the PCB.`,
			icon: <ScanLine />,
		},
		{
			title: 'Programmable Heating Curve',
			description:
				'For precise temperature control, the reflow oven uses a programmable heating curve to control the temperature of the oven over time.',
			icon: <ChartNetwork />,
		},
		{
			title: 'Real-time Temperature Display',
			description:
				'I was able to view the temperature of the oven in real-time using a 7-segment display.',
			icon: <Tv />,
		},
		{
			title: 'Ding on Completion',
			description:
				'The reflow oven uses a buzzer to notify the user when the PCB is done baking.',
			icon: <BellRing />,
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

export const ReflowOven: Project = {
	title: 'Reflow Oven',
	companyId: 'personal',
	id: 'personal-reflow-oven',
	description:
		'My custom built reflow oven for soldering SMT components.',
	link: '',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	thumbnailUrl:
		'/images/projects/personal/reflow-oven/baking-1.jpeg',
	page: {
		summary:
			'A private project which was initiated by the aspiration to build circuits that make use of SMT components. A home-etched control circuit, comprised of high power SSRs, an IR thermal sensor, and an ATMEGA-328P bootloaded with Arduino, was used to control the heating elements of an inexpensive toaster oven and follow the appropriate heating curve for the solder paste to set correctly.',
		heroImageSrc:
			'/images/projects/personal/reflow-oven/baking-1.jpeg',
		placeholderHeroImageSrc:
			'/images/projects/personal/reflow-oven/baking-1.jpeg',
		headerLogoSrc:
			'/images/projects/eigen-fitness/nodes/logo-1.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			imageLargeSection1,
			imageLargeSection2,
			imageLargeSection3,
			imageLargeSection4,
			featuresSection1,
			otherProjectsSection,
		],
	},
};
