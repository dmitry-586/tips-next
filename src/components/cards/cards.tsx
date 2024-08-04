import Card from "../cards/card/card";
import Circle from "../circle/circle";
import styles from "../../styles/cards.module.scss";

export default function Cards() {
  return (
    <div className="relative pb-[215px]">
      {/* карточки */}
      <div className="flex flex-row flex-wrap gap-5">
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
      <Circle
        width="585px"
        height="585px"
        color="linear-gradient(90deg, #FAFF00 0%, #FF0000 100%)"
        right="-233px"
        bottom="266px"
        blur={250}
      />
      <Circle
        width="300px"
        height="264px"
        color="rgba(248, 137, 12, 0.5)"
        left="-181px"
        bottom="0"
        blur={75}
        zIndex={0}
      />
      {/* следующий блок */}
      <h3 className={styles.h3}>Стоимость</h3>
    </div>
  );
}
