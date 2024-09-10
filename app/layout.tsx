import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ModalProvider } from '@/lib/providers/ModalContext';
import { ModalContainer } from '@/components/modals/modal-wrapper';

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
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} h-screen w-screen bg-background antialiased`}>
				<ModalProvider>
					{children}
					<ModalContainer />
				</ModalProvider>
			</body>
		</html>
	);
}
