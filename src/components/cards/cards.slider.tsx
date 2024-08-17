"use client";

import React from "react";
import Button from "../button/Button";
import styles from "../../styles/cards.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Card from "./card/card";

export default function CardsSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const handleNext = () => {
    if (embla) {
      embla.scrollNext();
    }
  };

  const handlePrev = () => {
    if (embla) {
      embla.scrollPrev();
    }
  };

  return (
    <div className={styles.cards_slider}>
      <div className={styles.slider} ref={emblaRef}>
        <div className={styles.slider_container}>
          <div className={styles.slider_wrapper}>
            <Card
              title="Интернет-магазин"
              info="Cайт для магазина брендовой одежды"
              imageSrc="/images/cards/card1.webp"
              width={554}
              height={337}
              padding="px-[30px]"
            />
          </div>
          <div className={styles.slider_wrapper}>
            <Card
              className="bg-gradient-card2"
              title="Многостраничный сайт"
              info="Сайт для компании хоррор-квестов"
              imageSrc="/images/cards/card2.webp"
              width={553}
              height={335}
              padding="px-[40px]"
            />
          </div>
          <div className={styles.slider_wrapper}>
            <Card
              className="bg-gradient-card3"
              title="Многостраничный сайт"
              info="Разработка сайта для пригона авто"
              imageSrc="/images/cards/card3.webp"
              width={544}
              height={335}
              padding="px-[40px]"
            />
          </div>
          <div className={styles.slider_wrapper}>
            <Card
              className="bg-gradient-card4"
              title="Многостраничный сайт"
              info="Сайт итальянской траттории"
              imageSrc="/images/cards/card4.webp"
              width={538}
              height={333}
              padding="px-[40px]"
            />
          </div>
        </div>
      </div>
      <div className={styles.slider_cards_controls}>
        <Image
          src="/images/cards/arrowLeft.png"
          alt="icon"
          width={50}
          height={50}
          onClick={handlePrev}
        />
        <Image
          src="/images/cards/arrowRight.png"
          alt="icon"
          width={50}
          height={50}
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
