import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2men.ai — An AI Venture Company",
  description:
    "We build, launch, and operate AI ventures. Real infrastructure. Real expertise. We've seen this before.",
  keywords:
    "AI ventures, AI company, AI infrastructure, AWS, enterprise AI, AI consulting, Huntsville AL",
  openGraph: {
    title: "2men.ai — An AI Venture Company",
    description:
      "We build, launch, and operate AI ventures. Real infrastructure. Real expertise.",
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
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
