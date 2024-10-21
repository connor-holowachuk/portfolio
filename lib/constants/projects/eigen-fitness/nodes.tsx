import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	YoutubeLargeSection,
	VideoLargeSection,
	OtherProjectsSection,
	FeaturesSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
	DividerSection,
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
	Axis3D,
	BatteryCharging,
	BatteryFull,
	Signal,
	Cog,
	Vibrate,
	Fingerprint,
	Lock,
	Siren,
} from 'lucide-react';

const youtubeLargeSection1: YoutubeLargeSection = {
	type: 'youtube-large',
	title: 'Nodes Promotion Video',
	description:
		'I created the Node promotion video over the course of 2 weeks using Adobe Premier, After Effects, and Blender to promote Nodes and how they help gym goers maximize their potential.',
	src: 'https://www.youtube.com/embed/MMQmWUwqzgk',
	alt: 'Eigen Nodes',
};

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/nodes/hero-2.png',
};
const imageLargeSection2: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/nodes/hero-3.png',
};

const imageLargeSection3: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/nodes/hero-4.png',
};

const youtubeLargeSection2: YoutubeLargeSection = {
	type: 'youtube-large',
	title: 'Node Demo (2023)',
	description:
		"Here's another demo of the mobile app, paired with Nodes, in action on bicep curls. Filmed prior to audio feedback and with an older UI version.",
	src: 'https://www.youtube.com/embed/bKIBELpaN-M',
	alt: 'Eigen Nodes',
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'PCB & Assembly',
	description:
		'From prototypes with superglue to multi-layered production PCBs, the Node PCB design went through 6 iterations. Each iteration reduced the overall footprint, improved BLE signal quality, and incorporated lower power techniques to ensure the longest possible battery life.',
	images: [
		{
			src: '/images/projects/eigen-fitness/nodes/node-pcb-1.png',
			alt: 'Production PCB',
			captionHeader: 'Production PCB',
			caption:
				'The final production PCB features a high-density compnent layout, 4 layer 1.2mm PCB, and a tuned, etched antenna. Nodes are powered by an nRF52840, a low power 64MHz Cortex M4 SoV with BLE, and a competitive price point and availability.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/altium-1.png',
			alt: 'Altium Designer',
			captionHeader: 'Altium Designer',
			caption:
				'Altium Designer was used to design the multi-layer Node, Node Charger, and flexible PCBs. Autodesk Eagle was used to design the first iteration of the Node PCB, Circuit Studio was used for the following 2 iterations, and Altium Designer was used for the final design.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/testing-1.png',
			alt: 'Flex and Rigid PCBs',
			captionHeader: 'Flex and Rigid PCBs',
			caption:
				'Flex PCBs were used to accomodate the capacity tap sensor and charging port. To minimize cost, the flex and rigid PCBs were seperate components soldered together with exposed pads after assembly.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/assembly-1.png',
			alt: 'PCB Assembly',
			captionHeader: 'PCBAssembly',
			caption:
				'To minimize cost, the first Node prototypes were hand assembled using a solder stencil, paste, and a lot of focus. The design called for 0402 components, which is no easy task to pick and place by hand. My custom reflow oven and a soldering gun finished the job.',
		},

		{
			src: '/images/projects/eigen-fitness/nodes/node-pcb-2.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'PCB Revision 3',
			caption:
				'With 10% smaller footprint, the addition of a board-mounted horizontal vibration motor, and additional power management features, the Node PCB was ready for production.',
		},

		{
			src: '/images/projects/eigen-fitness/nodes/early-assembly-1.png',
			alt: 'Charger & Node Assembly',
			captionHeader: 'Charger & Node Assembly',
			caption:
				'The Node Charger was designed to be a simple, low-cost solution for charging a full set of Nodes. It features a 2-pin spring-loaded connector for the Node, and a micro USB connector for charging.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/early-box.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'Packaging (r1)',
			caption:
				'For cost minimization, the Node packaging was designed to fit a large postcard-sized stock – and was hand folded and glued together.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/first-node.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'The First Node',
			caption:
				"It's not pretty, but it worked. The first Node was held together with scotch tape, and powered with an external LiPo cell.",
		},
		{
			src: '/images/projects/eigen-fitness/nodes/wall-of-nodes-1.png',
			alt: 'Eigen Nodes',
			captionHeader: '64% Reduction in Size',
			caption:
				'My personal Node timeline, the Wall of Nodes serves as a reminder and showcase of how the form factor reduced by revision.',
		},
	],
};

