"use client";

import { useState } from "react";
import styles from "../../styles/info.module.scss";
import ButtonComponent from "../button/Button";
import React from "react";

interface DropdownProps {
  children: React.ReactNode;
  openHeader?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, openHeader, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const contentRef = React.createRef<HTMLDivElement>();

  return (
    <div className={`${styles.dropdown} ${isOpen && openHeader}`}>
      <ButtonComponent
        className={styles.dropdown_toggle}
        onClick={handleToggle}
      >
        {isOpen ? "Скрыть список" : "Показать список"}
      </ButtonComponent>
      <div
        className={`${styles.dropdown_content} ${className} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
        style={{
          opacity: isOpen ? 1 : 0,
          transition: "0.4s",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
