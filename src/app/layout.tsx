import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/header/header";
import Head from "next/head";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcherButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const HelveticaNeueCyr = localFont({
  src: "../../public/fonts/HelveticaNeueCyr-Roman.woff",
});

interface CustomMetadata extends Metadata {
  languages: {
    lang: string;
    title: string;
    description: string;
    keywords: string[];
  }[];
}

export const metadata: CustomMetadata = {
  title: "Webstudio-TIPS",
  description: "webstudio TIPS",
  keywords: ["веб-разработка", "сайты"],
  metadataBase: new URL("https://webstudio-tips.ru"),
  openGraph: {
    title: "Webstudio TIPS - ваш помощник по веб-разработке",
    description: "webstudio TIPS",
    url: "https://webstudio-tips.ru",
    images: [
      {
        url: "/favicon.ico",
        width: 256,
        height: 256,
      },
    ],
  },
  languages: [
    {
      lang: "ru",
      title: "Webstudio-TIPS",
      description: "webstudio TIPS",
      keywords: ["веб-разработка", "сайты"],
    },
    {
      lang: "en",
      title: "Webstudio TIPS",
      description: "Web development tips",
      keywords: ["web development", "websites"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={HelveticaNeueCyr.className}>
        <div className="w-full">
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
