import { WorkExperience } from '@/lib/types';

// Import the page components for the workplaces
import ExactTechnologyPage from '@/components/landing-page/workplace-pages/exact-technology';
import EigenFitnessPage from '@/components/landing-page/workplace-pages/eigen-fitness';
import DNAiLabsPage from '@/components/landing-page/workplace-pages/dnai-labs';
import EigenAdsPage from '@/components/landing-page/workplace-pages/eigen-ads';
import PaperdodoPage from '@/components/landing-page/workplace-pages/paperdodo';
import BlackberryPage from '@/components/landing-page/workplace-pages/blackberry';
import WorkRidePage from '@/components/landing-page/workplace-pages/workride';
export const WorkExperienceData: WorkExperience[] = [
	{
		company: 'DNAi Labs',
		id: 'dnai-labs',
		role: 'Founder & CEO',
		date: 'May 2024 - Present',
		location: 'Vancouver, BC',
		description:
			'DNAi is a venture addressing the global shortage of professionals service providers. Professionals digitally clone their voice, persona, knowledge, and visual identity to suppliment in-person interactions and provide on-demand, unlimited access to their services to their quickly growing customer base. They review condensed summaries of client interactions and provide recommendations for next steps to their clients.',
		image: '/images/workplaces/dnai-dark.png',
		scheme: 'light',
		color: '#94722F',
		types: ['software', 'design'],
		page: {
			element: <DNAiLabsPage />,
			siteUrl: 'https://www.getdnai.com/',
			heroImageSrc:
				'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			placeholderHeroImageSrc:
				'/images/workplaces/dnai-labs/hero-sm.jpg',
			headerLogoSrc: '/images/workplaces/2.png',
			infoBlurb:
				'DNAi is a venture addressing the global shortage of professionals service providers. Professionals digitally clone their voice, persona, knowledge, and visual identity to suppliment in-person interactions and provide on-demand, unlimited access to their services to their quickly growing customer base. They review condensed summaries of client interactions and provide recommendations for next steps to their clients.',
		},
	},
	{
		company: 'Eigen Fitness',
		id: 'eigen-fitness',
		role: 'Co-founder & CEO',
		date: 'June 2022 - May 2024',
		location: 'Toronto, ON',
		description:
			'Eigen Fitness is a startup offering personal trainers a deeper way to connect with their remote clients. Our proprietary hardware and software allows trainers to monitor lifting form on every rep, track progress over time, and provide personalized feedback to help their clients achieve their fitness goals.',
		image: '/images/workplaces/eigen-fitness-light.png',
		scheme: 'dark',
		color: '#7963E0',
		types: ['hardware', 'software', 'design'],
		page: {
			element: <EigenFitnessPage />,
			heroImageSrc:
				'/images/workplaces/eigen-fitness/hero3.jpg',
			placeholderHeroImageSrc:
				'/images/workplaces/exact-technology/hero-sm.jpg',
			headerLogoSrc: '/images/workplaces/1.png',
			infoBlurb:
				'Eigen Fitness is a startup offering personal trainers a deeper way to connect with their remote clients. Our proprietary hardware and software allows trainers to monitor lifting form on every rep, track progress over time, and provide personalized feedback to help their clients achieve their fitness goals.',
			siteUrl: 'https://www.exacttechnology.com/',
			projectsDescription:
				'Over the course of 2 years, I oversaw hardware, firmware, and software developent on our entire product suite, as well as business operations.',
		},
	},
	{
		company: 'EXACT Technology',
		id: 'exact-technology',
		role: 'Electrical Engineer',
		date: 'Sept 2019 - June 2022',
		location: 'Toronto, ON',
		description:
			'EXACT is a technology company that creates data driven solutions for concrete construction. Constructors and precasters of all types and sizes use our hardware and software to build their projects faster, safer and more sustainably.',
		image: '/images/workplaces/exact-light.png',
		scheme: 'dark',
		color: '#FFFFFF',
		types: ['hardware', 'software', 'design'],
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
			'PaperDoDo is a startup addressing the slow, paper-based, and aniquated process of fleet management for delivery and service vehicles. They provide a platform for fleet managers to monitor their vehicles and drivers, and for dispatchers to assign jobs to drivers, ultimately with the goal of automating the entire dispatching process.',
		image: '/images/workplaces/paperdodo-color.png',
		scheme: 'color-blue',
		color: '#FF933E',
		types: ['software', 'design'],
		page: {
			element: <PaperdodoPage />,
			heroImageSrc:
				'https://images.unsplash.com/photo-1587813369290-091c9d432daf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			placeholderHeroImageSrc:
				'https://images.unsplash.com/photo-1587813369290-091c9d432daf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			headerLogoSrc: '/images/workplaces/4.png',
			infoBlurb:
				'PaperDoDo is a startup addressing the slow, paper-based, and aniquated process of fleet management for delivery and service vehicles. They provide a platform for fleet managers to monitor their vehicles and drivers, and for dispatchers to assign jobs to drivers, ultimately with the goal of automating the entire dispatching process.',
			siteUrl: 'https://www.paperdodo.com/',
		},
	},
	{
		company: 'BlackBerry',
		id: 'blackberry',
		role: 'Software Development Intern',
		date: 'Jan 2018 - Apr 2018',
		location: 'Waterloo, ON',
		description:
			'Blackberry is a technology company that offers secure, end-to-end encrypted messaging and calling services. After exiting the smartphone market, they have pivoted to an enterprise-focused company providing secure communication channels through their BBM platform.',
		image: '/images/workplaces/blackberry-light.png',
		scheme: 'dark',
		color: '#FFFFFF',
		types: ['hardware', 'software', 'design'],
		page: {
			element: <BlackberryPage />,
			heroImageSrc: '/images/workplaces/blackberry/hero.jpg',
			placeholderHeroImageSrc:
				'/images/workplaces/blackberry/hero.jpg',
			headerLogoSrc: '/images/workplaces/blackberry-light.png',
			infoBlurb:
				'Blackberry is a technology company that offers secure, end-to-end encrypted messaging and calling services. After exiting the smartphone market, they have pivoted to an enterprise-focused company providing secure communication channels through their BBM platform.',
			siteUrl: 'https://www.blackberry.com/',
		},
	},
	{
		company: 'WorkRide',
		id: 'workride',
		role: 'Founder & CEO',
		date: 'May 2017 - Sept 2017',
		location: 'Windsor, ON',
		description:
			'WorkRide is a startup addressing the inefficiencies of ride sharing services to work. We provide a platform for commuters to find rides to work, and for drivers to offer rides to work. The platform also allows users to track the location of their rides, and for drivers to receive tips from their passengers.',
		image: '/images/workplaces/workride-dark.png',
		scheme: 'color-green',
		color: '#DEE902',
		types: ['software', 'design'],
		page: {
			element: <WorkRidePage />,
			heroImageSrc:
				'https://images.unsplash.com/photo-1537211790624-e6f568af4b13?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			placeholderHeroImageSrc:
				'https://images.unsplash.com/photo-1537211790624-e6f568af4b13?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			headerLogoSrc: '/images/workplaces/6.png',
			infoBlurb:
				'WorkRide is a startup addressing the inefficiencies of ride sharing services to work. We provide a platform for commuters to find rides to work, and for drivers to offer rides to work. The platform also allows users to track the location of their rides, and for drivers to receive tips from their passengers.',
			siteUrl: 'https://www.workride.ca/',
		},
	},
	{
		company: 'Eigen Advertisement',
		id: 'eigen-ads',
		role: 'Co-founder & CEO',
		date: 'Aug 2016 - May 2017',
		location: 'Windsor, ON',
		description:
			'Eigen Advertisement is a startup that provided local businesses with a platform to advertise their products and services to the surrounding community with on-vehicle advertising. Businesses would be matched with commuters that frequent their target marketing locations, and commuters would recieve monthly payouts for their driving time.',
		image: '/images/workplaces/eigen-ads-color.png',
		scheme: 'light',
		color: '#FF0A0A',
		types: ['software', 'design'],
		page: {
			element: <EigenAdsPage />,
			heroImageSrc: '/images/workplaces/eigen-ads/hero2.jpg',
			placeholderHeroImageSrc:
				'/images/workplaces/eigen-ads/hero-sm.jpg',
			headerLogoSrc: '/images/workplaces/5.png',
			infoBlurb:
				'Eigen Advertisement is a startup that provided local businesses with a platform to advertise their products and services to the surrounding community with on-vehicle advertising. Businesses would be matched with commuters that frequent their target marketing locations, and commuters would recieve monthly payouts for their driving time.',
			siteUrl: '',
		},
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
