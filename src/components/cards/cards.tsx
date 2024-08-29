import Card from "../cards/card/card";
import Circle from "../circle/circle";
import styles from "../../styles/cards.module.scss";
import ButtonComponent from "../button/Button";
import CardsButtons from "./cards.buttons";
import CardsSlider from "./cards.slider";

export default function Cards() {
  return (
    <div className="relative pb-16" id="portfolio">
      {/* кнопочки */}
      <CardsButtons />

      <div className={styles.buttons_wrapper}>
        <ButtonComponent className={styles.button_lending}>
          Лендинг
        </ButtonComponent>
        <ButtonComponent className={styles.button_multipage}>
          Многостраничный
        </ButtonComponent>
        <ButtonComponent className={styles.button_shop}>
          Интернет-магазин
        </ButtonComponent>
        <ButtonComponent className={styles.button_card}>
          Визитка
        </ButtonComponent>
      </div>
      {/* карточки */}
      <CardsSlider />
      <div className={styles.cards_wrapper}>
        <Card
          title="Интернет-магазин"
          info="Cайт для магазина брендовой одежды"
          imageSrc="/images/cards/card1.webp"
          width={554}
          height={337}
          padding="px-[30px]"
        />
        <Card
          className="bg-gradient-card2"
          title="Многостраничный сайт"
          info="Сайт для компании хоррор-квестов"
          imageSrc="/images/cards/card2.webp"
          width={553}
          height={335}
          padding="px-[40px]"
        />
        <Card
          className="bg-gradient-card3"
          title="Многостраничный сайт"
          info="Разработка сайта для пригона авто"
          imageSrc="/images/cards/card3.webp"
          width={544}
          height={335}
          padding="px-[40px]"
        />
        <Card
          className="bg-gradient-card4"
          title="Многостраничный сайт"
          info="Сайт итальянской траттории"
          imageSrc="/images/cards/card4.webp"
          width={538}
          height={333}
          padding="px-[40px]"
        />
      </div>
      {/* кругляши */}
      <div className="absolute w-full h-[1500px] overflow-hidden right-[-40px] top-0 lg:hidden">
        <Circle
          width="585px"
          height="585px"
          color="linear-gradient(90deg, #FAFF00 0%, #FF0000 100%)"
          right="-273px"
          bottom="500px"
          blur={250}
        />
      </div>
      <Circle
        width="300px"
        height="264px"
        color="rgba(248, 137, 12, 0.5)"
        left="-181px"
        bottom="-215PX"
        blur={75}
        zIndex={0}
      />
    </div>
  );
}
