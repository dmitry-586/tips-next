import AboutHeader from "@/components/aboutHeader/aboutHeader";
import AboutInfo from "@/components/aboutInfo/aboutInfo";
import AboutTeam from "@/components/aboutTeam/aboutTeam";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";
import Info from "@/components/info/info";
import styles from "../../../styles/aboutHeader.module.scss";
import stylesAboutInfo from "../../../styles/aboutInfo.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О веб-студии TIPS - команда профессионалов",
  description:
    "Узнайте больше о веб-студии TIPS. Мы команда опытных специалистов, которые создают эффективные сайты и помогают бизнесу расти в интернете. Наша миссия - делать интернет-проекты, которыми будут гордиться клиенты.",
  keywords: [
    "О нашей веб-студии",
    "наша миссия: создание сайтов, которые увеличивают продажи",
    "команда профессионалов в веб-дизайне и маркетинге",
    "как мы создаем высококонверсионные сайты",
    "маркетинговые стратегии в веб-дизайне",
    "успешные кейсы нашей веб-студии",
    "почему наши сайты эффективны для бизнеса",
    "инновационные решения для онлайн-продвижения",
    "повышение видимости бренда через веб-дизайн",
    "удобные сайты, которые увеличивают конверсии",
    "отзывы клиентов о нашей работе",
    "наш подход к созданию впечатляющих онлайн-опытов",
    "преданность результативным веб-решениям",
    "наш опыт в электронной коммерции и генерации лидов",
    "создание сильных брендов через эффективный веб-дизайн",
    "совместная работа над успешными проектами",
    "как мы оптимизируем сайты для лучшей производительности",
    "обязательство к удовлетворению клиентов и их успеху",
    "наши ценности: креативность, инновации и измеримые результаты",
    "как наши сайты помогают бизнесу расти",
  ],
  metadataBase: new URL("https://webstudio-tips.ru"),
  openGraph: {
    title: "О веб-студии TIPS - команда профессионалов",
    description:
      "Узнайте больше о веб-студии TIPS. Мы команда опытных специалистов, которые создают эффективные сайты и помогают бизнесу расти в интернете. Наша миссия - делать интернет-проекты, которыми будут гордиться клиенты.",
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
// export const metadataEn: Metadata = {
//   title: "About TIPS Web Design Agency - A Team of Professionals",
//   description:
//     "Find out more about TIPS Web Studio. We are a team of experienced professionals who create effective websites and help businesses grow online. Our mission is to make internet projects that customers will be proud of.",
//   keywords: [
//     "About our web design agency",
//     "Meet our marketing-driven web development team",
//     "Professional web designers for business success",
//     "Our mission: creating websites that sell",
//     "Experienced web developers focused on conversions",
//     "Innovative web solutions for modern businesses",
//     "Dedicated team of digital marketing experts",
//     "How we build high-converting websites",
//     "Our approach to effective web design and marketing",
//     "Why choose us for your web development needs",
//     "Our success stories in web design and marketing",
//     "Passionate about creating user-friendly websites",
//     "Committed to delivering results-driven web solutions",
//     "Our expertise in e-commerce and lead generation",
//     "Building brands through strategic web design",
//     "Our vision for impactful online presence",
//     "Collaborative approach to web development",
//     "Enhancing user experience for better engagement",
//     "Our values: creativity, innovation, and results",
//     "Testimonials from satisfied clients",
//   ],
//   metadataBase: new URL("https://webstudio-tips.ru"),
//   openGraph: {
//     title: "About TIPS web studio - a team of professionals",
//     description:
//       "Find out more about TIPS Web Studio. We are a team of experienced professionals who create effective websites and help businesses grow online. Our mission is to make internet projects that customers will be proud of.",
//     url: "https://webstudio-tips.ru",
//     images: [
//       {
//         url: "/favicon.ico",
//         width: 256,
//         height: 256,
//       },
//     ],
//   },
// };

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <AboutHeader />
        <div className={stylesAboutInfo.info_wrapper}>
          <AboutInfo />
        </div>
        <Info className={styles.info_border} />
        <AboutTeam />
        <div className="px-10 bg-black lg:px-[10px]">
          <Feedback />
          <Footer />
        </div>
      </div>
    </>
  );
}
