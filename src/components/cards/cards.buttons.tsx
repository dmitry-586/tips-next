"use client";

import React from "react";
import Button from "../button/Button";
import styles from "../../styles/cards.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function CardsButtons() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false }, []);

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
    <div className={styles.buttons_slider}>
      <div className={styles.btns_slider} ref={emblaRef}>
        <div className={styles.btns_slider_container}>
          <div className={styles.btns_slider_wrapper}>
            <Button className={styles.button_slider}>Лендинг</Button>
          </div>
          <div className={styles.btns_slider_wrapper}>
            <Button className={styles.button_slider}>Многостраничный</Button>
          </div>
          <div className={styles.btns_slider_wrapper}>
            <Button className={styles.button_slider}>Интернет-магазин</Button>
          </div>
          <div className={styles.btns_slider_wrapper}>
            <Button className={styles.button_slider}>Визитка  </Button>
          </div>
        </div>
      </div>
      <div className={styles.slider_controls}>
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
