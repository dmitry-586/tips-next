import ButtonComponent from "../button/Button";
import styles from "../../styles/main.module.scss";
import Image from "next/image";

export default function MainPage() {
  return (
    <>
      <div className={styles.main_wrapper}>
        <h1 className={styles.h1}>
          Найдем выгодное и продающее решение для каждого
        </h1>
        <p className={styles.p}>
          Обсуждаем задачи, адаптируем бюджет, предлагаем наилучшее решение
        </p>
        <ButtonComponent className={styles.button}>
          Получить бесплатную структуру
        </ButtonComponent>
      </div>
      {/* логотипы */}
      <div className="flex gap-[62px] justify-center mt-7 mb-16 overflow-x-auto w-full xxl:justify-start lg:mb-[45px]">
        <Image
          src="/images/logos/logo1.svg"
          alt="logo1"
          width="0"
          height="0"
          style={{ width: "83px", height: "auto" }}
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
    </>
  );
}
