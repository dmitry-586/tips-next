import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const HelveticaNeueCyr = localFont({
  src: "../../public/fonts/HelveticaNeueCyr-Roman.woff",
});

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
      <body className={HelveticaNeueCyr.className}>
        <div className="w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
