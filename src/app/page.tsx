import MainPage from "@/components/main/main";
import Cards from "@/components/cards/cards";
import Price from "@/components/price/price";
import Why from "@/components/why/why";
import Info from "@/components/info/info";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <MainPage />
      <Cards />
      <Price />
      <Why />
      <Info />
      <Feedback />
      <Footer />
    </>
  );
}
