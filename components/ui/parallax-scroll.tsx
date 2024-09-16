'use client';
import { useScroll, useTransform } from 'framer-motion';
import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Project, WorkExperience } from '@/lib/types';
import { Label } from '@/components/ui/label';
import { WorkExperienceData } from '@/lib/constants';
import Link from 'next/link';
import { InView } from '@/components/ui/in-view';

export const ParallaxScroll = ({
	projects,
	className,
}: {
	projects: Project[];
	className?: string;
}) => {
	const { scrollYProgress } = useScroll({
		offset: ['start start', 'end start'],
	});

	const translateFirst = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -500]
	);
	const translateSecond = useTransform(
		scrollYProgress,
		[0, 1],
		[0, 500]
	);
	const translateThird = useTransform(
		scrollYProgress,
		[0, 1],
		[0, 0]
	);

	const third = Math.ceil(projects.length / 3);

	const firstPart = projects.slice(0, third);
	const secondPart = projects.slice(third, 2 * third);
	const thirdPart = projects.slice(2 * third);

	return (
		<div className={cn(' items-start  w-full', className)}>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-full mx-auto gap-10 py-40 px-10">
				<div className="grid gap-10">
					{firstPart.map((el, idx) => (
						<ProjectCard
							project={el}
							style={translateFirst}
							key={'grid-1' + idx}
						/>
					))}
				</div>
				<div className="grid gap-10">
					{secondPart.map((el, idx) => (
						<ProjectCard
							project={el}
							style={translateSecond}
							key={'grid-2' + idx}
						/>
					))}
				</div>
				<div className="grid gap-10">
					{thirdPart.map((el, idx) => (
						<ProjectCard
							project={el}
							style={translateThird}
							key={'grid-3' + idx}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const ProjectCard = ({
	project,
	style,
}: {
	project: Project;
	style: MotionValue<number>;
}) => {
	const getCompany = () => {
		const company = WorkExperienceData.find(
			(company) => company.id === project.companyId
		);
		return company ?? null;
	};
	const company = getCompany();

	return (
		<motion.div style={{ y: style }}>
			<InView
				variants={{
					hidden: {
						opacity: 0,
						y: 100,
						filter: 'blur(12px)',
					},
					visible: {
						opacity: 1,
						y: 0,
						filter: 'blur(0px)',
					},
				}}
				viewOptions={{ margin: '0px 0px -100px 0px' }}
				transition={{ duration: 0.9, ease: 'easeInOut' }}>
				<div className="h-80 w-full rounded-lg overflow-hidden group cursor-pointer">
					<div className="absolute block lg:hidden top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent group-hover:bg-black/50 transition-all duration-300 group-hover:backdrop-blur-sm z-10"></div>
					<div className="absolute hidden lg:block top-0 left-0 w-full h-full bg-black/5 group-hover:bg-black/50 transition-all duration-300 group-hover:backdrop-blur-sm z-10"></div>
					<Link
						href={`/projects/${project.id}`}
						className="absolute top-0 left-0 z-20 p-6 w-full h-full flex flex-col items-start justify-end opacity-100 lg:opacity-0 lg:blur-lg group-hover:blur-none group-hover:opacity-100 transition-all duration-300">
						<div className="w-full flex flex-col gap-1">
							{company && (
								<Label
									variant="default"
									className="text-white"
									cursor="pointer">
									{company.company}
								</Label>
							)}
							<Label
								variant="title"
								className="text-white w-2/3 leading-[26px]"
								cursor="pointer">
								{project.title}
							</Label>
						</div>
					</Link>
					<Image
						src={project.thumbnailUrl || ''}
						className="group-hover:scale-110 transition-all duration-300 w-full h-full object-cover  gap-10 !m-0 !p-0 relative z-0 rounded-lg"
						height="400"
						width="400"
						alt="thumbnail"
					/>
				</div>
			</InView>
		</motion.div>
	);
};
