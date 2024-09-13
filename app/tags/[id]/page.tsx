import { Metadata } from 'next';

import PageNotFound from '@/components/landing-page/sections/page-not-found';
import ProjectCard from '@/components/landing-page/sections/project-card';
import { Label } from '@/components/ui/label';

import { ProjectData } from '@/lib/constants';

type Props = {
	params: { id: string };
};

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	// You can use the id to fetch data and generate dynamic metadata
	return {
		title: `Connor Holowachuk | Tag #${params.id}`,
	};
}

export default function TagPage({ params }: Props) {
	const { id } = params;
	const taggedProjects = ProjectData.filter((p) =>
		p.tags.find(
			(t) => t.toString().toLowerCase() === id.toLowerCase()
		)
	);

	// const project = ProjectData.find((p) =>
	// 	p.tags.find(
	// 		(t) => t.toString().toLowerCase() === id.toLowerCase()
	// 	)
	// );

	return (
		<div className="bg-background relative flex  w-screen flex-col items-center justify-between">
			{taggedProjects.length === 0 ? (
				<PageNotFound id={id} />
			) : (
				<div className="flex flex-col  max-w-7xl mx-auto pt-32">
					<Label
						variant="titleLg"
						className="text-foreground">
						All{' '}
						<span className="text-accent leading-normal font-mono bg-accent/20 rounded-md border border-accent font-light px-3 py-0.5">
							#{id}
						</span>{' '}
						projects.
					</Label>
					<div className="max-w-5xl flex flex-col mx-auto gap-4 py-12">
						{taggedProjects.map((p) => (
							<ProjectCard key={p.id} project={p} />
						))}
					</div>
				</div>
			)}
		</div>
	);
}
