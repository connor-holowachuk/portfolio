import React from 'react';

// Import utils
import { cn } from '@/lib/utils';

// Define and import types
type InlineTagProps = {
	children: React.ReactNode;
};

const InlineTag = ({ children }: InlineTagProps) => {
	return (
		<span className="text-accent leading-normal font-mono bg-accent/20 rounded-md border border-accent font-light px-3 py-0.5">
			{children}
		</span>
	);
};

export default InlineTag;
