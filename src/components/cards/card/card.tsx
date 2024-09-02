import Image from "next/image";
import styles from "../../../styles/cards.module.scss";
import cn from "clsx";
import Link from "next/link";

interface CardProps {
  className?: string;
  title: string;
  info: string;
  imageSrc?: string;
  width: number;
  height: number;
  padding: string;
  href: string;
}

const Card: React.FC<CardProps> = ({
  className,
  title,
  info,
  imageSrc,
  width,
  height,
  padding,
  href,
}) => {
  return (
    <Link href={href}>
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
          priority
        />
      </div>
    </Link>
  );
};

export default Card;
