import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2men.ai — The company behind The Build Bot.",
  description:
    "2men.ai builds AI-native ventures. Tribal knowledge, without the tribal. We turn unreachable data into the substrate companies can build on. The Build Bot is our first venture.",
  keywords:
    "AI ventures, parsing, knowledge graph, AI infrastructure, AWS, enterprise AI, Huntsville AL, The Build Bot",
  openGraph: {
    title: "2men.ai — The company behind The Build Bot.",
    description:
      "Tribal knowledge, without the tribal. We parse, standardize, build on top — then ship the products.",
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
