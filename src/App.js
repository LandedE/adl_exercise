import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import RegistrationForm from './components/RegistrationForm';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import LogoutPage from "./components/LogoutPage";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  let [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem("alle_token"));
  console.log("change again");
  return (
    <Router>
      <NavBar
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <div id="main" style={{minHeight: "100vh", margin: "0 auto"}}>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegistrationPage
              setIsUserLoggedIn={setIsUserLoggedIn}
            />
          </Route>
          <Route path="/login">
            <LoginPage
              setIsUserLoggedIn={setIsUserLoggedIn}
            />
          </Route>
          <Route path="/logout">
            <LogoutPage
              setIsUserLoggedIn={setIsUserLoggedIn}
            />
          </Route>
          <Route path="/">
            <Header
              headerDescription={"All\u0113 Home"}
              headerSubtext="This is the homepage"
            />
            <div
              className={isUserLoggedIn ? "hidden" : ""}
              style={{width: "50%", margin: "0 auto"}}
            >
              <Link to="/login">
                <Button className="create-account-active" variant="primary" type="button">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="create-account-active" variant="primary" type="button">
                  Create account
                </Button>
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
