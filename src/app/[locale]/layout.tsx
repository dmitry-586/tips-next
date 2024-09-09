import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.scss";

const HelveticaNeueCyr = localFont({
  src: "../../../public/fonts/HelveticaNeueCyr-Roman.woff",
});

export const metadata: Metadata = {
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
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={HelveticaNeueCyr.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="w-full lg:pt-[70px]">
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
