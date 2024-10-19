import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	YoutubeLargeSection,
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
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},

		{
			src: '/images/projects/eigen-fitness/nodes/early-assembly-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/early-box.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/first-node.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'The First Node',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/wall-of-nodes-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Wall of Nodes',
			caption: 'Eigen Nodes',
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
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/sla-print-1.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/cad-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Production PCB',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/band-new-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/charger-new-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/nodes-table-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/printers-1.png',
			alt: 'Altium Designer',
			captionHeader: 'Altium Designer',
			caption: 'Altium Designer',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/node-arm-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Eigen Nodes',
			caption: 'Eigen Nodes',
		},
		{
			src: '/images/projects/eigen-fitness/nodes/first-node.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'Assembling The First Node',
			caption: 'Eigen Nodes',
		},
	],
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description: 'DNAi',
	features: [
		{
			title: 'Websocket Streaming',
			description:
				"Audio streams of the DNAi's responses are streamed to the user as they are generated, providing a quick, seamless and interactive experience.",
			icon: <Cable />,
		},
		{
			title: 'Updatable RAG',
			description:
				'To present users with the latest infromation, professionals are able to easily update their knowlegde base through a chat with our onboarding assistant.',
			icon: <Database />,
		},
		{
			title: 'Sub-500ms Latency',
			description:
				'Realism is key to comfortable conversations with a DNAi. Llama 3.1 running on TPUs and LPUs were leveraged for a fast, realistic conversational interaction.',
			icon: <Rabbit />,
		},
		{
			title: 'E2E Encryption',
			description:
				'End-to-end encryption is a must for any chat application. We use industry standard AES-256 encryption to ensure that the conversations between users and service providers are private.',
			icon: <LockIcon />,
		},
		{
			title: 'Real-Time Chat Summaries',
			description:
				'Users can view the summaries that are shared with their service provider during the conversation so that they are comfortable with the information being shared.',
			icon: <Notebook />,
		},

		{
			title: 'Topic Summaries',
			description:
				'Conversation topics are summarized and presented to the user so that they can quickly view the information that will be shared with their service provider.',
			icon: <ListCheck />,
		},
		{
			title: 'Multimodal Inputs',
			description:
				'Users can speak and type messages to the DNAi, and supplement their responses with images and videos to be shared with their service provider.',
			icon: <Camera />,
		},
		{
			title: 'Secured by Authentication',
			description:
				"Users are required to login to the application to access the real-time chat feature, ensuring that only authorized users can access the service provider's DNAi.",
			icon: <User />,
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

export const Nodes: Project = {
	title: 'Nodes',
	companyId: 'eigen-fitness',
	id: 'eigen-nodes',
	description: 'Wearables made for weightlifting.',
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
			featuresSection1,
			otherProjectsSection,
		],
	},
};
