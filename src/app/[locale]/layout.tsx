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

export const metadataRu: Metadata = {
  title: "Веб-студия TIPS - Создание и продвижение продающих сайтов",
  description:
    "Веб-студия TIPS - это не просто команда разработчиков, а настоящие мастера маркетинга, которые создают сайты, способные продавать всё, что угодно. Мы разрабатываем лендинги, интернет-магазины и корпоративные сайты под ключ, которые не только привлекают внимание, но и эффективно конвертируют посетителей в клиентов.",
  keywords: [
    "сайты для бизнеса",
    "эффективные сайты для продаж",
    "сайты-визитки с продающим контентом",
    "лендинги для увеличения конверсии",
    "интернет-магазины с высокой конверсией",
    "корпоративные сайты для повышения узнаваемости бренда",
    "SEO-оптимизация для роста трафика",
    "контекстная реклама для привлечения клиентов",
    "услуги веб-дизайна для повышения конверсии",
    "разработка сайтов под ключ с маркетинговой стратегией",
    "интернет-маркетинг для увеличения продаж",
    "создание сайтов на заказ с учетом специфики бизнеса",
    "улучшение видимости в поисковых системах для привлечения клиентов",
    "создание мобильных приложений для повышения лояльности",
    "веб-разработка и дизайн для увеличения продаж",
    "создание блогов для привлечения трафика",
    "адаптивный веб-дизайн для удобства пользователей",
    "услуги по продвижению в социальных сетях для повышения узнаваемости",
    "разработка интернет-магазинов с удобным интерфейсом",
    "создание фирменного стиля для повышения узнаваемости бренда",
    "UX/UI дизайн для улучшения пользовательского опыта",
    "техподдержка сайтов для бесперебойной работы",
    "аудит сайтов для выявления точек роста",
    "копирайтинг для создания продающего контента",
    "создание контента для повышения вовлеченности",
    "анализ конкурентов для выявления преимуществ",
    "маркетинговые стратегии для увеличения продаж",
    "оптимизация конверсии для повышения эффективности",
    "создание сайтов на CMS для удобства управления",
    "интеграция с CRM-системами для повышения эффективности работы с клиентами",
    "настройка аналитики для отслеживания эффективности",
  ],
  metadataBase: new URL("https://webstudio-tips.ru"),
  openGraph: {
    title: "Веб-студия TIPS - Создание и продвижение продающих сайтов",
    description:
      "Веб-студия TIPS предлагает услуги по созданию и продвижению сайтов. Мы разрабатываем лендинги, интернет-магазины и корпоративные сайты под ключ. Проводим SEO-оптимизацию и контекстную рекламу.",
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

export const metadataEn: Metadata = {
  title:
    "Web Design Agency TIPS - Creating High-Converting Websites for Business Growth",
  description:
    "Webstudio TIPS is a leading web design agency that specializes in creating effective, sales-driving websites for businesses looking to expand internationally. Our team of marketing-savvy designers and developers work closely with clients to build custom websites tailored to their unique goals and target audiences",
  keywords: [
    "Web design agency that drives sales",
    "Effective website design for business growth",
    "Conversion-focused landing pages",
    "High-converting e-commerce websites",
    "Corporate websites that enhance brand visibility",
    "SEO services for increased organic traffic",
    "Digital marketing strategies for better engagement",
    "Custom website development for lead generation",
    "Responsive web design that sells",
    "User-friendly websites that boost conversions",
    "Marketing-driven web design solutions",
    "Website redesign for improved performance",
    "Branding and web design for business success",
    "Online marketing strategies for higher sales",
    "Web development with a focus on ROI",
    "Websites that effectively communicate brand messages",
    "Tailored web solutions for diverse industries",
    "Lead generation websites for small businesses",
    "Web design that enhances customer loyalty",
    "Performance-driven digital marketing agencies",
    "Websites designed to convert visitors into customers",
    "Innovative web design for modern businesses",
    "Full-service web design and marketing",
    "Strategic web development for international audiences",
    "Websites that integrate seamlessly with marketing tools",
    "Engaging user experiences that drive sales",
    "Website analytics for measuring success",
    "Digital transformation through effective web design",
  ],
  metadataBase: new URL("https://webstudio-tips.ru"),
  openGraph: {
    title: "TIPS Web Studio - Creation and promotion of selling websites",
    description:
      "TIPS Web Studio offers services in website development and promotion. We develop turnkey lendings, online stores and corporate websites. We carry out SEO-optimization and contextual advertising.",
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

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return params.lang === "ru" ? metadataRu : metadataEn;
}

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
