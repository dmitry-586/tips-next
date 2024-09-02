import Button from "../button/Button";
import Image from "next/image";
import styles from "../../styles/aboutHeader.module.scss";

export default function AboutHeader() {
  return (
    <div className={styles.about}>
      <div className={styles.about_left}>
        <div className={styles.about_left_top}>
          <div className={styles.about_left_top_image}>
            <Image
              width={936}
              height={0}
              src="/images/about/AboutLine.svg"
              alt="AboutLine"
              style={{
                height: "auto",
                width: "936px",
              }}
            />
          </div>
          <div className={styles.about_left_top_image2}>
            <Image
              width={203}
              height={0}
              src="/images/about/AboutLine2.svg"
              alt="AboutLine"
              style={{
                height: "auto",
                width: "500px",
              }}
            />
          </div>
          <h2>О&nbsp;студии</h2>
        </div>
        <div className={styles.about_left_bottom}>
          <p>
            Наша команда опытных специалистов работает над созданием продающих и
            функциональных веб-решений для различных клиентов
          </p>
          <p className={styles.left_p}>
            Обеспечиваем полную прозрачность на всех этапах работы, чтобы вы
            могли быть уверены в том, что ваш проект находится в надежных руках
          </p>
          <Button className={styles.about_left_bottom_button}>
            Получить бесплатную структуру
          </Button>
        </div>
      </div>
      <p className={styles.about_right}>
        Обеспечиваем полную прозрачность на всех этапах работы, чтобы вы могли
        быть уверены в том, что ваш проект находится в надежных руках
      </p>
    </div>
  );
}
