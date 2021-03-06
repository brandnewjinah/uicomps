import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "../Routes";

//layout components
import Wrapper from "../components/layout/Wrapper";
import { Main } from "../components/layout/Container";

//components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

// pages
import Overview from "./Overview";
import Auth from "./Auth";
import Payment from "./Payment";

const Layout = ({ component: Component }) => {
  const [open, setOpen] = useState(false);

  return (
    <Route
      render={(props) => (
        <Wrapper>
          <Sidebar open={open} handleOpen={setOpen} />
          <Main>
            <Navbar handleOpen={setOpen} />
            <Component {...props} />
          </Main>
        </Wrapper>
      )}
    />
  );
};

const Home = () => (
  <Switch>
    <Layout exact path={Routes.Overview.path} component={Overview} />
    <Layout exact path={Routes.Signup.path} component={Auth} />
    <Layout exact path={Routes.Payment.path} component={Payment} />
  </Switch>
);

export default Home;
