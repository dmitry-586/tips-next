import AboutHeader from "@/components/aboutHeader/aboutHeader";
import AboutInfo from "@/components/aboutInfo/aboutInfo";
import AboutTeam from "@/components/aboutTeam/aboutTeam";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";
import Info from "@/components/info/info";
import styles from "../../../styles/aboutHeader.module.scss";
import stylesAboutInfo from "../../../styles/aboutInfo.module.scss";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations("Metadata");

  return {
    title: t("title2"),
    description: t("description2"),
    keywords: t("keywords2"),
    metadataBase: new URL(`https://webstudio-tips.ru/${locale}/about`),
    openGraph: {
      title: t("titleOpenGraph2"),
      description: t("descriptionOpenGraph2"),
      url: `https://webstudio-tips.ru/${locale}/about`,
      images: [
        {
          url: "https://www.google.com/imgres?q=1200%20x%20630%20px&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fbackground-social-media-proportions-web-260nw-1035322186.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fru%2Fsearch%2F1200x630&docid=sXfxOgO_qCHq0M&tbnid=9Vwmy2VjegHN9M&vet=12ahUKEwi5mJ7onsiIAxXlGxAIHRleIvYQM3oECBgQAA..i&w=495&h=280&hcb=2&ved=2ahUKEwi5mJ7onsiIAxXlGxAIHRleIvYQM3oECBgQAA",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

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
