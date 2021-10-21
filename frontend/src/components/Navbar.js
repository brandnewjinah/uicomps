import React from "react";

//layout components
import { Nav } from "../components/layout/Nav";

const Navbar = ({ handleOpen }) => {
  const handleMenuBtnClick = () => {
    handleOpen((prev) => !prev);
  };

  return (
    <Nav>
      <button onClick={handleMenuBtnClick}>menu</button>
    </Nav>
  );
};

export default Navbar;
