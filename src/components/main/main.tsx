import Button from "../button/Button";
import styles from "../../styles/main.module.scss";
import Image from "next/image";


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
    </>
  );
}
