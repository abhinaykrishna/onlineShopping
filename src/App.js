import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/home/homepage";
import ShopPage from "./components/pages/shop/shop-page";
import Header from "./components/header/header";
import Login from "./components/pages/login/login";

function App() {
  // document.title = "Online Shopping";
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
