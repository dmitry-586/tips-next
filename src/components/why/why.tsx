import localFont from "next/font/local";
import styles from "../../styles/why.module.scss";
import WhyCard from "./whyCard";
import { why } from "./why.data";
import { it } from "node:test";

const ActayWide = localFont({
  src: "../../../public/fonts/ActayWide-Bold.otf",
});

export default function Why() {
  return (
    <div className={styles.why} id="why">
      <div className="flex bg-transparent">
        <h2 className={styles.h2}>Почему&nbsp;</h2>
        <h2 className={styles.h2_we}>мы?</h2>
      </div>
      <h3 className={ActayWide.className}>WHY</h3>
      <div className={styles.cards_wrapper}>
        {why.map((item) => (
          <WhyCard description={item.description} imageSrc={item.imageSrc} key={item.id}/>
        ))}
      </div>
    </div>
  );
}
