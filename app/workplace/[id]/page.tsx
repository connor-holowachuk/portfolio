import { Metadata } from 'next';

import PageNotFound from '@/components/landing-page/sections/page-not-found';
import AnalyticsHelper from '@/components/landing-page/analytics-helper';

type Props = {
	params: { id: string };
};

import { WorkExperienceData } from '@/lib/constants';

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	// You can use the id to fetch data and generate dynamic metadata
	return {
		title: `Connor Holowachuk | ${params.id}`,
	};
}

export default function WorkplacePage({ params }: Props) {
	const { id } = params;

	const workplace = WorkExperienceData.find(
		(workplace) => workplace.id === id
	);

	return (
		<div className="bg-background relative flex  w-screen flex-col items-center justify-between">
			<AnalyticsHelper
				pageName="Workplace Page"
				pageData={{ id: workplace?.id ?? 'none' }}
			/>
			{workplace?.page?.element ?? <PageNotFound id={id} />}
		</div>
	);
}
