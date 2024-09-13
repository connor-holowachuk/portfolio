import { Metadata } from 'next';

import PageNotFound from '@/components/landing-page/sections/page-not-found';

import { ProjectData } from '@/lib/constants';

type Props = {
	params: { id: string };
};

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	// You can use the id to fetch data and generate dynamic metadata
	return {
		title: `Connor Holowachuk | Project ${params.id}`,
	};
}

export default function ProjectPage({ params }: Props) {
	const { id } = params;

	const project = ProjectData.find((p) => p.id === id);

	return (
		<div className="bg-background relative flex  w-screen flex-col items-center justify-between">
			{project?.page?.element ?? <PageNotFound id={id} />}
		</div>
	);
}
