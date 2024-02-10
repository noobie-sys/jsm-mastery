import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'JS Mastery',
  description: 'JS Mastery Resources',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-black-100 min-h-screen" >{children}</body>
    </html>
  );
}
