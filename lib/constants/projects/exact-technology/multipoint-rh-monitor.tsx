import {
	Project,
	ProjectTag,
	ImageGallerySection,
	ImageGalleryImage,
	ImageLargeSection,
	VideoLargeSection,
	OtherProjectsSection,
	SoftwareTechnologyOption,
	SoftwareTechnologiesSection,
} from '@/lib/types';

const softwareTechnologiesSection1: SoftwareTechnologiesSection = {
	type: 'software-technologies',
	technologyOptions: [
		SoftwareTechnologyOption.REACT,
		SoftwareTechnologyOption.FIREBASE,
		SoftwareTechnologyOption.TAILWIND,
		SoftwareTechnologyOption.IONIC,
		SoftwareTechnologyOption.CAPACITOR,
		SoftwareTechnologyOption.ESP32,
		SoftwareTechnologyOption.CPP,
		SoftwareTechnologyOption.ALTIUM,
		SoftwareTechnologyOption.FUSION,
	],
};

const imageLargeSection1: ImageLargeSection = {
	type: 'image-large',
	src: '/images/projects/exact-technology/multipoint-rh-logger/pcb-1.jpeg',
	alt: 'Concrete Humidity Monitor',
	title: 'Concrete Impedance-Humidity Mapping',
	description:
		'Measuring RH directly in wet concrete at scale posed a reliability challenge; prolonged water exposure often damaged the RH sensors, even when protected by a ePTFE membrane. To improve reliability and reduce cost, I designed an impedance-based mapping system to determine the relationship of impedance to RH in curing concrete.',
};
const imageLargeSection2: ImageLargeSection = {
	type: 'image-large',
	src: '/images/projects/exact-technology/multipoint-rh-logger/boring-1.png',
	alt: 'Concrete Humidity Monitor',
	title: 'Borehole RH Monitoring',
	description:
		'In flooring applications, developers often run into the issue of seemingly dry concrete damaging flooring when residual moisture is present. To address this, I designed a high density PCB and enclosure that fits into a 3/4" borehole to monitor RH in a concrete slab at adjustable depths.',
};
const imageLargeSection3: ImageLargeSection = {
	type: 'image-large',
	src: '/images/projects/exact-technology/multipoint-rh-logger/screens-1.png',
	alt: 'Concrete Humidity Monitor',
	title: 'BLE Connected App',
	description:
		'To provide a user interface for the Concrete Humidity Monitor, I designed a cross-platform React app that connects to the logger via Bluetooth Low Energy (BLE). The app allows for real-time monitoring, historical data analysis, and device configuration, while storing data logs in Firebase for long-term reference.',
};
const imageLargeSection4: ImageLargeSection = {
	type: 'image-large',
	src: '/images/projects/exact-technology/multipoint-rh-logger/lab-1.png',
	alt: 'Concrete Humidity Monitor',
	title: 'Lab-Based Testing',
	description:
		'Alongside PhD researchers and professors at the University of Toronto, I built a custom test fixture for 2mm-resolution impedance and 5mm-resolution RH measurement at multiple depths in a concrete slab.',
};

const videoLargeSection1: VideoLargeSection = {
	type: 'video-large',
	src: 'https://qbizcrwoohmzgibntrca.supabase.co/storage/v1/object/public/personal_site_large_files/projects/exact-technology/rh-monitor/rh-chamber.MOV?t=2024-10-21T16%3A58%3A31.766Z',
	alt: 'Concrete Humidity Monitor',
	title: 'Humidity Chamber',
	description:
		'A humidity chamber was built to test the durability of the RH sensor in a highly humid environment over long periods of time.',
};

const gallerySection1: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Borehole Design',
	description:
		'To accommodate flooring applications, a custom PCB was designed to fit into an enclosure within a 3/4" borehole, with a near-flush hole cover to prevent damage in the harsh construction environment.',
	images: [
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/boring-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Ultra-compact Design',
			caption:
				'Fitting into a 3/4" borehole required a thoughtful design to accomodate the PCB, battery, sensors, and plastic enclosure. Here, a 3D printed and finished prototype is shown.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/boring-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Near-Flush Hole Cover',
			caption:
				'A near-flush hole cover was designed to prevent damage to the sensor when the enclosure is inserted into the borehole. Two notches were included to allow for easy insertion and removal.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/boring-pcb-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'High Density Routing',
			caption:
				'The smallest-ever PCB at EXACT, the board was designed to be as compact as possible while still accomodating all components and preserving connections for bootloading and firmware updates.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/boring-pcb-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'On-board LoRa Antenna',
			caption:
				'A PCB antenna was selected to allow for a compact and reliable connection to a nearby EXACT Relay over LoRa. The antenna was tuned to 915MHz using a spectrum analyzer and smith chart.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/boring-3.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Thoughtful, Compact Design',
			caption:
				'The enclosure was thought through and designed to meet physical constraints while still accomodating the PCB, battery, sensors, and plastic enclosure.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/boring-4.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Designing for Adapability',
			caption:
				'The project called for RH measurement at various depths in a concrete slab. To accomodate this, the enclosure was designed to be modular, with the ability to swap out extensions to measure at different depths.',
		},
	],
};

