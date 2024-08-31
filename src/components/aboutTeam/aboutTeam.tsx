import Image from "next/image";
import styles from "../../styles/aboutTeam.module.scss";

export default function AboutTeam() {
  return (
    <div className={styles.about_team_wrapper}>
      <div className={styles.about_team}>
        <h3>Команда</h3>
        <p>
          Мы являемся поставщиком качественных, выгодных и продающих решений. В
          нашей команде есть опытные копирайтеры, дизайнеры, разработчики и
          маркетологи, SEO-специалисты.
        </p>
        <p>
          Мы дорожим своей репутацией и обеспечиваем полную прозрачность на всех
          этапах работы, чтобы вы могли быть уверены в том, что ваш проект
          находится в надежных руках.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/about/aboutTeam.webp"
          alt="aboutTeam"
          width={1071}
          height={343}
        />
      </div>
    </div>
  );
}
