import localFont from "next/font/local";
import styles from "../../styles/price.module.scss";
import { price, price2, price3, priceList } from "./price.data";
import ButtonComponent from "../button/Button";
import PriceList from "./priceList";
import Circle from "../circle/circle";

const ActayWide = localFont({
  src: "../../../public/fonts/ActayWide-Bold.otf",
});

export default function Price() {
  return (
    <div className={styles.price_wrapper}>
      {/* левый блок */}
      <div className={styles.price}>
        <h3 className={styles.h3}>Стоимость</h3>
        {/* буквы на фоне, ОТ НИХ ЗАВИСИТ ШИРИНА БЛОКА, Т.К. ВСЕ ОСТАЛЬНЫЕ ЭЛЕМЕНТЫ pos:absolute */}
        <h3 className={ActayWide.className}>PRICE</h3>
        {/* описание */}
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
          <ButtonComponent className={styles.button}>
            Получить бесплатную структуру
          </ButtonComponent>
        </div>
      </div>
      {/* правый блок */}
      <div className={styles.price_right}>
        {priceList.map((item) => (
          <PriceList
            title={item.title}
            description={item.description}
            price={item.price}
            key={item.id}
          />
        ))}
        <ButtonComponent className={styles.button_right}>
          Получить бесплатную структуру
        </ButtonComponent>
        <Circle
          width="clamp(10.25rem, 8.089rem + 9.35vw, 16.5rem)"
          height="clamp(12.5rem, 10.339rem + 9.35vw, 18.75rem)"
          color="rgba(248, 137, 12, 0.5)"
          blur={75}
          right="clamp(-10rem, -12.593rem + 11.21vw, -2.5rem)"
          bottom="-107px"
          className="xl:hidden"
        />
      </div>
    </div>
  );
}
