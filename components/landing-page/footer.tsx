'use client';
import React from 'react';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Link href="/" className="text-2xl font-bold">
							<Label variant="title4">
								Connor
								<span className="text-white/40">
									Holowachuk
								</span>
							</Label>
						</Link>
						<p className="text-gray-400">
							Designing and developing innovative
							solutions for the future.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="hover:text-accent">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#workplaces"
									className="hover:text-accent">
									Workplaces
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="hover:text-accent">
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="mailto:holowachukc@gmail.com"
									className="hover:text-accent">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">
							Contact
						</h3>
						<p className="text-gray-400">
							1708 Columbia St
						</p>
						<p className="text-gray-400">
							Vancouver, BC V5Y 0H7
						</p>
						<Link
							href="mailto:holowachukc@gmail.com"
							className="text-gray-400 hover:text-accent hover:underline">
							holowachukc@gmail.com
						</Link>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">
							Let's Connect
						</h3>
						<div className="flex space-x-4">
							<a
								href="https://www.linkedin.com/in/connor-holowachuk/"
								className="text-gray-500 hover:text-accent">
								<Linkedin size={24} />
							</a>
							<a
								href="https://github.com/connor-holowachuk"
								className="text-gray-500 hover:text-accent">
								<Github size={24} />
							</a>

							<a
								href="https://x.com/TheHolowachuk"
								className=" text-gray-500 hover:text-accent">
								<Twitter size={24} />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-800 text-center sm:flex sm:justify-between">
					<p className="text-gray-400">
						© {new Date().getFullYear()} Connor
						Holowachuk. All rights reserved.
					</p>
					<div className="mt-4 sm:mt-0">
						<a
							href="#"
							className="text-gray-400 hover:text-accent mr-4">
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-accent">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
