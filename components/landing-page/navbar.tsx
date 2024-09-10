'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Import components
import { Label } from '@/components/ui/label';

// Import icons
import { Menu, X } from 'lucide-react';

// Import utils
import { cn } from '@/lib/utils';

type HeaderProps = {};

const Navbar = ({}: HeaderProps) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-background-dnai/20 absolute left-0 top-0 z-50 w-full backdrop-blur-lg">
			<nav
				aria-label="Global"
				className="flex items-center justify-between px-6 py-4 lg:px-8">
				<div className="flex flex-row items-center">
					<Link
						className="w-[120px] cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80"
						href="/">
						<Image
							src="/icon.svg"
							alt="Logo"
							width={54}
							height={54}
						/>
					</Link>
					<div className="hidden gap-10 gap-x-10 md:flex md:flex-row">
						<Link
							href="/"
							className="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80">
							<Label className="text-md cursor-pointer font-sans font-normal text-black/50">
								Product
							</Label>
						</Link>
						<Link
							href="/manifesto"
							className="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80">
							<Label className="text-md cursor-pointer font-sans font-normal text-black/50">
								Manifesto
							</Label>
						</Link>
						<Link
							href="/roadmap"
							className="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80">
							<Label className="text-md cursor-pointer font-sans font-normal text-black/50">
								Roadmap
							</Label>
						</Link>
					</div>
				</div>
				<div className="flex md:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
						<span className="sr-only">Open main menu</span>
						<Menu
							aria-hidden="true"
							className={cn(
								'h-6 w-6',
								mobileMenuOpen
									? 'opacity-0 lg:opacity-100'
									: 'opacity-100'
							)}
						/>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12"></div>
				<div className="hidden items-center md:flex md:flex-1 md:justify-end">
					<Link
						href="/login"
						className="flex cursor-pointer flex-row items-center justify-center px-2 py-2 transition-all duration-200 hover:opacity-80">
						<Label className="text-md cursor-pointer font-sans font-normal text-black/50">
							Sign in
						</Label>
					</Link>
					<div className="mx-4 h-5 w-[1px] bg-black/10"></div>
					<Link
						href="/get-started"
						className="flex cursor-pointer flex-row items-center justify-center rounded-md bg-black px-6 py-2 shadow-none transition-all duration-200 hover:opacity-80 hover:shadow-lg">
						<Label className="text-md cursor-pointer font-sans font-normal text-white">
							Clone yourself
						</Label>
					</Link>
				</div>
			</nav>
			<div
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				className={cn(
					'md:hidden',
					mobileMenuOpen ? 'h-screen w-screen' : 'hidden'
				)}>
				<div className="fixed inset-0 z-50" />
				<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/50 px-6 py-4 backdrop-blur-md sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<Image
								src="/icons/dnai/icon.svg"
								alt="Logo"
								width={54}
								height={54}
							/>
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700">
							<span className="sr-only">Close menu</span>
							<X aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="mt-6 flex flex-col space-y-2 border-t border-black/10 py-6">
								<Link
									href="/"
									className="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80">
									<Label className="cursor-pointer font-sans text-lg font-normal text-black/80">
										Product
									</Label>
								</Link>
								<Link
									href="/manifesto"
									className="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80">
									<Label className="cursor-pointer font-sans text-lg font-normal text-black/80">
										Manifesto
									</Label>
								</Link>
								<Link
									href="/roadmap"
									className="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80">
									<Label className="cursor-pointer font-sans text-lg font-normal text-black/80">
										Roadmap
									</Label>
								</Link>
							</div>
							<div className="gap-4 gap-y-4 py-6">
								<Link
									href="/login"
									className="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80">
									<Label className="cursor-pointer font-sans text-lg font-normal text-black/80">
										Sign in
									</Label>
								</Link>
								<Link
									href="/get-started"
									className="-mx-3 mt-4 block rounded-lg bg-black px-4 py-2.5 text-base font-semibold leading-7 text-white">
									Clone yourself
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
