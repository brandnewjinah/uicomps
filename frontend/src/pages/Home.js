import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "../Routes";

//layout components
import { Main } from "../components/layout/Container";

//components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

// pages
import Overview from "./Overview";
import Signup from "./Signup";

const Layout = ({ component: Component }) => {
  const [open, setOpen] = useState(false);

  return (
    <Route
      render={(props) => (
        <>
          <Sidebar open={open} handleOpen={setOpen} />
          <Main>
            <Navbar handleOpen={setOpen} />
            <Component {...props} />
          </Main>
        </>
      )}
    />
  );
};

const Home = () => (
  <Switch>
    <Layout exact path={Routes.Overview.path} component={Overview} />
    <Layout exact path={Routes.Signup.path} component={Signup} />
  </Switch>
);

export default Home;
