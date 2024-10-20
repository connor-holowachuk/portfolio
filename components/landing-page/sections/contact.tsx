import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { InView } from '@/components/ui/in-view';
import {
	Section,
	Column,
} from '@/components/landing-page/sections/section-wrapper';
import Link from 'next/link';

import { Cog } from 'lucide-react';

const Contact = async () => {
	return (
		<Section fullWidth borderBottom>
			<Column width={3} className="col-span-3 py-32 lg:py-64 ">
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
					transition={{
						duration: 0.9,
						ease: 'easeInOut',
					}}>
					<div className="w-full flex flex-col items-center justify-center gap-6">
						<div className="relative z-10 w-36 h-36 flex items-center justify-center rounded-full overflow-hidden p-2 bg-[#2F2C31] border border-[#3E3A40]">
							<video
								src="/videos/memoji-1.mov"
								autoPlay
								loop
								muted
								playsInline
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col items-center gap-4 px-4">
							<Label
								variant="titleLg"
								className="text-center">
								Let's build something cool together!
							</Label>
							<Label
								variant="title3"
								color="muted"
								className="text-center font-normal">
								Email me at{' '}
								<Link
									href="mailto:connor@holowachuk.com"
									className="text-white hover:text-accent hover:underline">
									connor@holowachuk.com
								</Link>{' '}
								and let's build the future together!
							</Label>
							<Link
								href="mailto:holowachukc@gmail.com"
								className="mt-4 flex cursor-pointer flex-row items-center justify-center rounded-xs bg-accent px-6 py-3 shadow-none transition-all duration-200 hover:bg-accent-foreground hover:shadow-lg">
								<Label className=" text-sm cursor-pointer font-mono font-normal text-white">
									Let's chat
								</Label>
							</Link>
						</div>
					</div>
				</InView>
			</Column>
		</Section>
	);
};

export default Contact;
