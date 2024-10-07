import { NavLink } from "react-router-dom";
import CheckvinLogo from "../Icons/CheckvinLogo";
import NavItem from "../NavItem/NavItem";
import { NavItem as INavItem } from "../../types";
import { Fragment } from "react/jsx-runtime";
import "./NavList.scss";

interface NavListProps {
  items: INavItem[];
}

const NavList: React.FC<NavListProps> = ({ items }) => {
  const mid = Math.floor(items.length / 2);

  return (
    <nav className="nav-list">
      <ul className="nav-list__container">
        {items.map((item, i) => {
          return (
            <Fragment key={i}>
              {i === mid && (
                <NavLink to="/" className="nav-item nav-list__item nav-item--logo">
                  <CheckvinLogo />
                </NavLink>
              )}
              <NavItem link={item.link} name={item.name} />
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
