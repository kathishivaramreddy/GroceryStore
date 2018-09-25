import React from 'react';
import './Login.css'

export class Login extends React.Component{

  render(){
    return(
      <div>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required /><br/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
        <button className="loginButton" type="submit">Login</button>
          </div>
    )

  }
}
