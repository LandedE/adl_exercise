import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function RegistrationForm(props) {

  // let [firstName, setFirstName] = useState("");
  // let [lastName, setLastName] = useState("");
  // let [username, setUsername] = useState("");
  // let [emailAddress, setEmailAddress] = useState("");
  // let [password, setPassword] = useState("");
  // let [mobilePhone, setMobilePhone] = useState("");

  function areFieldsEmpty(){
    return props.firstName === "" || props.lastName === "" || props.username == ""
      || props.emailAddress === "" || props.password === "";
  }

  function getErrorTarget(err_message){
    if(err_message.indexOf("firstName") !== 1){

    }else if(err_message.indexOf("lastName") !== 1){

    }else if(err_message.indexOf("password") !== -1){

    }else if(err_message.indexOf("username") !== -1){

    }else if(err_message.indexOf("emailAddress") !== -1){

    }
  }

  return (
      <div style={{width: "80%", margin: "0 auto"}}>
        <Alert variant="success" className={props.successMessage !== "" ? "" : "hidden"}>
          User successfully created
        </Alert>
        <Alert variant="danger" className={props.errorMessage !== "" ? "" : "hidden"}>
          {props.errorMessage}
        </Alert>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Control
              onChange={(e)=>{props.setFirstName(e.target.value)}}
              type="text"
              placeholder="First Name"
              value={props.firstName}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Control
              onChange={(e)=>{props.setLastName(e.target.value)}}
              type="text"
              placeholder="Last Name"
              value={props.lastName}
            />
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Control
              onChange={(e)=>{props.setUsername(e.target.value)}}
              type="text"
              placeholder="Username"
              value={props.username}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={(e)=>{props.setEmailAddress(e.target.value)}}
              type="email"
              label="Email Address"
              placeholder="Email Address"
              value={props.emailAddress}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              onChange={(e)=>{props.setPassword(e.target.value)}}
              type="password"
              label="Password"
              placeholder="Password"
              value={props.password}
            />
          </Form.Group>
          <Button variant="primary" type="button"
            style={{marginBottom: "10px"}}
            className={areFieldsEmpty() ? "create-account-inactive" : "create-account-active"}
            onClick={(e)=>{if(!areFieldsEmpty()) props.registerUser(e)}}
          >
            Create Account
          </Button>
        </Form>
      </div>
  );
}

export default RegistrationForm;
