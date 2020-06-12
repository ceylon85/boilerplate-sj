import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import Auth from "../hoc/auth";

function App() {
  return (
    <Suspense fallback={<div>Page Loading...</div>}>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />

            <Route exact path="/login" component={Auth(LoginPage, false)} />

            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
          </Switch>
        </div>
      </Router>
      <Footer />
    </Suspense>
  );
}

export default App;
