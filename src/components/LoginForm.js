import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function LoginForm(props) {


  let [emailAddress, setEmailAddress] = useState("");
  let [password, setPassword] = useState("");

  function areFieldsEmpty(){
    return props.emailAddress === "" || props.password === "";
  }

  return (
      <div style={{width: "80%", margin: "0 auto"}}>
        <Alert variant="success" className={props.successMessage !== "" ? "" : "hidden"}>
          Successfully logged in
        </Alert>
        <Alert variant="danger" className={props.errorMessage !== "" ? "" : "hidden"}>
          {props.errorMessage}
        </Alert>
        <Form>
          <Form.Group controlId="username">
            <Form.Control
              onChange={(e)=>{props.setUsername(e.target.value)}}
              type="text"
              placeholder="Username"
              value={props.username}
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
            className={areFieldsEmpty() ? "create-account-inactive" : "create-account-active"}
            onClick={props.loginUser}
          >
            Login
          </Button>
        </Form>
      </div>
  );
}

export default LoginForm;
