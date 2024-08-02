import Button from "../button/Button";
import styles from "../../styles/main.module.scss";
import Image from "next/image";
import Card from "../card/card";
import Circle from "../circle/circle";

export default function MainPage() {
  return (
    <>
      <div className="flex flex-col text-center items-center bg-my-gradient rounded-[20px] py-[205px]">
        <h1 className="text-[87px] w-[1642px] leading-[102px] bg-transparent">
          Найдем выгодное и продающее решение для каждого
        </h1>
        <p className="text-[32px] w-[643px] pb-16 bg-transparent">
          Обсуждаем задачи, адаптируем бюджет, предлагаем наилучшее решение
        </p>
        <Button
          children="Получить бесплатную структуру"
          className={styles.button}
        />
      </div>
      {/* логотипы */}
      <div className="flex gap-[62px] justify-center mt-7 mb-[18px]">
        <Image
          src="/images/logos/logo1.svg"
          alt="logo1"
          width="0"
          height="0"
          style={{ width: "86px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo2.svg"
          alt="logo2"
          width="0"
          height="0"
          style={{ width: "116px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo3.svg"
          alt="logo3"
          width="0"
          height="0"
          style={{ width: "200px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo4.svg"
          alt="logo4"
          width="0"
          height="0"
          style={{ width: "111px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo5.svg"
          alt="logo5"
          width="0"
          height="0"
          style={{ width: "113px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo6.svg"
          alt="logo6"
          width="0"
          height="0"
          style={{ width: "199px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo7.svg"
          alt="logo7"
          width="0"
          height="0"
          style={{ width: "233px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo8.svg"
          alt="logo8"
          width="0"
          height="0"
          style={{ width: "87px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo9.svg"
          alt="logo9"
          width="0"
          height="0"
          style={{ width: "193px", height: "auto" }}
        />
      </div>
      {/* кнопочки */}
      <div className="flex gap-8 justify-center my-16">
        <Button children="Лендинг" className={styles.button_lending} />
        <Button
          children="Многостраничный"
          className={styles.button_multipage}
        />
        <Button children="Интернет-магазин" className={styles.button_shop} />
        <Button children="Визитка" className={styles.button_card} />
      </div>
      {/* карточки */}
      <div className="relative pb-[215px]">
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
            height={341}
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
        <h3 className={styles.h3}>Стоимость</h3>
        
      </div>
    </>
  );
}
