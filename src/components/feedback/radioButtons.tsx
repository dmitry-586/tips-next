"use client";

import styles from "../../styles/feedback.module.scss";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`${className} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function RadioButtons() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex: number | any) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className={styles.buttons_wrapper}>
      <Button
        className="w-[136px]"
        isActive={activeButton === 0}
        onClick={() => handleButtonClick(0)}
      >
        Сайт
      </Button>
      <Button
        className="w-[193px]"
        isActive={activeButton === 1}
        onClick={() => handleButtonClick(1)}
      >
        Лендинг
      </Button>
      <Button
        className="w-[237px]"
        isActive={activeButton === 2}
        onClick={() => handleButtonClick(2)}
      >
        Интернет-магазин
      </Button>
      <Button
        className="w-[237px]"
        isActive={activeButton === 3}
        onClick={() => handleButtonClick(3)}
      >
        Веб-приложение
      </Button>
      <Button
        className="w-[237px]"
        isActive={activeButton === 4}
        onClick={() => handleButtonClick(4)}
      >
        Другое
      </Button>
    </div>
  );
}
