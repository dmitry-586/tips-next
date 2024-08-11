import AboutHeader from "@/components/aboutHeader/aboutHeader";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";
import Info from "@/components/info/info";

export default function Home() {
  return (
    <div className="bg-white">
      <AboutHeader />
      <div className="h-16 bg-white"></div>
      <Info className="pt-16 px-10 rounded-t-[100px]" />
      <div className="px-10">
        <Feedback />
        <Footer />
      </div>
    </div>
  );
}
