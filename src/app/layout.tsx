import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.scss";

const HelveticaNeueCyr = localFont({ src: '../../public/fonts/HelveticaNeueCyr-Roman.woff' })
const Akony = localFont({ src: '../../public/fonts/AKONY.woff2'})

export const metadata: Metadata = {
  title: "TIPS",
  description: "webstudio TIPS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={HelveticaNeueCyr.className}>{children}</body>
    </html>
  );
}
