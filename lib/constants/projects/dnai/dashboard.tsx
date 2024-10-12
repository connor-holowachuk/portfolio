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
} from '@/lib/types';

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.NEXTJS,
		SoftwareTechnologyOption.REACT,
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

export const Dashboard: Project = {
	title: 'Dashboard',
	companyId: 'dnai-labs',
	id: 'dnai-labs-dashboard',
	description: 'DNAi',
	link: 'https://www.dnai.ai',
	color: '#FC5F2B',
	tags: [ProjectTag.SOFTWARE],
	thumbnailUrl: '/images/projects/dnai/dashboard/hero.png',
	page: {
		summary:
			'DNAi is a platform that allows researchers to analyze and visualize their data in a more intuitive and interactive way.',
		heroImageSrc: '/images/projects/dnai/dashboard/hero.png',
		placeholderHeroImageSrc:
			'/images/projects/dnai/dashboard/hero-sm.png',
		headerLogoSrc: '/images/projects/dnai/logo.png',
		infoBlurb: '',
		siteUrl: '',
		sections: [
			softwareTechnologiesSection1,
			youtubeLargeSection1,
		],
	},
};
