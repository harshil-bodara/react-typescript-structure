
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from "./layout/Layout";

// scss
import "./assets/scss/main.scss";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={Layout} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

        export default App;