const gallerySection2: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Enclosures',
	description: 'Eigen Nodes',
	images: [
		{
			src: '/images/projects/eigen-fitness/nodes/drawn-design-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Node Band (r1)',
			caption:
				'The first Node Band revision featured a multi-action release, with a mechanical lock and magnetic hold.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/sla-print-1.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'SLA Printing',
			caption:
				'The Node enclosure and band components were printed using SLA 3D printing, a technique that allows for a high-quality, smooth finish.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/cad-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Fusion 360',
			caption:
				'Fusion 360 was used to design the Node enclosure and band components. While optimized for 3D printing, the design was crafted to be injection molded.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/band-new-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Node Band (r2)',
			caption:
				'The second Node Band revision featured a durable turn-to-release mechanism, modelled after clipless pedals on a bike.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/charger-new-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Charger (r2) Assembly',
			caption:
				'The Node charger was redesigned to minimize cost and improve how users were able to transport them. A simple hinged lid was added to allow for easy access to the Node.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/nodes-table-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'LED Phasing',
			caption:
				"With a custom, elegant red/blue LED phasing algorithm, the Nodes' light pipe shone bright in contrast with the matte black finish of the enclosure.",
		},
		{
			src: '/images/projects/eigen-fitness/nodes/printers-1.png',
			alt: 'Altium Designer',
			captionHeader: 'Scaling Up',
			caption:
				'To scale up production, 2 large format SLA printers were added to print the Node enclosure and band components in parallel.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/node-arm-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'SLA Print Finishing',
			caption:
				'To finish the SLA printed parts, a custom finishing process was used to remove ridges and print debris. Seen here is a finished Node in contrast to an un-finished Band.',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/first-node.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'Assembling The First Node',
			caption:
				'Held together with scotch tape and superglue, the first Node was enclosed in a FDM printed case, and powered with an external LiPo cell.',
		},
	],
};

const videoLargeSection1: VideoLargeSection = {
	type: 'video-large',
	src: 'https://qbizcrwoohmzgibntrca.supabase.co/storage/v1/object/public/personal_site_large_files/projects/eigen-fitness/nodes/cap-touch.MOV?t=2024-10-20T20%3A24%3A27.085Z',
	alt: 'Eigen Nodes',
	title: 'Capacitive Tap Sensor Testing',
	description:
		'The capacitive tap sensor is used to trigger actions such as starting a set or pausing the workout. It is activated by a simple tap on the Node, and managed by an integrated conductive plate in a flexible PCB.',
};

