"use client";

import styles from "../../styles/burger-menu.module.scss";
import { useState } from "react";
import Link from "next/link";
import { menu } from "./menu.data";
import { usePathname } from "next/navigation";
import cn from "clsx";
import ButtonComponent from "../button/Button";

export default function BurgerMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  const burgerTrue: string = [styles.burger_menu, styles.open].join(" ");
  const burgerFalse: string = [styles.burger_menu].join(" ");

  return (
    <>
      <button
        className={
          menuActive ? [styles.wrapper, styles.open].join(" ") : styles.wrapper
        }
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={menuActive ? burgerTrue : burgerFalse}>
        {menu.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={cn(
              "cursor-pointer bg-black text-[#AFAFAF] hover:border-orange-700 hover:text-white",
              pathname === item.link
                ? "text-white border-b-2 border-orange-700"
                : "text-[#AFAFAF]"
            )}
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href={"#feedback"}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <ButtonComponent className={styles.header_button}>
            Связаться с нами
          </ButtonComponent>
        </Link>
      </div>
    </>
  );
}
