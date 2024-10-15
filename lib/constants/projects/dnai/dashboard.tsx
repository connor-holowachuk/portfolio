import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	YoutubeLargeSection,
	OtherProjectsSection,
	SoftwareTechnologiesSection,
	SoftwareTechnologyOption,
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

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.NEXTJS,
		SoftwareTechnologyOption.SUPABASE,
		SoftwareTechnologyOption.TAILWIND,
		SoftwareTechnologyOption.SHADCN,
		SoftwareTechnologyOption.STRIPE,
		SoftwareTechnologyOption.OPENAI,
		SoftwareTechnologyOption.GROQ,
		SoftwareTechnologyOption.CARTESIA,
		SoftwareTechnologyOption.DENO,
	],
};

const youtubeLargeSection1: YoutubeLargeSection = {
	type: 'youtube-large',
	title: 'Demo',
	description:
		'I created the Node promotion video over the course of 2 weeks using Adobe Premier, After Effects, and Blender to promote Nodes and how they help gym goers maximize their potential.',
	src: 'https://www.youtube.com/embed/6hD43Z6mlOM',
	alt: 'DNAi',
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

const otherProjectsSection1: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: ['dnai-labs-realtime-chat', 'exact-crane-avoidance'],
};

export const Dashboard: Project = {
	title: 'Dashboard',
	companyId: 'dnai-labs',
	id: 'dnai-labs-dashboard',
	description:
		'An easy-to-use dashboard where professionals can deploy and manage their DNAi.',
	link: 'https://www.dnai.ai',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE, ProjectTag.STARTUP],
	thumbnailUrl: '/images/projects/dnai/dashboard/hero-cropped.png',
	page: {
		summary:
			'DNAi is a platform that allows researchers to analyze and visualize their data in a more intuitive and interactive way.',
		heroImageSrc:
			'/images/projects/dnai/dashboard/hero-cropped.png',
		placeholderHeroImageSrc:
			'/images/projects/dnai/dashboard/hero-cropped.png',
		headerLogoSrc: '/images/projects/dnai/logo.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			softwareTechnologiesSection1,
			youtubeLargeSection1,
			featuresSection1,
			otherProjectsSection1,
		],
	},
};
