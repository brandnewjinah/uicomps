import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../Routes";

//layout components
import { Side, NavItem } from "../components/layout/Nav";

const Sidebar = ({ open, handleOpen }) => {
  const handleMenuBtnClick = () => {
    handleOpen((prev) => !prev);
  };

  const Nav = (props) => {
    const { title, link, external } = props;
    const links = external ? { href: link } : { as: Link, to: link };

    return (
      <NavItem>
        <Link {...links}>
          <span onClick={() => handleOpen(false)}>{title}</span>
        </Link>
      </NavItem>
    );
  };

  return (
    <Side open={open}>
      <button onClick={handleMenuBtnClick}>close</button>
      <div className="nav">
        <Nav title="Home" link={Routes.Overview.path} />
        <Nav title="Signup" link={Routes.Signup.path} />
      </div>
    </Side>
  );
};

export default Sidebar;
