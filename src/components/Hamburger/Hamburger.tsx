import { useEffect, useState } from "react";
import NavList from "../NavList/NavList";
import { NAV_LIST } from "../../config/config";
import { useLocation } from "react-router-dom";
import "./Hamburger.scss";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="hamburger-menu">
      <button
        className="hamburger-menu__button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
      >
        <div
          className={`hamburger-menu__icon ${
            isOpen ? "hamburger-menu__icon--open" : ""
          }`}
        >
          <span className="hamburger-menu__icon-line"></span>
          <span className="hamburger-menu__icon-line"></span>
          <span className="hamburger-menu__icon-line"></span>
        </div>
      </button>

      <div
        className={`hamburger-menu__overlay ${
          isOpen ? "hamburger-menu__overlay--visible" : ""
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`hamburger-menu__panel ${
          isOpen ? "hamburger-menu__panel--open" : ""
        }`}
      >
        <NavList items={NAV_LIST} />
      </div>
    </div>
  );
};
export default Hamburger;
