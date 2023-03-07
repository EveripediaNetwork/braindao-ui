"use client";
import Navbar from "@/components/layouts/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto overflow-x-hidden">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
