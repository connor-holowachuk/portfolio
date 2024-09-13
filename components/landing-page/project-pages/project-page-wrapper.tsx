import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Import actions

// Import providers

// Define and import types
type ProjectPageWrapperProps = {
	header: React.ReactNode;
	children: React.ReactNode;
};

const ProjectPageWrapper = async ({
	header,
	children,
}: ProjectPageWrapperProps) => {
	return (
		<div className="w-full ">
			{header}
			{children}
		</div>
	);
};

export default ProjectPageWrapper;
