import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Map - AI Roadmap Generator | Learn AI Step-by-Step",
  description:
    "Generate AI-based coding roadmaps for developers. Get step-by-step guidance to master AI development with Code Map.",
  keywords:
    "AI roadmap, developer guide, coding roadmap, learn AI, programming guide, machine learning, deep learning, Next.js, React",
  openGraph: {
    title: "Code Map - AI Roadmap Generator",
    description:
      "Generate AI-based coding roadmaps for developers. Get step-by-step guidance to master AI development with Code Map.",
    url: "https://yourwebsite.com",
    siteName: "Code Map AI",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Map AI - Best AI Roadmap Generator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Code Map - AI Roadmap Generator",
    description:
      "Generate AI-based coding roadmaps for developers. Step-by-step guidance for AI mastery.",
    images: ["https://yourwebsite.com/images/twitter-card.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="canonical" href="https://yourwebsite.com" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
