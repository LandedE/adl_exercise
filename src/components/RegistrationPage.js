import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Header from './Header';
import axios from 'axios';

function RegistrationPage(props) {

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [username, setUsername] = useState("");
  let [emailAddress, setEmailAddress] = useState("");
  let [password, setPassword] = useState("");
  let [mobilePhone, setMobilePhone] = useState("212345");
  let [successMessage, setSuccessMessage] = useState("");
  let [errorMessage, setErrorMessage] = useState("");


  function registerUser(e){
    e.preventDefault();
    var promise = new Promise(function(resolve, reject){
      axios.post("https://tyjruu9mzj.execute-api.us-east-1.amazonaws.com/dev/user",
      {
        firstName,
        lastName,
        username,
        emailAddress,
        password,
        mobilePhone
      }).then((result)=>{
        console.log("result: ", result);
        setSuccessMessage("User Successfully Created");
        localStorage.setItem("alle_token", "logged_in-ahdmmdfkgj");
        props.setIsUserLoggedIn(true);
        props.history.push("/home");
        resolve(result);
      }).catch((err) => {
        console.log("err: ", err);
        setErrorMessage(err.response.data);
        reject(err);
      });
    });
    return promise;
  }

  return (
    <div className="App">
    <div style={{margin: "0 auto"}}>
      <Header
        headerDescription = "Create your new account"
        headerSubtext = "Enter your info below"
      />
        <RegistrationForm
          firstName = {firstName}
          setFirstName ={setFirstName}
          lastName = {lastName}
          setLastName = {setLastName}
          username = {username}
          setUsername = {setUsername}
          emailAddress = {emailAddress}
          setEmailAddress = {setEmailAddress}
          password = {password}
          setPassword = {setPassword}
          registerUser = {registerUser}
          successMessage = {successMessage}
          errorMessage = {errorMessage}
        />
      </div>
    </div>
  );
}

export default withRouter(RegistrationPage);
