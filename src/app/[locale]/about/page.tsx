import AboutHeader from "@/components/aboutHeader/aboutHeader";
import AboutInfo from "@/components/aboutInfo/aboutInfo";
import AboutTeam from "@/components/aboutTeam/aboutTeam";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";
import Info from "@/components/info/info";
import styles from "../../../styles/aboutHeader.module.scss";
import stylesAboutInfo from "../../../styles/aboutInfo.module.scss";

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
