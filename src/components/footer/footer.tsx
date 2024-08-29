import Image from "next/image";
import styles from "../../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top_left}>
          <div className={styles.tips_wrapper}>
            <Image
              src="/images/tips.svg"
              width="0"
              height="0"
              alt="tips"
              loading="lazy"
              style={{ width: "185px", height: "auto" }}
            />
          </div>
          <p className={styles.tips_info}>студия разработки продающих сайтов</p>
        </div>
        <div className={styles.footer_top_right}>
          <div className={styles.footer_top_tel}>
            <Image src="/images/tel.svg" alt="tel" width={40} height={40} />
          </div>
          <a className={styles.footer_top_number} href="tel:+79968085818">
            +7 996 808 58 18
          </a>
          <button className={styles.btnTg}>
            <div className="xl:w-[23px]">
              <Image
                src="/images/feedback/tg.svg"
                alt="tg"
                width={28}
                height={23}
              />
            </div>
          </button>
          <button className={styles.btnWhatsApp}>
            <div className="xl:w-[27px]">
              <Image
                src="/images/feedback/whatsApp.svg"
                alt="whatsApp"
                width={35}
                height={35}
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
            </div>
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
