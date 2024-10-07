import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./NavItem.scss";

interface NavItemProps {
  name: string;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ link, name }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={`${link}`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : ""
        }
      >
        <Button className="nav-item__button" styling="outlined">
          {name}
        </Button>
      </NavLink>
    </li>
  );
};

export default NavItem;
