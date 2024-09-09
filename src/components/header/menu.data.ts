import { useTranslations } from "next-intl";

const MenuProvider = () => {
  const t = useTranslations("NavMenu");

  const getMenu = () => {
    return [
      {
        name: t("home"),
        link: "/",
        id: 1,
      },
      {
        name: t("portfolio"),
        link: "/#portfolio",
        id: 2,
      },
      {
        name: t("aboutStudio"),
        link: "/about",
        id: 3,
      },
      {
        name: t("contacts"),
        link: "/#feedback",
        id: 4,
      },
    ];
  };

  return getMenu();
};
export default MenuProvider;
