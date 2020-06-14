import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../hoc/auth";
// page components
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import Reset from './views/LoginPage/Reset';

function App() {
  return (
    <Suspense fallback={<div>Page Loading...</div>}>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />

          <Route exact path="/login" component={Auth(LoginPage, false)} />

          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/reset/:token" component={Auth(Reset, false)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
