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
	Smartphone,
	MessageSquare,
	AudioLines,
	Calendar,
	Apple,
	Radio,
	Star,
	TrendingUp,
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
	alt: 'Eigen AW',
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
		'Version 1.2.0. The update focused on promoting coach interaction with clients. Voice cloning was added to promote a parasocial relationship with their coach while training remotely.',
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
	description:
		'The Eigen App was designed to provide new to experienced gym-goers with a seamless tool to reach their goals faster than ever before.',
	features: [
		{
			title: 'Coach-managed Programs',
			description:
				"Users can view their coach's custom workout program and follow along with the provided instructional videos to stay on track to reaching their goals.",
			icon: <Calendar />,
		},
		{
			title: "Coach's Voice Feedback",
			description:
				"Users can hear their coach's voice guiding them through proper lifting techniques, providing a more personalized experience and building a deeper relationship with their coach.",
			icon: <AudioLines />,
		},
		{
			title: 'In-app Messaging',
			description:
				'Users can message their coach either over SMS or directly through the app to ask questions, get feedback, and stay on track to reaching their goals.',
			icon: <MessageSquare />,
		},
		{
			title: 'Tailored Workout Summaries',
			description:
				'Users can view summaries of their workouts to quickly review their progress and stay on track to reaching their goals, with high-fidelity lifting metrics for advanced users.',
			icon: <Notebook />,
		},
		{
			title: 'Nutrition Logging',
			description:
				"Users can log their meals and recipes to view their nutrition data over time, and follow along with their coach's AI-generated meal plans.",
			icon: <Apple />,
		},

		{
			title: 'Set-by-Set Ratings',
			description:
				'Motion data is used to rate each set on a scale of 1-5 stars for a simple, objective way to track progress over time.',
			icon: <Star />,
		},
		{
			title: 'Improvement Tips',
			description:
				'Node and Apple Watch data is used to provide personalized improvement tips on a variety of metrics to help users get the most out of their training.',
			icon: <TrendingUp />,
		},
		{
			title: 'BLE Node Connectivity',
			description:
				"Nodes automatically connect to their owner's phone when in range. The mobile app allows users to manage Node settings, and update firmware OTA.",
			icon: <Radio />,
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
			'In a market saturated with cardio-focused wearables, Nodes are the first wearables created exclusively for weightlifting. Users connect to Nodes or the Eigen Apple Watch App to with the Eigen App to connect with their coach, view their data, watch exercise instructional videos, recieve personalized feedback from their coach, and compete with friends in leaderboards and challenges.',
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
