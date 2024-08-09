import styles from "../../styles/feedback.module.scss";
import Image from "next/image";
import Button from "../button/Button";
import RadioButtons from "./radioButtons";

export default function Feedback() {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedback_left}>
        <h2 className={styles.feedback_left_top}>
          Бесплатная структура для&nbsp;Вашего сайта
        </h2>
        <p className={styles.feedback_left_description}>
          Заполните пожалуйста форму, это поможет нам точно понять в каком
          направлении нам двигаться
        </p>
        <div className={styles.feedback_left_bottom}>
          <p>Или свяжитесь с нами другим способом:</p>
          <div className={styles.feedback_left_bottom_info}>
            <Image
              width={40}
              height={40}
              src="/images/feedback/feedback1.svg"
              alt="icon"
            />
            <a href="tel:+79968085818">+7 996 808 58 18</a>
            <a href="mailto:info@webstudio-tips.ru">info@webstudio-tips.ru</a>
          </div>
        </div>
        <div className={styles.feedback_left_buttons}>
          <button className={styles.tg}>
            <Image
              src="/images/feedback/tg.svg"
              width={28}
              height={23}
              alt="tg"
            />
            <p>Telegram</p>
          </button>
          <button className={styles.vk}>
            <Image
              src="/images/feedback/vk.svg"
              width={30}
              height={18}
              alt="vk"
            />
            <p>Вконтакте</p>
          </button>
          <button className={styles.whatsApp}>
            <Image
              src="/images/feedback/whatsApp.svg"
              width={35}
              height={35}
              alt="whatsApp"
            />
            <p>WhatsApp</p>
          </button>
        </div>
      </div>
      <div className={styles.feedback_right}>
        <div className="flex gap-8 mb-16">
          <div className="flex flex-col w-1/2">
            <p>Как Вас зовут</p>
            <input type="text" placeholder="Имя" />
          </div>
          <div className="flex flex-col w-1/2">
            <p>Телефон/WhatsApp/Telegram</p>
            <input type="number" placeholder="+7 999 999 9999" />
          </div>
        </div>
        <div className={styles.feedback_right_buttons}>
          <p className="mb-4">Меня интересует</p>
          <RadioButtons />
        </div>
        <div className={styles.example}>
          <p>Уже есть проект, на который ориентируетесь/ нравится?</p>
          <input type="text" placeholder="Укажите ссылку (необязательно)" />
        </div>
        <div className={styles.button}>
          <Button children="Оставить заявку" className={styles.btn} />
          <p>Нажав на кнопку, соглашаюсь на обработку персональных данных</p>
        </div>
      </div>
    </div>
  );
}
