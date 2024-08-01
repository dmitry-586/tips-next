import Image from "next/image";
import styles from "../../styles/card.module.scss"

interface CardProps {
  className?: string;
  title: string;
  info: string;
  imageSrc?: string;
}

const Card: React.FC<CardProps> = ({ className, title, info, imageSrc }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.card_title}>{title}</div>
      <h2 className={styles.card_info}>{info}</h2>
      <Image
        src={`${imageSrc}`}
        alt="cardImage"
        width="0"
        height="0"
        style={{ width: "544px", height: "335px" }}
      />
    </div>
  );
};

export default Card;
