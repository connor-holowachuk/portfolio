import { Project } from '@/lib/types';
import { ProjectsExactTechnology } from './exact-technology';
import { ProjectsEigenFitness } from './eigen-fitness';
import { ProjectsDNAi } from './dnai';
import { ProjectsEigenAds } from './eigen-ads';
import { ProjectsBlackberry } from './blackberry';
import { ProjectsWorkride } from './workride';
import { ProjectsPaperdodo } from './paperdodo';
import { PersonalProjects } from './personal';

export const ProjectData: Project[] = [
	...ProjectsExactTechnology,
	...ProjectsEigenFitness,
	...ProjectsDNAi,
	...ProjectsEigenAds,
	...ProjectsBlackberry,
	...ProjectsWorkride,
	...ProjectsPaperdodo,
	...PersonalProjects,
];
