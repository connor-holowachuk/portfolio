import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

// Import components
import Navbar from '@/components/landing-page/navbar';
import HeroSection from '@/components/landing-page/sections/hero';
import DemoSection from '@/components/landing-page/sections/demo-section';
import SectionOne from '@/components/landing-page/sections/section-1';
import UseCasesSection from '@/components/landing-page/sections/usecases-section';
import SavingsSection from '@/components/landing-page/sections/savings-section';
import SummariesSection from '@/components/landing-page/sections/summaries-section';
import FeaturesSection from '@/components/landing-page/sections/features-section';
import Footer from '@/components/landing-page/footer';

type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};

export const metadata: Metadata = {
	title: 'DNAi',
	description: 'The assistant that thinks like you.',
};

export default function Home({ searchParams }: SearchParamProps) {
	return (
		<main className="bg-background-dnai flex h-screen w-screen flex-col items-center justify-between overflow-hidden">
			<Navbar />
			<div className="flex w-full max-w-full flex-col overflow-auto">
				<HeroSection />
				<DemoSection />
				<SectionOne />
				<UseCasesSection />
				<SummariesSection />
				<div className="block w-full lg:hidden">
					<Image
						src={'/images/hero/tablet-summary-sm.png'}
						alt="Picture of the author"
						layout="responsive"
						width={500}
						height={500}
						objectFit="contain"
						className="object-contain"
					/>
				</div>
				<SavingsSection />
				<FeaturesSection />
				{Array.from(new Array(5)).map((_, index) => (
					<div
						key={`a-${index}`}
						className="min-h-[40px] w-full bg-black"
						style={{ opacity: (index + 1) / 6 }}
					/>
				))}
				<Footer />
			</div>
		</main>
	);
}
