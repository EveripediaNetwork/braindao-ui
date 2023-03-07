"use client";
import Navbar from "@/components/layouts/Navbar";
import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrainDAO - Building a more intelligent future through the IQ token.',
  description: 'Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.',
  openGraph:{
    title: "BrainDAO - Building a more intelligent future through the IQ token.",
    url: "https://braindao.org",
    type: "website",
    description: "Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.",
    images: [
      {
        url: "https://braindao.org/images/og-image.png"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "braindao.org",
    url: "https://braindao.org",
    title: "BrainDAO - Building a more intelligent future through the IQ token.",
    description: "Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.",
    images:{
      url: "https://braindao.org/images/og-image.png"
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel='canonical'/>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' type='image/svg+xml' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
        rel='stylesheet'
      />
      </head>
      <body>
        <div className="container mx-auto overflow-x-hidden">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
