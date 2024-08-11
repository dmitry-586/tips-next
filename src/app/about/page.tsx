import AboutHeader from "@/components/aboutHeader/aboutHeader";
import AboutInfo from "@/components/aboutInfo/aboutInfo";
import AboutTeam from "@/components/aboutTeam/aboutTeam";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";
import Info from "@/components/info/info";

export default function Home() {
  return (
    <div className="bg-white">
      <AboutHeader />
      <div className="bg-white px-10 py-16">
        <AboutInfo />
      </div>
      <Info className="pt-16 px-10 rounded-t-[100px]" />
      <AboutTeam />
      <div className="px-10">
        <Feedback />
        <Footer />
      </div>
    </div>
  );
}
