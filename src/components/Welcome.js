import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogout } from 'react-google-login';


class Welcome extends Component{

constructor(props){
    super(props)
 this.YOUR_CLIENT_ID="1094820850383-ac84c0gbbpu9mj7edddd0lutuc9guj4m.apps.googleusercontent.com"
}


 onFailure = (res) => {
    console.log("[Logout Failure]",res);
}

render(){
    return (
    <div>
        <h1>Welcome {this.props.name}</h1> 
        <GoogleLogout
        clientId={this.YOUR_CLIENT_ID}
        buttonText="Google Logout"
        onLogoutSuccess={this.props.logoutHandler} 
        cookiePolicy={'single_host_origin'}
        style={{ marginTop :'100px'}}></GoogleLogout>
        </div>
 );
}
}
export default Welcome;