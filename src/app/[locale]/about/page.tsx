import AboutHeader from "@/components/aboutHeader/aboutHeader";
import AboutInfo from "@/components/aboutInfo/aboutInfo";
import AboutTeam from "@/components/aboutTeam/aboutTeam";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";
import Info from "@/components/info/info";
import styles from "../../../styles/aboutHeader.module.scss";
import stylesAboutInfo from "../../../styles/aboutInfo.module.scss";
import { GenerateMetadataParams } from "../layout";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataParams) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title2"),
    description: t("description2"),
    keywords: t("keywords2"),
    metadataBase: new URL("https://webstudio-tips.ru"),
    openGraph: {
      title: t("titleOpenGraph2"),
      description: t("descriptionOpenGraph2"),
      url: "https://webstudio-tips.ru",
      images: [
        {
          url: "/images/logo.png",
          width: 128,
          height: 128,
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
