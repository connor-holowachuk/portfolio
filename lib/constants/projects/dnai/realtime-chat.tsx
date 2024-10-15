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
	Camera,
	CircleIcon,
	Database,
	ListCheck,
	LockIcon,
	Notebook,
	Rabbit,
	User,
} from 'lucide-react';

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	title: 'DNAi',
	description: 'DNAi',
	src: '/images/projects/dnai/realtime-chat/mockup-1.png',
	alt: 'DNAi',
};

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.NEXTJS,
		SoftwareTechnologyOption.SUPABASE,
		SoftwareTechnologyOption.TAILWIND,
		SoftwareTechnologyOption.OPENAI,
		SoftwareTechnologyOption.LLAMA,
		SoftwareTechnologyOption.CARTESIA,
		SoftwareTechnologyOption.PINECONE,
		SoftwareTechnologyOption.GROQ,
		SoftwareTechnologyOption.SAMBANOVA,
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
	projectIds: ['dnai-labs-dashboard', 'exact-crane-avoidance'],
};

export const RealtimeChat: Project = {
	title: 'Realtime Chat',
	companyId: 'dnai-labs',
	id: 'dnai-labs-realtime-chat',
	description:
		'Low-latency, end-to-end encrypted real-time chats with digital clones.',
	link: 'https://www.dnai.ai',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE, ProjectTag.STARTUP],
	thumbnailUrl: '/images/projects/dnai/realtime-chat/hero.png',
	page: {
		summary: `DNAi's real-time chat feature allows users to chat with a digital version of their service provider, with remarkably low latency. Making use of the LPU and TPU advancements made possible by Groq and SambaNova, I was able to bring latency down to less than 500ms for natural, flowing conversations. User also enjoy real-time chat summaries and topics, all with end-to-end encryption for added security.`,
		heroImageSrc: '/images/projects/dnai/realtime-chat/hero.png',
		placeholderHeroImageSrc:
			'/images/projects/dnai/realtime-chat/hero-sm.png',
		headerLogoSrc: '/images/projects/dnai/logo.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			softwareTechnologiesSection1,
			youtubeLargeSection1,
			imageLargeSection1,

			featuresSection1,
			otherProjectsSection1,
		],
	},
};
