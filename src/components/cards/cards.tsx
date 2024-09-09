import Card from "../cards/card/card";
import Circle from "../circle/circle";
import styles from "../../styles/cards.module.scss";
import ButtonComponent from "../button/Button";
import Dropdown from "../info/drop.info";
import { useTranslations } from "next-intl";

export default function Cards() {
  const t = useTranslations("Cards");

  // const [filter, setFilter] = useState("");

  // const handleButtonClick = (filterValue: string) => {
  //   setFilter(filterValue);
  // };

  return (
    <div className="relative" id="portfolio">
      {/* кнопочки */}
      <div className={styles.buttons_wrapper}>
        <ButtonComponent className={styles.cards_button}>
          {t("button1")}
        </ButtonComponent>
        <ButtonComponent className={styles.cards_button}>
          {t("button2")}
        </ButtonComponent>
        <ButtonComponent className={styles.cards_button}>
          {t("button3")}
        </ButtonComponent>
        <ButtonComponent className={styles.cards_button}>
          {t("button4")}
        </ButtonComponent>
      </div>
      {/* карточки */}
      <div className={styles.cards_wrapper}>
        <Card
          title={t("title1")}
          info={t("info1")}
          imageSrc="/images/cards/card1.webp"
          width={554}
          height={337}
          padding="px-[30px]"
          href="https://nkstore.pro/"
        />
        <Card
          className="bg-gradient-card2"
          title={t("title2")}
          info={t("info2")}
          imageSrc="/images/cards/card2.webp"
          width={553}
          height={335}
          padding="px-[40px]"
          href="https://obraz-strah.ru/"
        />
        <Card
          className="bg-gradient-card3"
          title={t("title2")}
          info={t("info3")}
          imageSrc="/images/cards/card3.webp"
          width={544}
          height={335}
          padding="px-[40px]"
          href="https://автониндзя.рф"
        />
        <Card
          className="bg-gradient-card4"
          title={t("title2")}
          info={t("info4")}
          imageSrc="/images/cards/card4.webp"
          width={538}
          height={333}
          padding="px-[40px]"
          href="https://il-gusto58.ru/"
        />
        <Card
          className="bg-gradient-card5"
          title={t("title1")}
          info={t("info5")}
          imageSrc="/images/cards/card5.png"
          width={531}
          height={332}
          padding="px-[40px]"
          href="https://illiadi.com/"
        />
        <Card
          className="bg-gradient-card6"
          title={t("title2")}
          info={t("info6")}
          imageSrc="/images/cards/card6.png"
          width={526}
          height={333}
          padding="px-[40px]"
          href="https://evencoarse.com/"
        />
      </div>

      {/* <Dropdown
        openHeader={styles.openHeader}
        className={styles.dropdown}
        first="Показать еще"
        second="Скрыть"
      >
        <div></div>
      </Dropdown> */}

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
