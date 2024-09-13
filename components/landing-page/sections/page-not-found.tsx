import React from 'react';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

type PageNotFoundProps = {
	id: string;
};

export default function PageNotFound({ id }: PageNotFoundProps) {
	return (
		<div className="w-full h-screen flex flex-col  items-center justify-center">
			<div className="flex flex-col gap-4 text-center w-full max-w-md">
				<Label
					variant="titleXl"
					className="w-full text-center">
					🥸 Uh oh!
				</Label>
				<Label
					variant="default"
					className="mx-auto text-center">
					No page found for{' '}
					<span className="font-mono bg-card px-1 ml-1 py-0.5 border border-border rounded-sm text-xs font-light text-muted-foreground">
						{id}
					</span>
					. <br />
					Are you sure you typed it correctly?
				</Label>
				<Link
					href="/"
					className="w-auto mx-auto flex cursor-pointer flex-row items-center justify-center rounded-xs bg-accent px-6 py-3 shadow-none transition-all duration-200 hover:bg-accent-foreground hover:shadow-lg">
					<Label className="text-sm cursor-pointer font-mono font-normal text-white">
						Back to Home
					</Label>
				</Link>
			</div>
		</div>
	);
}
