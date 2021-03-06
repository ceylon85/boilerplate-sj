import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../hoc/auth";
// page components
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import ClonePage from './views/ClonePage/YoutubeClone';
import DarkModePage from './views/DarkModePage/DarkMode';


function App() {
  return (
    <Suspense fallback={<div>Page Loading...</div>}>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />

          <Route exact path="/login" component={Auth(LoginPage, false)} />

          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/youtubeClone" component={Auth(ClonePage, false)} />
          <Route exact path="/darkMode" component={Auth(DarkModePage, false)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
