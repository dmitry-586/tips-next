import Image from "next/image";
import styles from "../../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top_left}>
          <Image
            src="/images/tips.svg"
            width="0"
            height="0"
            alt="tips"
            loading="lazy"
            style={{ width: "185px", height: "auto" }}
          />
          <p className="text-base w-2/5 leading-4">
            студия разработки продающих сайтов
          </p>
        </div>
        <div className={styles.footer_top_right}>
          <Image src="/images/tel.svg" alt="tel" width={40} height={40} />
          <p className="text-[32px]">+7 996 808 58 18</p>
          <button>
            <Image
              src="/images/feedback/tg.svg"
              alt="tg"
              width={28}
              height={23}
            />
          </button>
          <button>
            <Image
              src="/images/feedback/whatsApp.svg"
              alt="whatsApp"
              width={28}
              height={23}
            />
          </button>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>ИП Трушенков Егор Алексеевич</p>
        <p>ИНН: 583680182669</p>
        <p>ОГРНИП: 324580000027704</p>
        <p className="border-b">Политика конфиденциальности</p>
      </div>
    </div>
  );
}
