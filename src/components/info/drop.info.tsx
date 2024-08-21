"use client";

import { useState } from "react";
import styles from "../../styles/info.module.scss";

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.openHeader : ""}`}>
      <button className={styles.dropdown_toggle} onClick={handleToggle}>
        Показать/скрыть список
      </button>
      <div
        className={`${styles.dropdown_content} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
        style={{
          opacity: isOpen ? 1 : 0,
          transition: "0.3s",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;