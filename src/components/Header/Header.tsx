import NavList from "../NavList/NavList";
import Hamburger from "../Hamburger/Hamburger";
import CheckvinLogo from "../Icons/CheckvinLogo";
import { NAV_LIST } from "../../config/config";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__mobile-nav-list">
        <div className="header__hamburger">
          <Hamburger />
        </div>
        <div className="header__logo">
          <CheckvinLogo />
        </div>
      </div>
      <div className="header__nav-list">
        <NavList items={NAV_LIST} />
      </div>
    </header>
  );
};

export default Header;
