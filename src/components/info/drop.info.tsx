"use client";

import { useState } from "react";
import styles from "../../styles/info.module.scss";
import ButtonComponent from "../button/Button";
import React from "react";

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const contentRef = React.createRef<HTMLDivElement>();

  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.openHeader : ""}`}>
      <ButtonComponent
        className={styles.dropdown_toggle}
        onClick={handleToggle}
      >
        Показать/скрыть список
      </ButtonComponent>
      <div
        className={`${styles.dropdown_content} ${isOpen ? styles.open : ""}`}
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
