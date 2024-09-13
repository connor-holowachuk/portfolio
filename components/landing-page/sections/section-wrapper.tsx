'use client';
import React from 'react';

// Import utils
import { cn } from '@/lib/utils';

type ColumnWidth = 1 | 2 | 3;

type ColumnProps = {
	children: React.ReactNode;
	width: ColumnWidth;
	className?: string;
	borderLeft?: boolean;
	borderRight?: boolean;
};

const Column: React.FC<ColumnProps> = ({
	children,
	width,
	className,
	borderLeft,
	borderRight,
}) => {
	const colSpan = `col-span-${width}`;
	return (
		<div
			className={cn(
				colSpan,
				className,
				borderLeft && 'border-l',
				borderRight && 'border-r',
				(borderLeft || borderRight) &&
					'border-border border-dashed'
			)}>
			{children}
		</div>
	);
};

type SectionProps = {
	children: React.ReactNode;
	className?: string;
	outerClassName?: string;
	fullWidth?: boolean;
	borderBottom?: boolean;
	noCols?: boolean;
	id?: string;
};

export const Section: React.FC<SectionProps> = ({
	children,
	className,
	outerClassName,
	fullWidth,
	borderBottom,
	noCols,
	id,
}) => {
	return (
		<div
			className={cn(
				'flex flex-row',
				outerClassName,
				fullWidth ? 'w-full px-0' : 'w-full',
				borderBottom && 'border-b border-border border-dashed'
			)}
			id={id}>
			<div className="flex w-full flex-row ">
				<div
					className={cn(
						'mx-auto w-full  ',
						className,
						noCols
							? 'w-full'
							: 'grid grid-cols-1 lg:grid-cols-3',
						fullWidth
							? 'w-full px-0'
							: 'max-w-screen-xl lg:px-8'
					)}>
					{children}
				</div>
			</div>
		</div>
	);
};

// Export both Section and Column components
export { Column };
