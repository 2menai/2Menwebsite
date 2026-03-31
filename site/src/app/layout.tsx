import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2men.ai — AI Solutions That Work",
  description:
    "We build and deploy enterprise AI platforms that turn complex data into actionable intelligence. Purpose-built solutions, deployed in days, running in your environment.",
  keywords:
    "enterprise AI, AI platform, AI solutions, data intelligence, AI deployment, custom AI, AI consulting",
  openGraph: {
    title: "2men.ai — AI Solutions That Work",
    description:
      "We build and deploy enterprise AI platforms that turn complex data into actionable intelligence.",
    url: "https://2men.ai",
    siteName: "2men.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-white antialiased">{children}</body>
    </html>
  );
}
