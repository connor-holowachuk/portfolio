import {
	SoftwareTechnologyOption,
	SoftwareTechnologyOptionType,
} from '@/lib/types';

export const SoftwareTechnologiesData: SoftwareTechnologyOptionType[] =
	[
		{
			type: SoftwareTechnologyOption.NEXTJS,
			title: 'Next.js',
			iconUrl: '/images/software-technologies/nextjs.png',
			link: 'https://nextjs.org/',
		},
		{
			type: SoftwareTechnologyOption.REACT,
			title: 'React.js',
			iconUrl: '/images/software-technologies/react.png',
			link: 'https://react.dev/',
		},
		{
			type: SoftwareTechnologyOption.TAILWIND,
			title: 'Tailwind CSS',
			iconUrl: '/images/software-technologies/tailwind.png',
			link: 'https://tailwindcss.com/',
		},
		{
			type: SoftwareTechnologyOption.SHADCN,
			title: 'Shadcn',
			iconUrl: '/images/software-technologies/shadcn.png',
			link: 'https://ui.shadcn.com/',
		},
		{
			type: SoftwareTechnologyOption.STRIPE,
			title: 'Stripe',
			iconUrl: '/images/software-technologies/stripe.png',
			link: 'https://stripe.com/',
		},
		{
			type: SoftwareTechnologyOption.OPENAI,
			title: 'OpenAI',
			iconUrl: '/images/software-technologies/openai.png',
			link: 'https://openai.com/',
		},
		{
			type: SoftwareTechnologyOption.GROQ,
			title: 'Groq',
			iconUrl: '/images/software-technologies/groq.png',
			link: 'https://groq.com/',
		},
		{
			type: SoftwareTechnologyOption.CARTESIA,
			title: 'Cartesia',
			iconUrl: '/images/software-technologies/cartesia.png',
			link: 'https://cartesia.ai/',
		},
		{
			type: SoftwareTechnologyOption.DENO,
			title: 'Deno',
			iconUrl: '/images/software-technologies/deno.svg',
			link: 'https://deno.com/',
		},
	];
