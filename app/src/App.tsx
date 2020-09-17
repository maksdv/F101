import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Header } from "./components/Layout/Header";
import { AddArticle } from "./Pages/AddArticle";

type NavigationProps = {};

const App: React.FC<NavigationProps> = () => {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
      <Header />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/add-article" exact component={AddArticle} />
        <Redirect from="/" to="/home" exact />
      </Switch>
    </Router>
  );
};

export default () => <App />;
