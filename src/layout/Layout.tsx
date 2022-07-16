import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Routes from "../layout/Routes";

// types
import { ROUTE } from "../types/main";

const Layout: React.FC = () => {

  const getRoutes = (routes:ROUTE[]) => {
    return routes.map((prop:ROUTE, key:number) => {
      if (prop.layout === "/") {
        return <Route exact path={prop.path} component={prop.component} key={key} />;
      }
      else {
        return null;
      }
    });
  };

  return (
    <div>
      <Header />
      <div>
        <Switch>{getRoutes(Routes)}</Switch>
      </div>
      <Footer />
    </div>
  );
}

export default Layout