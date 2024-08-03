import localFont from "next/font/local";
import styles from "../../styles/price.module.scss";
import { price, price2, price3, priceList } from "./price.data";
import Button from "../button/Button";
import PriceList from "./priceList";

const ActayWide = localFont({
  src: "../../../public/fonts/ActayWide-Bold.otf",
});

export default function Price() {
  return (
    <div className="flex justify-between gap-8">
      <div className={styles.price}>
        <h3 className={ActayWide.className}>PRICE</h3>
        <div className={styles.info}>
          <p>В зависимости от целей и сложности проекта</p>
          <p className={styles.p}>HTML/CSS + JS, NextJS или АСПРО:</p>
          <ul>
            {price.map((item) => (
              <li className={styles.li} key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
          <p className={styles.p}>CMS ( WordPress )</p>
          <ul>
            {price2.map((item) => (
              <li className={styles.li} key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
          <p className={styles.p}>Tilda</p>
          <ul>
            {price3.map((item) => (
              <li className={styles.li} key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
          <Button
            children="Получить бесплатную структуру"
            className={styles.button}
          />
        </div>
      </div>
      <div>
        {priceList.map((item) => (
          <PriceList
            title={item.title}
            description={item.description}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
