import React from "react";
import { Link, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.componet";

const HatsPage = () => {
  return <div>Hats</div>;
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
