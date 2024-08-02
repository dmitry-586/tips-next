import Image from "next/image";
import styles from "../../styles/card.module.scss";
import cn from "clsx";

interface CardProps {
  className?: string;
  title: string;
  info: string;
  imageSrc?: string;
  width: number;
  height: number;
  padding: string;
}

const Card: React.FC<CardProps> = ({
  className,
  title,
  info,
  imageSrc,
  width,
  height,
  padding,
}) => {
  return (
    <div
      className={cn(
        styles.card,
        className == undefined ? "bg-my-gradient" : className
      )}
    >
      <div className={`${styles.card_title} ${padding}`}>{title}</div>
      <h2 className={styles.card_info}>{info}</h2>
      <Image
        className={styles.card_image}
        src={`${imageSrc}`}
        alt="cardImage"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Card;
