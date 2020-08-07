import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import LoginRegister from "./pages/login-register/login-register";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginRegister} />
      </Switch>
    </div>
  );
}

export default App;
