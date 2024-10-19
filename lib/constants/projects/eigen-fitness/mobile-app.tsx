import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	YoutubeLargeSection,
	OtherProjectsSection,
	FeaturesSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
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

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.REACT_NATIVE,
		SoftwareTechnologyOption.SUPABASE,
		SoftwareTechnologyOption.EXPO,
		SoftwareTechnologyOption.DENO,
		SoftwareTechnologyOption.POSTGRESQL,
		SoftwareTechnologyOption.TAILWIND,
		SoftwareTechnologyOption.CARTESIA,
		SoftwareTechnologyOption.IONIC,
		SoftwareTechnologyOption.CAPACITOR,
	],
};

const youtubeLargeSection1: YoutubeLargeSection = {
	type: 'youtube-large',
	title: 'Apple Watch Demo',
	description:
		"Here's a short demo of the mobile app, paired with the Apple Watch App, in action on bench press. The audio feedback was later improved to sound like your coach with high fidelity voice cloning.",
	src: 'https://www.youtube.com/embed/biLMzefP4Pc',
	alt: 'Eigen Nodes',
};

const youtubeLargeSection2: YoutubeLargeSection = {
	type: 'youtube-large',
	title: 'Node Demo (2023)',
	description:
		"Here's another demo of the mobile app, paired with Nodes, in action on bicep curls. Filmed prior to audio feedback and with an older UI version.",
	src: 'https://www.youtube.com/embed/bKIBELpaN-M',
	alt: 'Eigen Nodes',
};

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/mobile-app/phone-1.png',
	caption:
		'Version 1.2.0. The interface updated focused on promoting coach interaction with clients. Voice cloning was added to promote a parasocial relationship with their coach while training remotely.',
};
const imageLargeSection2: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/mobile-app/screens-1.png',
};

const imageLargeSection3: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/nodes/hero-4.png',
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

export const MobileApp: Project = {
	title: 'Mobile App',
	companyId: 'eigen-fitness',
	id: 'eigen-mobile-app',
	description: 'The mobile app for Eigen Fitness.',
	link: 'https://www.eigen.fitness',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE, ProjectTag.STARTUP],
	thumbnailUrl:
		'/images/projects/eigen-fitness/mobile-app/hero.png',
	page: {
		summary:
			'In a market saturated with cardio-focused wearables, Nodes are the first wearables created exclusively for weightlifting. Gym-goers wear 3, 5, or 9 Nodes to measure every rep: velocity, ROM, tempo, power, and more. Each Node is equipped with a state of the art IMU and custom motion fusion algorithms to provide real-time motion tracking over each rep. Users can view their data in the Eigen App, recieve personalized feedback from their personal trainer, and compete with friends in leaderboards and challenges.',
		heroImageSrc:
			'/images/projects/eigen-fitness/mobile-app/hero-cropped.png',
		placeholderHeroImageSrc:
			'/images/projects/eigen-fitness/mobile-app/hero-cropped.png',
		headerLogoSrc:
			'/images/projects/eigen-fitness/nodes/logo-1.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			softwareTechnologiesSection1,
			youtubeLargeSection1,
			youtubeLargeSection2,
			imageLargeSection1,
			imageLargeSection2,
			imageLargeSection3,
			featuresSection1,
			otherProjectsSection,
		],
	},
};
