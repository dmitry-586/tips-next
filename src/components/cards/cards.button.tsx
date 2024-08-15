"use client";

import React from "react";
import Button from "../button/Button";
import styles from "../../styles/cards.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
    <div>
      <div className={styles.slider} ref={emblaRef}>
        <div className={styles.slider_container}>
          <div className={styles.slider_wrapper}>
            <Button children="Лендинг" className={styles.button_slider} />
          </div>
          <div className={styles.slider_wrapper}>
            <Button
              children="Многостраничный"
              className={styles.button_slider}
            />
          </div>
          <div className={styles.slider_wrapper}>
            <Button
              children="Интернет-магазин"
              className={styles.button_slider}
            />
          </div>
          <div className={styles.slider_wrapper}>
            <Button children="Визитка" className={styles.button_slider} />
          </div>
        </div>
      </div>
      <div className={styles.slider_controls}>
        <Button onClick={handlePrev} className={styles.button_prev}>
          Prev
        </Button>
        <Button onClick={handleNext} className={styles.button_next}>
          Next
        </Button>
      </div>
    </div>
  );
}
