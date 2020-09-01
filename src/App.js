import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import "./Typography.scss";
import Header from "./component/Header";
import Main from "./component/Main";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  );
};

export default App;
