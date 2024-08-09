"use client";

// import Button from "../button/Button";
import styles from "../../styles/feedback.module.scss";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`${className} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default function RadioButtons() {

  return (
    <div className={styles.buttons_wrapper}>
      <Button children="Сайт" className="w-[136px]"/>
      <Button children="Лендинг" className="w-[193px]" />
      <Button children="Интернет-магазин" className="w-[237px]" />
      <Button children="Веб-приложение" className="w-[237px]" />
      <Button children="Другое" className="w-[237px]" />
    </div>
  );
}
