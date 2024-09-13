'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
	placeholderSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
	src,
	alt,
	width,
	height,
	className,
	placeholderSrc,
}) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className={cn('relative w-full h-full', className)}>
			{placeholderSrc && isLoading && (
				<Image
					src={placeholderSrc}
					alt={alt}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
					priority
				/>
			)}
			<Image
				src={src}
				alt={alt}
				fill
				sizes=" 100vw"
				onLoadingComplete={() => setIsLoading(false)}
				className={cn(
					'object-cover transition-opacity duration-300 ease-in-out',
					isLoading ? 'opacity-0' : 'opacity-100'
				)}
				priority
			/>
		</div>
	);
};
