import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import Header from './Header';
import axios from 'axios';

function LoginPage(props) {

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [successMessage, setSuccessMessage] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  function loginUser(e){
    e.preventDefault();
    var promise = new Promise(function(resolve, reject){
      axios.get(`https://tyjruu9mzj.execute-api.us-east-1.amazonaws.com/dev/user/${username}/${password}`)
      .then((result)=>{
        setSuccessMessage("User Successfully Logged In");
        localStorage.setItem("username", result.data.username);
        localStorage.setItem("id", result.data.id);
        localStorage.setItem("alle_token", "logged_in-ahdmmdfkgj");
        setTimeout(()=>{props.setIsUserLoggedIn(true);props.history.push("/home")}, 2000);
        resolve(result);
      }).catch((err) => {
        setErrorMessage(err.response.data);
        reject(err);
      });
    })
    return promise;
  }

  return (
    <div className="App">
    <div style={{height: "90vh", margin: "0 auto"}}>
      <Header
        headerDescription = "Login to your account"
        headerSubtext = "Enter your email and password"
      />
      <LoginForm
        username = {username}
        setUsername = {setUsername}
        password = {password}
        setPassword = {setPassword}
        loginUser = {loginUser}
        successMessage = {successMessage}
        errorMessage = {errorMessage}
      />
    </div>
  </div>
  );
}

export default withRouter(LoginPage);
