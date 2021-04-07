import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../layout/Home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
