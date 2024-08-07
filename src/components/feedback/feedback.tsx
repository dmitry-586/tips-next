import styles from "../../styles/feedback.module.scss";
import Image from "next/image";
import Button from "../button/Button";

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
                <Image width={40} height={40} src="/images/feedback/feedback1.svg" alt="icon"/>
                <p>+7 996 808 58 18</p>
                <p>info@webstudio-tips.ru</p>
            </div>
        </div>
        <div className={styles.feedback_left_buttons}>
            <button>
                <Image src="/images/feedback/tg.svg" width={28} height={23} alt="tg"/>
                <p>Telegram</p>
            </button>
            <button>
                <Image src="/images/feedback/tg.svg" width={28} height={23} alt="tg"/>
                <p>Telegram</p>
            </button>
            <button>
                <Image src="/images/feedback/tg.svg" width={28} height={23} alt="tg"/>
                <p>Telegram</p>
            </button>
        </div>
      </div>
      <div className={styles.feedback_right}></div>
    </div>
  );
}
