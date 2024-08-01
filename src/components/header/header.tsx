"use client";

import Link from "next/link";
import BurgerMenu from "./burger.menu";
import styles from "../../styles/header.module.scss";
import localFont from "next/font/local";
import Image from "next/image";
import Button from "../button/Button";
import cn from "clsx";
import { menu } from "./menu.data";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Akony = localFont({ src: "../../../public/fonts/AKONY.woff2" });

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  const burgerTrue: string = [styles.burger_menu, styles.open].join(" ");
  const burgerFalse: string = [styles.burger_menu].join(" ");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_left}>
          <Image
            src="/images/tips.svg"
            width="0"
            height="0"
            alt="tips"
            loading="lazy"
            style={{ width: "185px", height: "auto" }}
          />
          <p className="text-base w-1/2 leading-4">
            веб-студия разработки продающих сайтов
          </p>
        </div>
        <div className={styles.header_right}>
          <nav>
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
          </nav>
          <Button children="Связаться с нами" className={styles.header_button}/>
        </div>
        <BurgerMenu />
      </header>
    </>
  );
}
