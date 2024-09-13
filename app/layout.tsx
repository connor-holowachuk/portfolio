import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ModalProvider } from '@/lib/providers/ModalContext';
import { ModalContainer } from '@/components/modals/modal-wrapper';

import Navbar from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

import '@fontsource/azeret-mono'; // Defaults to weight 400
import '@fontsource/azeret-mono/500.css'; // Specify weight
import '@fontsource/azeret-mono/400.css'; // Specify weight
import '@fontsource/azeret-mono/300.css'; // Specify weight
import '@fontsource/azeret-mono/200.css'; // Specify weight
import '@fontsource/azeret-mono/100.css'; // Specify weight

export const metadata: Metadata = {
	title: 'DNAi',
	description: 'The assistant that thinks like you.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="h-screen w-screen relative overflow-auto">
			<body
				className={`${geistSans.variable} ${geistMono.variable}  w-screen bg-background antialiased`}>
				<ModalProvider>
					<ModalContainer />
					<Navbar />
					{children}

					<Footer />
				</ModalProvider>
			</body>
		</html>
	);
}
