import Circle from "../circle/circle";
import Dropdown from "../info/drop.info";
import { useTranslations } from "next-intl";
import CardsFilter from "./cards.filter";

export default function Cards() {
  const t = useTranslations("Cards");

  const cards = [
    {
      title: t("title1"),
      info: t("info1"),
      id: 1,
      imageSrc: "/images/cards/card1.webp",
      href: "https://nkstore.pro/",
      className: "bg-gradient-card1",
    },
    {
      title: t("title2"),
      info: t("info2"),
      id: 2,
      imageSrc: "/images/cards/card2.webp",
      href: "https://obraz-strah.ru/",
      className: "bg-gradient-card2",
    },
    {
      title: t("title2"),
      info: t("info3"),
      id: 3,
      imageSrc: "/images/cards/card3.webp",
      href: "https://автониндзя.рф",
      className: "bg-gradient-card3",
    },
    {
      title: t("title2"),
      info: t("info4"),
      id: 4,
      imageSrc: "/images/cards/card4.webp",
      href: "https://il-gusto58.ru/",
      className: "bg-gradient-card4",
    },
    {
      title: t("title1"),
      info: t("info5"),
      id: 5,
      imageSrc: "/images/cards/card5.png",
      href: "https://illiadi.com/",
      className: "bg-gradient-card5",
    },
    {
      title: t("title2"),
      info: t("info6"),
      id: 6,
      imageSrc: "/images/cards/card6.png",
      href: "https://evencoarse.com/",
      className: "bg-gradient-card6",
    },
  ];
  const buttons = [
    { text: t("button1"), id: 1 },
    { text: t("button2"), id: 2 },
    { text: t("button3"), id: 3 },
    { text: t("button4"), id: 4 },
    { text: t("button5"), id: 5 }
  ];

  return (
    <div className="relative" id="portfolio">
      <CardsFilter buttons={buttons} cards={cards} />

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
