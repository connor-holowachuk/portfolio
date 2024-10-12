import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	OtherProjectsSection,
} from '@/lib/types';

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	alt: 'Loggers',
	src: '/images/projects/exact-technology/temperature-logger/loggers.png',
};
const imageLargeSection2: ImageLargeSection = {
	type: 'image-large',
	alt: 'Field Test',
	src: '/images/projects/exact-technology/temperature-logger/field-test.png',
};
const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Enclosure Design',
	description:
		'I was responsible for a custom enclosure design for the Temperature Logger. Prototyping was achieved using an FDM 3D printer, with models designed in Fusion 360. The enclosure was designed to be rugged and portable, with a custom PCB holder and a durable exterior.Fusion 360 was used to create the final models, which were then provided to our injection molding vendor for production. The final product was molded from PA66-30GF; a glass-filled nylon for maximum durability.',
	images: [
		{
			src: '/images/projects/exact-technology/temperature-logger/plastics-prototype-3.png',
			alt: 'First 3D Printed Prototype',
			captionHeader: 'First 3D Printed Prototype',
			caption:
				'The first prototype was 3D printed in ABS and tested to verify fit with the PCB and existing supply of temperature probe ports.',
		},
		{
			src: '/images/projects/exact-technology/temperature-logger/plastics-prototype-2.png',
			alt: 'Simulating Threaded Molding',
			captionHeader: 'Simulating Threaded Molding',
			caption:
				'Limited by 3D printing capabilities, metal nuts were used to simulate threading of the final mold to test the IP rating of the body/lid fit.',
		},
		{
			src: '/images/projects/exact-technology/temperature-logger/plastics-prototype-1.png',
			alt: 'Final 3D Printed Prototype',
			captionHeader: 'Final 3D Printed Prototype',
			caption:
				'The final prototype was 3D printed, sanded, painted and field tested to ensure ruggedness, and that size constraints and fit were met.',
		},
		{
			src: '/images/projects/exact-technology/temperature-logger/plastics-1.png',
			alt: 'Injection Mold Run 1',
			captionHeader: 'Injection Mold Run 1 (Top)',
			caption:
				'The body of the first injection mold run, made from PA66-30GF, was completed to verify the design and ensure fit with the PCB.',
		},
		{
			src: '/images/projects/exact-technology/temperature-logger/plastics-2.png',
			alt: 'Injection Mold Run 1 bottom',
			captionHeader: 'Injection Mold Run 1 (Bottom)',
			caption:
				'The bottom of the first injection mold run, also made from PA66-30GF, was completed to verify structural integrity and ruggedness.',
		},
		{
			src: '/images/projects/exact-technology/temperature-logger/plastics-3.png',
			alt: 'Final Injection Mold Run',
			captionHeader: 'Final Injection Mold Run',
			caption:
				'The final injection mold run was completed to verify the strcutural design, silkscreen placement, and ensure fit with the PCB.',
		},
	],
};
const gallerySection2: ImageGallerySection = {
	type: 'image-gallery',
	title: 'PCB Update',
	description:
		'The original PCB design was large, low density, and poorly designed for manufacturing. I was tasked with updating the design to be more compact, with a lower BOM cost and improved manufacturability, and with the requirement of fitting a smaller, less expensive enclosure for permanent installation.',
	images: [
		{
			src: '/images/projects/exact-technology/temperature-logger/original-pcb-1.png',
			alt: 'Original PCB',
			captionHeader: 'Original PCB',
			caption:
				'The original PCB design was large, low density, and poorly designed for manufacturing. The antenna position also lead to poor signal strength.',
		},
		{
			src: '/images/projects/exact-technology/temperature-logger/updated-pcb-3.png',
			alt: 'Updated PCB',
			captionHeader: 'Updated PCB',
			caption:
				'Smaller, higher density, and designed with lower BOM cost and better signal strength, the updated PCB was designed to be manufactured at lower cost.',
		},
		{
			src: '/images/projects/exact-technology/temperature-logger/updated-pcb-1.png',
			alt: 'Prototyping Updated PCB',
			captionHeader: 'Prototyping Updated PCB',
			caption:
				'Hand-soldering SMT components with bypass wires was used to verify functionality and test new features for the updated design.',
		},
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'eigen-nodes',
		'blackberry-hr-monitor',
		'exact-pcb-antenna-tuning',
	],
};

export const TemperatureLogger: Project = {
	title: 'Temperature Logger',
	companyId: 'exact-technology',
	id: 'exact-temperature-logger',
	description: 'Exact',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.FIRMWARE,
		ProjectTag.PCBA,
		ProjectTag.PLASTIC_INJECTION,
	],
	thumbnailBlurUrl:
		'https://exacttechnology.com/wp-content/uploads/2023/12/site-logger.png',
	thumbnailUrl:
		'https://exacttechnology.com/wp-content/uploads/2023/12/site-logger.png',
	page: {
		summary:
			'As an exothermic reaction, the rate and duration of concrete curing is easily calculated by measuring internal temperature. Before EXACT, however, that was achieved by running wires across the site, which was expensive, dangerous, and time consuming. The Temperature Logger is a rugged and portable device that is able to log and share data with a central dashboard via a cellular LoRa networked Node.',
		heroImageSrc:
			'https://exacttechnology.com/wp-content/uploads/2023/12/site-logger.png',
		placeholderHeroImageSrc:
			'https://exacttechnology.com/wp-content/uploads/2023/12/site-logger.png',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
		sections: [
			imageLargeSection1,
			gallerySection1,
			gallerySection2,
			imageLargeSection2,
			otherProjectsSection,
		],
	},
};
