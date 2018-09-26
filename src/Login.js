import React from 'react';
import some from 'lodash/some';
import './Login.css'

const handlePassWord = (e) => {
  return e.target.value;
}

export class Login extends React.Component{

  handleLogin(e){
    const userName = e.target.value
    const passWord = handlePassWord()
    some(this.props.authentication,function(authentication){
         if(userName  === authentication.userName && passWord < authentication.passWord){
           return true
            }
         }
       )
  }

  render(){
    return(
      <div>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" onChange = {this.handleUserName}required /><br/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" onChange = {this.handlePassWord}required/>
        <button className="loginButton" type="submit" >Login</button>
      </div>

    )
  }
}
