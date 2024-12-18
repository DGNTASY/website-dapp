import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/components/Footer';

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
	title: 'SolFootball',
	description: 'Generated by create next app',
	icons: '/solfootball-black.svg',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
			>
				<Providers>
					<div className="flex flex-col min-h-screen max-w-screen  text-black font-sans">
						<Header />
						{children}
						<Footer />
					</div>
				</Providers>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
