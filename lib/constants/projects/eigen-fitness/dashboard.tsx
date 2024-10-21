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
	Cable,
	Database,
	Rabbit,
	LockIcon,
	Notebook,
	ListCheck,
	Camera,
	User,
	Apple,
	MonitorSmartphone,
	ChartSpline,
	ScreenShare,
} from 'lucide-react';

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.NEXTJS,
		SoftwareTechnologyOption.SUPABASE,
		SoftwareTechnologyOption.TAILWIND,
		SoftwareTechnologyOption.DENO,
		SoftwareTechnologyOption.POSTGRESQL,
		SoftwareTechnologyOption.OPENAI,
		SoftwareTechnologyOption.CARTESIA,
		SoftwareTechnologyOption.STRIPE,
		SoftwareTechnologyOption.TWILIO,
	],
};

const dividerSection1: DividerSection = {
	type: 'divider',
};

const youtubeLargeSection1: YoutubeLargeSection = {
	type: 'youtube-large',
	title: 'Eigen Coach Demo',
	description:
		'An overview of the Eigen Coach dashboard and how it helps coaches manage their clients, track their progress, and provide them with personalized feedback.',
	src: 'https://www.youtube.com/embed/CKeB9zrmoxA',
	alt: 'Eigen Coach Demo',
};
const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/dashboard/page-1.png',
	title: 'AI Nutrition Planner',
	caption:
		'The nutrition planner was designed to help coaches with minimal nutrition experience create meal plans for their clients in as little time as possible. AI assists in building meal plans, and coaches can easily add and configure meals and recipes, and can even add custom recipes.',
};
const imageLargeSection2: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/dashboard/page-2.png',
	title: 'Program Designer',
	caption:
		'Eigen Coach is the fastest available platform for creating long-term, progressive, and personalized workout plans. Programs are organized by week, and then by phase, allowing coaches to easily create and manage complex programs.',
};
const imageLargeSection3: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/dashboard/page-3.png',
	title: 'Coaching Dashboard Overview',
	caption:
		'The dashboard overview provides a quick snapshot of the latest information, including the latest workouts, workout reviews to be completed, and notifications on messages and programs in need of updating.',
};
const imageLargeSection4: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/dashboard/page-4.png',
	title: 'Workout Builder',
	caption:
		'Unlike other platforms, we re-thought the UX of building workouts, optimizing for speed and ease of use. Exercises are added and configured by natural language, and can be configured with simple click-and-drag functionality.',
};
const imageLargeSection5: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/dashboard/page-5.png',
	title: 'Custom Website Builder',
	caption:
		'Many coaches rely on Instagram and Linktree to market themselves. To help coaches better communicate what differentiates them, the dashboard allows coaches to create a custom website and onboarding form, including a CRM and analytics dashboard.',
};
const imageLargeSection6: ImageLargeSection = {
	type: 'image-large',
	alt: 'Eigen Nodes',
	src: '/images/projects/eigen-fitness/dashboard/page-6.png',
	title: 'Site CRM and Analytics',
	caption:
		'To assist coaches and gyms improve their website, the Coaching platform monitored in-depth analytics on the website traffic and user engagement. This included page views, user engagement, visit location, device type, and more.',
};

const featuresSection1: FeaturesSection = {
	type: 'features',
	title: 'Features',
	description:
		'The Eigen Coach dashboard provides a comprehensive set of features to help coaches manage their remote clients, track their progress, and provide them with personalized feedback – all at lightning speed.',
	features: [
		{
			title: 'Workout Summaries',
			description: `Workout summaries are generated for each workout to allow coaches to quickly provide meaningful feedback and build a relationship with their clients.`,
			icon: <Notebook />,
		},
		{
			title: 'AI Nutrition Planner',
			description:
				'AI assists in building meal plans, and coaches can easily add and configure meals and recipes, and can even add custom recipes.',
			icon: <Apple />,
		},
		{
			title: 'Message-to-SMS',
			description:
				'Coaches can send messages to their clients via SMS, and the clients can reply via SMS to the coach. This allows for a more personal and interactive experience.',
			icon: <MonitorSmartphone />,
		},
		{
			title: 'Custom Website Builder',
			description:
				'Coaches can easily create custom websites to better communicate what differentiates them from other coaches, and improve dealflow.',
			icon: <ScreenShare />,
		},
		{
			title: 'Custom Site Analytics',
			description:
				'Coaches can quickly view analytics on their website traffic and user engagement, down to location and device type.',
			icon: <ChartSpline />,
		},
		{
			title: 'CRM and Forms',
			description:
				'Coaches can easily create custom forms to collect information from their clients, and can even add custom questions.',
			icon: <ListCheck />,
		},
		{
			title: 'Multimodal Messaging',
			description:
				'Coaches can send text, video, and image messages to their clients via the Eigen app or SMS, and the clients can reply via SMS to the coach.',
			icon: <Camera />,
		},
		{
			title: 'Voice Cloning',
			description:
				'Coaches can clone their own voice to provide a more personalized experience for their clients, which is heard by clients during their workout.',
			icon: <User />,
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

export const Dashboard: Project = {
	title: 'Coaching Dashboard',
	companyId: 'eigen-fitness',
	id: 'eigen-dashboard',
	description:
		'Build more meaningful relationships with remote personal training clients.',
	link: 'https://www.eigen.fitness',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE, ProjectTag.STARTUP],
	thumbnailUrl:
		'/images/projects/eigen-fitness/dashboard/thumbnail.png',
	page: {
		summary:
			'Personal training is too expensive for 98% of gym goers, leaving most to fumble through their workouts alone. Eigen Coach helps trainers offer their services at a more afforable rate while handling higher volume through remote training. The Eigen Coach dashboard allows coaches manage their clients, track their progress, and provide them with personalized feedback – all at a fraction of the cost and time.',
		heroImageSrc:
			'/images/projects/eigen-fitness/dashboard/hero-1-cropped.png',
		placeholderHeroImageSrc:
			'/images/projects/eigen-fitness/dashboard/hero-1-cropped-sm.png',
		headerLogoSrc:
			'/images/projects/eigen-fitness/nodes/logo-1.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			softwareTechnologiesSection1,
			youtubeLargeSection1,
			dividerSection1,
			imageLargeSection3,
			imageLargeSection1,
			imageLargeSection2,
			imageLargeSection4,
			imageLargeSection5,
			imageLargeSection6,
			dividerSection1,
			featuresSection1,
			otherProjectsSection,
		],
	},
};
