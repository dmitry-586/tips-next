"use client";

import styles from "../../styles/burger-menu.module.scss";
import { useState } from "react";
import Link from "next/link";
import { menu } from "./menu.data";
import { usePathname } from "next/navigation";
import cn from "clsx";

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
              "cursor-pointer hover:bg-my-gradient bg-clip-text text-transparent",
              pathname === item.link
                ? "bg-my-gradient bg-clip-text text-transparent"
                : "bg-white"
            )}
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
