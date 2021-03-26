import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/home/homepage";
import ShopPage from "./components/pages/shop/shop-page";

function App() {
  // document.title = "Online Shopping";
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
