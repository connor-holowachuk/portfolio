import React, { useRef, useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Section } from '@/components/landing-page/sections/section-wrapper';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/components/ui/tabs';

import { Cpu, MemoryStick, CodeXml, Frame } from 'lucide-react';

type TechnologiesProps = {};

const PageOptions: { title: string; icon: React.ReactNode }[] = [
	{ title: 'Hardware', icon: <Cpu size={16} color="#ffffff" /> },
	{
		title: 'Firmware',
		icon: <MemoryStick size={16} color="#ffffff" />,
	},
	{
		title: 'Software',
		icon: <CodeXml size={16} color="#ffffff" />,
	},
	{ title: 'Design', icon: <Frame size={16} color="#ffffff" /> },
];

const Technologies: React.FC<TechnologiesProps> = async () => {
	return (
		<Section borderBottom noCols>
			<div className="w-full flex flex-col gap-16 py-24 px-8">
				<div className="w-full  grid grid-cols-2">
					<div className="">
						<Label variant="titleXl">Technologies</Label>
					</div>
					<div className="">
						<Label variant="body" color="muted">
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Quisquam, quos. Lorem
							ipsum dolor sit amet consectetur
							adipisicing elit. Quisquam, quos.
						</Label>
					</div>
				</div>
				<div className="w-full bg-card rounded-xs">
					<Tabs defaultValue="account">
						<TabsList className="flex flex-row gap-2 items-center justify-start bg-transparent px-6 py-12">
							{PageOptions.map((option, index) => (
								<TabsTrigger
									key={index}
									value={option.title}
									className="flex flex-row gap-2 items-center color-white/50 justify-start data-[state=active]:bg-accent data-[state=inactive]:opacity-50 data-[state=inactive]:hover:opacity-100 w-auto rounded-xs hover:bg-accent-foreground">
									{option.icon}
									<Label
										variant="button"
										cursor="pointer">
										{option.title}
									</Label>
								</TabsTrigger>
							))}
						</TabsList>
						<TabsContent value="Hardware">
							<div className="w-full border-t border-white grid grid-cols-3 py-12"></div>
						</TabsContent>
						<TabsContent value="Firmware">
							<div className="w-full border-t border-white grid grid-cols-3 py-12"></div>
						</TabsContent>
						<TabsContent value="Software">
							<div className="w-full border-t border-white grid grid-cols-3 py-12"></div>
						</TabsContent>
						<TabsContent value="Design">
							<div className="w-full border-t border-white grid grid-cols-3 py-12"></div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</Section>
	);
};

export default Technologies;

const TabSection = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => {
	return (
		<TabsContent
			value={title}
			className="w-full border-t border-white grid grid-cols-3">
			<div className="flex flex-col gap-4 items-center justify-center col-span-1">
				<Label variant="title4" color="white">
					{title}
				</Label>
			</div>
			<div className="col-span-2 py-12 px-12">{children}</div>
		</TabsContent>
	);
};
