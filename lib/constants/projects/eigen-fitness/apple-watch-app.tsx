import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	YoutubeLargeSection,
	OtherProjectsSection,
	DividerSection,
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
	Move3D,
	AudioLines,
	Vibrate,
	Eye,
} from 'lucide-react';

const dividerSection1: DividerSection = {
	type: 'divider',
};

const youtubeLargeSection1: YoutubeLargeSection = {
	type: 'youtube-large',
	title: 'Apple Watch Demo',
	description:
		"Here's a short demo of the Apple Watch App in action on bench press. The audio feedback was later improved to sound like your coach with high fidelity voice cloning.",
	src: 'https://www.youtube.com/embed/biLMzefP4Pc',
	alt: 'Eigen Nodes',
};

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/apple-watch-app/watch-2.png',
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		'The Eigen Apple Watch App provides a comprehensive set of features to help gym-goers connect with their coach, improve their form, and track their progress.',
	features: [
		{
			title: '3D Motion Tracking',
			description:
				'My custom motion fusion algorithm designed for Nodes was ported to the Apple Watch to provide real-time motion tracking over each rep. ',
			icon: <Move3D />,
		},
		{
			title: 'Real-Time Feedback',
			description:
				'The Apple Watch App monitors user lifting form in real-time to provide personalized feedback from their personal trainer.',
			icon: <AudioLines />,
		},
		{
			title: 'Haptic Alerts',
			description:
				"Haptic alerts are provided to the user to notify them when they are doing a rep incorrectly, and when it's time to stop resting and get back to lifting.",
			icon: <Vibrate />,
		},
		{
			title: 'Heads Up Display',
			description:
				'An intuitive UI provides gym-goers with everything they need to know at a glance: current rep count, weight, rest time, and more.',
			icon: <Eye />,
		},
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'eigen-nodes',
		'dnai-labs-realtime-chat',
		'personal-cup-u',
	],
};

export const AppleWatchApp: Project = {
	title: 'Apple Watch App',
	companyId: 'eigen-fitness',
	id: 'eigen-apple-watch-app',
	description: 'All the features of Nodes, now on the Apple Watch.',
	link: 'https://www.eigen.fitness',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE, ProjectTag.STARTUP],
	thumbnailUrl:
		'/images/projects/eigen-fitness/apple-watch-app/hero-cropped.png',
	page: {
		summary:
			'In a market saturated with cardio-focused wearables, Nodes are the first wearables created exclusively for weightlifting. Apple Watch makes the in-gym experience even better. Like with Nodes, the Apple Watch App uses a state of the art custom motion fusion algorithm to provide real-time motion tracking over each rep. Users can view their data in the Eigen App, recieve personalized feedback from their personal trainer, and compete with friends in leaderboards and challenges.',
		heroImageSrc:
			'/images/projects/eigen-fitness/apple-watch-app/watch-1.png',
		placeholderHeroImageSrc:
			'/images/projects/eigen-fitness/apple-watch-app/watch-1.png',
		headerLogoSrc:
			'/images/projects/eigen-fitness/nodes/logo-1.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			youtubeLargeSection1,
			imageLargeSection1,
			dividerSection1,
			featuresSection1,
			otherProjectsSection,
		],
	},
};