const gallerySection2: ImageGallerySection = {
	type: 'image-gallery',
	title: 'Multi-Point Impedance Measurement',
	description:
		'Measuring RH directly in wet concrete at scale posed a reliability challenge; prolonged water exposure often damaged the RH sensors, even when protected by a ePTFE membrane. To improve reliability and reduce cost, I designed an impedance-based mapping system to determine the relationship of impedance to RH in curing concrete.',
	images: [
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/pcb-1.jpeg',
			alt: 'Eigen Nodes',
			captionHeader: 'Multi-Point Impedance Measurement',
			caption:
				'Equipped with a 14-bit ADC, analog signal routing ICs, and sinusoidal signal generation, the PCB was capable of quickly and accurately measuring impedance at multiple points in a concrete slab, as well as RH measurement for calibration.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/multipoint-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Interchangeable Measurement PCBs',
			caption:
				'To reduce cost and prevent single use of expensive components required for impedance measurement, the inexpensive measurement module could be swapped out and discarded once curing was complete.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/concrete-test-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Concrete Testing',
			caption:
				'A simple Quickcrete mix was used to validate the accuracy of the RH sensors, and the impedance-based RH mapping system.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/multipoint-design-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Design for Industrial Use',
			caption:
				'Once validated, the impedance-based RH measurement system was ready for industrial use. A new enclosure was designed to mount to the formwork of a concrete slab, or alternatively, be mounted to rebar within a slab before a pour.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/new-design-pcb-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Modular Design',
			caption:
				"I compressed the original multi-point measurement PCB into a PCB 12% the size, which served as an add-on module to EXACT's standard temperature logger. This greatly reduced the cost and assembly time of the system.",
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/new-design-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Enclosure Design',
			caption:
				'Seen here, a 3D printed prototype of the new enclosure houses the standard temperature logger PCB, as well as the new impedance measurement PCBs - connected with a ribbon cable, and easily assembled.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/lab-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Lab-based Testing at U of T',
			caption:
				'A custom test fixture was built to measure impedance at multiple points in a concrete slab, as well as RH measurement for calibration.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/lab-4.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Sensor Guard',
			caption:
				'A custom guard was designed to protect the RH sensors from damage during transport and handling. It was later filled with potting compound to provide additional protection against shorting in wet concrete.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/lab-3.png',
			alt: 'Eigen Nodes',
			captionHeader: 'High-Resolution Impedance Measurement',
			caption:
				'The PCB was capable of quickly and accurately measuring impedance between multiple points in a concrete slab, with a resolution of 2mm.',
		},
	],
};

const gallerySection3: ImageGallerySection = {
	type: 'image-gallery',
	title: 'The App',
	description:
		'The cross-platform React app automatically interfaces with the Concrete Humidity Monitor over BLE, pulls compressed data logs from the device, and allows for plotting RH and Impedance data over time. It served as an easy-to-use interface for the operator to monitor the RH and impedance status of the slab being measured.',
	images: [
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/phone-1.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Re-use Sensors with new Elements',
			caption:
				'Elements are a concept that allows for monitoring a specific location in a concrete slab over a period of time. The measurement module can be removed and replaced with a new sensor to monitor a new location, all of which is stored in the database.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/phone-2.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Plotting RH and Impedance Data',
			caption:
				'The app allows for plotting RH and Impedance data over time, as well as viewing historical data logs. Users can view data for an element, or query for a specific date and time range.',
		},
		{
			src: '/images/projects/exact-technology/multipoint-rh-logger/phone-3.png',
			alt: 'Eigen Nodes',
			captionHeader: 'Auto-connect to Saved Sensors',
			caption:
				'The app allows for auto-connecting to saved sensors, as well as searching for new sensors within range. This was achieved using a custom BLE scanning algorithm that was able to scan for relevant and connectable EXACT devices and connect to them.',
		},
	],
};

const otherProjectsSection: OtherProjectsSection = {
	type: 'other-projects',
	projectIds: [
		'eigen-nodes',
		'exact-temperature-logger',
		'eigen-mobile-app',
	],
};

export const MultipointRHMonitor: Project = {
	title: 'Concrete Humidity Monitor',
	companyId: 'exact-technology',
	id: 'exact-multipoint-rh-monitor',
	description:
		'Multi-point and borehole concrete humidity monitoring.',
	link: 'https://www.exact.com',
	color: '#FC5F2B',
	tags: [
		ProjectTag.HARDWARE,
		ProjectTag.SOFTWARE,
		ProjectTag.FIRMWARE,
	],
	thumbnailUrl:
		'/images/projects/exact-technology/multipoint-rh-logger/thumbnail.png',
	thumbnailBlurUrl:
		'/images/projects/exact-technology/multipoint-rh-logger/thumbnail.png',
	page: {
		summary:
			'Much of the time early site development takes can be attributed to waiting for concrete to cure. Measuring the relative humidity (RH) profile of the concrete can help to predict the curing time and allow for advancement of construction significantly earlier, when the concrete is sufficiently curred. The Concrete Humidity Monitor is a multi-point and borehole RH monitoring system that provides real-time RH data to the operator to help developers save time and money on the buildings of the future.',
		heroImageSrc:
			'/images/projects/exact-technology/multipoint-rh-logger/hero.png',
		placeholderHeroImageSrc:
			'/images/projects/exact-technology/multipoint-rh-logger/hero.png',
		headerLogoSrc:
			'/images/workplaces/exact-technology/role.jpeg',
		infoBlurb: 'Hello',
		siteUrl: 'https://www.exact.com',
		sections: [
			softwareTechnologiesSection1,
			imageLargeSection1,
			imageLargeSection3,
			imageLargeSection4,
			imageLargeSection2,
			videoLargeSection1,
			gallerySection1,
			gallerySection2,
			gallerySection3,
			otherProjectsSection,
		],
	},
};
