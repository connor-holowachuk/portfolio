import { WorkExperience } from '@/lib/types';

// Import the page components for the workplaces
import ExactTechnologyPage from '@/components/landing-page/workplace-pages/exact-technology';

export const WorkExperienceData: WorkExperience[] = [
	{
		company: 'DNAi Labs',
		id: 'dna-labs',
		role: 'Founder & CEO',
		date: 'May 2024 - Present',
		location: 'Vancouver, BC',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/dnai-dark.png',
		scheme: 'light',
		color: '#94722F',
	},
	{
		company: 'Eigen Fitness',
		id: 'eigen-fitness',
		role: 'Co-founder & CEO',
		date: 'June 2022 - May 2024',
		location: 'Toronto, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/eigen-fitness-light.png',
		scheme: 'dark',
		color: '#7963E0',
	},
	{
		company: 'EXACT Technology',
		id: 'exact-technology',
		role: 'Electrical Engineer',
		date: 'Sept 2019 - June 2022',
		location: 'Toronto, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/exact-light.png',
		scheme: 'dark',
		color: '#FFFFFF',
		page: {
			element: <ExactTechnologyPage />,
			heroImageSrc:
				'/images/workplaces/exact-technology/hero.jpg',
			placeholderHeroImageSrc:
				'/images/workplaces/exact-technology/hero-sm.jpg',
			headerLogoSrc:
				'/images/workplaces/exact-technology/logo-light.png',
			infoBlurb:
				"EXACT is a technology company that creates data driven solutions for concrete construction. Constructors and precasters of all types and sizes use EXACT's hardware and software to build their projects faster, safer and more sustainably.",
			siteUrl: 'https://www.exacttechnology.com/',
		},
	},
	{
		company: 'PaperDoDo',
		id: 'paperdodo',
		role: 'Software Development Intern',
		date: 'Sept 2018 - Dec 2018',
		location: 'Toronto, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/paperdodo-color.png',
		scheme: 'color-blue',
		color: '#FF933E',
	},
	{
		company: 'BlackBerry',
		id: 'blackberry',
		role: 'Software Development Intern',
		date: 'Jan 2018 - Apr 2018',
		location: 'Waterloo, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/blackberry-light.png',
		scheme: 'dark',
		color: '#FFFFFF',
	},
	{
		company: 'WorkRide',
		id: 'workride',
		role: 'Founder & CEO',
		date: 'May 2017 - Sept 2017',
		location: 'Windsor, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/workride-dark.png',
		scheme: 'color-green',
		color: '#DEE902',
	},
	{
		company: 'Eigen Advertisement',
		id: 'eigen-ads',
		role: 'Co-founder & CEO',
		date: 'Aug 2016 - May 2017',
		location: 'Windsor, ON',
		description:
			'Dolor sit aute voluptate magna. Sunt velit culpa sint eu in pariatur duis ex culpa id est. Velit incididunt ad culpa irure nisi consectetur minim dolore amet.',
		image: '/images/workplaces/eigen-ads-color.png',
		scheme: 'light',
		color: '#FF0A0A',
	},
	{
		company: 'Personal',
		id: 'personal',
		role: 'Personal',
		date: '',
		location: '',
		description: '',
		image: '',
		scheme: 'light',
		color: '#FF0A0A',
		hideCard: true,
	},
	{
		company: 'University of Windsor',
		id: 'university',
		role: 'Student',
		date: '',
		location: '',
		description: '',
		image: '',
		scheme: 'light',
		color: '#FF0A0A',
		hideCard: true,
	},
];
