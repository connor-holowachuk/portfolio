import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogClose,
	DialogImage,
	DialogContainer,
} from '@/components/ui/dialog';
import { XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
type DialogImageProps = {
	src: string;
	alt: string;
	className?: string;
};

export function DialogBasicImage({
	src,
	alt,
	className,
}: DialogImageProps) {
	return (
		<Dialog
			transition={{
				duration: 0.3,
				ease: 'easeInOut',
			}}>
			<DialogTrigger>
				<DialogImage
					src={src}
					alt={alt}
					className={cn(
						'max-w-xs rounded-[4px]',
						className
					)}
				/>
			</DialogTrigger>
			<DialogContainer>
				<DialogContent className="relative">
					<DialogImage
						src={src}
						alt={alt}
						className="h-auto w-full max-w-[90vw] rounded-xs object-cover lg:h-[90vh]  transition-all duration-200 ease-in-out hover:scale-110"
					/>
				</DialogContent>
				<DialogClose
					className="fixed right-6 top-6 h-fit w-fit rounded-full bg-primary p-1"
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: { delay: 0.3, duration: 0.1 },
						},
						exit: {
							opacity: 0,
							transition: { duration: 0 },
						},
					}}>
					<XIcon className="h-5 w-5 text-zinc-500" />
				</DialogClose>
			</DialogContainer>
		</Dialog>
	);
}
