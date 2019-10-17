import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function Header(props){
  return(
    <div style={{textAlign: "center"}}>
      <br/>
      <br/>
      <div>
        <h1 style={{fontWeight: "bold"}}> Alle </h1>
      </div>
      <br/>
      <br/>
      <br/>
      <h4> {props.headerDescription} </h4>
      <span style={{fontWeight: "bold", color: "lightgray", fontWeight: "500"}}> {props.headerSubtext} </span>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Header;
