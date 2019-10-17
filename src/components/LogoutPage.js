import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function LogoutPage(props) {

  function logoutUser(){
    localStorage.removeItem("alle_token");
    props.setIsUserLoggedIn(false);
    props.history.push("/home")
  }

  useEffect(()=>{
    logoutUser();
  }, [])

  return (
    <div className="App">
    <div style={{height: "90vh", margin: "0 auto"}}>
    </div>
  </div>
  );
}

export default withRouter(LogoutPage);
