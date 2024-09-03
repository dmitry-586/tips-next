import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/header/header";
import Head from "next/head";

const HelveticaNeueCyr = localFont({
  src: "../../public/fonts/HelveticaNeueCyr-Roman.woff",
});

export const metadata: Metadata = {
  title: "Webstudio TIPS - ваш помощник по веб-разработке",
  description: "webstudio TIPS",
  keywords: ["веб-разработка", "сайты"],
  openGraph: {
    title: "Webstudio TIPS - ваш помощник по веб-разработке",
    description: "webstudio TIPS",
    url: "https://webstudio-tips.ru",
    images: [
      {
        url: "/public/images/profile.png",
        width: 500,
        height: 500,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <title>Webstudio TIPS</title>
        <meta name="description" content={"webstudio TIPS"} />
        <meta name="keywords" content={"веб-разработка, сайты"} />
      </Head>
      <body className={HelveticaNeueCyr.className}>
        <div className="w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