const videoLargeSection2: VideoLargeSection = {
	type: 'video-large',
	src: 'https://qbizcrwoohmzgibntrca.supabase.co/storage/v1/object/public/personal_site_large_files/projects/eigen-fitness/nodes/leds.MOV?t=2024-10-20T20%3A27%3A19.944Z',
	alt: 'Eigen Nodes',
	title: 'LED Phasing Algorithm',
	description:
		"The LED phasing algorithm is used to provide visually appealing feedback to the user during workouts. The Node's color indicates its current state; here, the Node is 'breathing' red and blue to indicate that it is currently idle.",
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		'The first wearables created exclusively for weightlifting, Nodes are packed with features to make tracking workouts easier than ever.',
	features: [
		{
			title: '9 DoF IMU',
			description:
				"Each Node is equipped with a state of the art 9 DoF IMU to track motion in 3D space. The IMU is used to track the user's motion and provide real-time feedback on their performance.",
			icon: <Axis3D />,
		},
		{
			title: 'Ultra-Low Power',
			description:
				'Each Node is equipped with an ultra-low power SoC, power management system, and auto-sleep modes as low as 12uA to ensure that it can run for days on end without the need for a recharge.',
			icon: <BatteryFull />,
		},

		{
			title: 'OTA DFU',
			description:
				'Each Node can be updated over the air using the Eigen App, allowing for new features and bug fixes to be pushed out to the Nodes without the need for a physical connection.',
			icon: <Cog />,
		},
		{
			title: 'Tuned BLE Antenna',
			description:
				'Each Node features a tuned, etched antenna to ensure that the BLE signal is strong and reliable in a metal-filled gym environment.',
			icon: <Signal />,
		},
		{
			title: 'Capacitive Tap Sensor',
			description:
				'Each Node features a capacitive tap sensor to allow for a simple, intuitive way to trigger actions such as starting a rep or pausing the workout.',
			icon: <Fingerprint />,
		},

		{
			title: 'Haptic Feedback',
			description:
				'Equipped with a horizontal vibration motor, each Node can provide haptic feedback to the user to indicate the start of a rep, the end of a set, and tap actions.',
			icon: <Vibrate />,
		},
		{
			title: 'Secure Band Lock',
			description:
				'Nodes couple easily with the Node Band, and are secured for the hardest workouts with a simple turn-to-lock mechanism.',
			icon: <Lock />,
		},
		{
			title: 'Visual Feedback',
			description:
				'Each Node features a light ring to provide visual feedback to the user during workouts. The light color and intensity can be customized in the Eigen App.',
			icon: <Siren />,
		},
	],
};

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.NORDIC_SDK,
		SoftwareTechnologyOption.CPP,
		SoftwareTechnologyOption.ZEPHYR,
		SoftwareTechnologyOption.ALTIUM,
		SoftwareTechnologyOption.SEGGER,
		SoftwareTechnologyOption.FUSION,
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'dnai-labs-realtime-chat',
		'exact-temperature-logger',
		'university-tesla-coil',
	],
};

const dividerSection1: DividerSection = {
	type: 'divider',
};

export const Nodes: Project = {
	title: 'Nodes',
	companyId: 'eigen-fitness',
	id: 'eigen-nodes',
	description: 'The wearables made for weightlifting.',
	link: 'https://www.eigen.fitness',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
		ProjectTag.PCBA,
		ProjectTag.PLASTIC_INJECTION,
		ProjectTag.MECHANICAL,
		ProjectTag.PROTOTYPING,
		ProjectTag.STARTUP,
	],
	thumbnailUrl:
		'/images/projects/eigen-fitness/nodes/node-hand.jpg',
	page: {
		summary:
			'In a market saturated with cardio-focused wearables, Nodes are the first wearables created exclusively for weightlifting. Gym-goers wear 3, 5, or 9 Nodes to measure every rep: velocity, ROM, tempo, power, and more. Each Node is equipped with a state of the art IMU and custom motion fusion algorithms to provide real-time motion tracking over each rep. Users can view their data in the Eigen App, recieve personalized feedback from their personal trainer, and compete with friends in leaderboards and challenges.',
		heroImageSrc:
			'/images/projects/eigen-fitness/nodes/hero-1.png',
		placeholderHeroImageSrc:
			'/images/projects/eigen-fitness/nodes/hero-1-sm.png',
		headerLogoSrc:
			'/images/projects/eigen-fitness/nodes/logo-1.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			youtubeLargeSection1,
			imageLargeSection1,
			imageLargeSection2,
			imageLargeSection3,
			youtubeLargeSection2,
			gallerySection1,
			gallerySection2,
			videoLargeSection1,
			videoLargeSection2,
			dividerSection1,
			featuresSection1,
			softwareTechnologiesSection1,
			otherProjectsSection,
		],
	},
};
