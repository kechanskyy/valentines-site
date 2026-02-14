// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Valentine’s Day, Jaheema ❤️",
  description: "If you ever forget how I feel about you, come back here.",
  openGraph: {
    title: "Happy Valentine’s Day, Jaheema ❤️",
    description: "If you ever forget how I feel about you, come back here.",
    url: "https://jaheema.com",
    siteName: "Jaheema",
    images: [
      {
        url: "https://jaheema.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Valentine’s Day, Jaheema ❤️",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Valentine’s Day, Jaheema ❤️",
    description: "If you ever forget how I feel about you, come back here.",
    images: ["https://jaheema.com/og.jpg"],
  },
};
