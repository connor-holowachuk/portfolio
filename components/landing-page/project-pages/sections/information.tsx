import React from 'react';

// Import components
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DialogBasicImage } from '@/components/ui/dialog-image';

// Import icons
import {} from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

// Define and import types
import { Project, PageSection, InfoSection } from '@/lib/types';
type InformationProps = {
	project: Project;
	section: InfoSection;
};

const Information = async ({
	project,
	section,
}: InformationProps) => {
	return <div className="w-full "></div>;
};

export default Information;
