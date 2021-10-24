import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Routes } from "../Routes";

//layout components
import { Side, NavItem } from "../components/layout/Nav";

const Sidebar = ({ open, handleOpen }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  console.log(user);

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
        {user ? (
          <div>welcome, {user.result.name}</div>
        ) : (
          <Nav title="Sign In" link={Routes.Signup.path} />
        )}
        <Nav title="Home" link={Routes.Overview.path} />
        <Nav title="Auth" link={Routes.Signup.path} />
        <Nav title="Payment" link={Routes.Payment.path} />
      </div>
    </Side>
  );
};

export default Sidebar;
