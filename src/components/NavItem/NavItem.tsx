import { NavLink } from "react-router-dom";
import "./NavItem.scss";
import Button from "../Button/Button";

interface NavItemProps {
  name: string;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ link, name }) => {
  return (
    <NavLink
      to={`${link}`}
      className={({ isActive, isPending }) =>
        isPending
          ? "nav-item pending"
          : isActive
          ? "nav-item active"
          : "nav-item"
      }
    >
      <Button className="nav-item__button" styling="outlined">
        {name}
      </Button>
    </NavLink>
  );
};

export default NavItem;
