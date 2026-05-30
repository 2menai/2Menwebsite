import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2men.ai — The shortcut to private, enterprise AI",
  description:
    "Private, enterprise AI that cuts past the hype. Consulting and The Build Bot — built and run by senior operators in Huntsville, AL.",
  openGraph: {
    title: "2men.ai — The shortcut to private, enterprise AI",
    description:
      "Private, enterprise AI that cuts past the hype. Consulting and The Build Bot — built and run by senior operators in Huntsville, AL.",
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
      <body className="grain">{children}</body>
    </html>
  );
}
