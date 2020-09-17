import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./Pages/Home";


type NavigationProps = {};

const App: React.FC<NavigationProps> = () => {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Redirect from="/" to="/home" exact />
      </Switch>
    </Router>
  );
};

export default () => (
    <App />
);