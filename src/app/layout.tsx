import Navbar from '@/components/layouts/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { montserrat } from './font';

export const metadata: Metadata = {
	title: 'BrainDAO - Building a more intelligent future through the IQ token.',
	description:
		'Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.',
	viewport: '',
	openGraph: {
		title:
			'BrainDAO - Building a more intelligent future through the IQ token.',
		url: 'https://braindao.org',
		type: 'website',
		description:
			'Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.',
		images: [
			{
				url: 'https://braindao.org/images/og-image.png',
				alt: 'BrainDAO - Building a more intelligent future through the IQ token.',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'BrainDAO - Building a more intelligent future through the IQ token.',
		description:
			'Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.',
		images: ['https://braindao.org/images/og-image.png'],
		site: '@Everipedia',
		creator: '@Everipedia',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={montserrat.className}>
			<head>
				<link rel='canonical' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<div className='container mx-auto overflow-x-hidden'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
