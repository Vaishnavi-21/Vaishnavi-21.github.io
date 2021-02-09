import React,{ Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import GoogleLogin from 'react-google-login';
import Welcome from './Welcome';


class Login extends Component {
  
 constructor(props){
     super(props);
     this.YOUR_CLIENT_ID = "1094820850383-ac84c0gbbpu9mj7edddd0lutuc9guj4m.apps.googleusercontent.com"
     this.state = {
         emailname : 'Please Login to Continue' 
     }
 }

 refreshTokenSetup = (response)=>{
        let refreshTiming = (response.tokenObj.expires_in || 3600- 5*60 )*1000;
    
        const refreshToken = async() =>
        {
            const newAuthRes = await response.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 -5*60)*1000;
    
            console.log('new auth Token',newAuthRes.id_token);
    
            setTimeout(refreshToken,refreshTiming);
        };
        setTimeout(refreshToken,refreshTiming);
    }
       onSuccess=(response) =>{
        console.log("[Login Success]", response.profileObj.name);
        const username = response.profileObj.name;
        this.setState({
             emailname: username
          }, () => {
              this.render();
              console.log(this.state.emailname)
          }
            );
          
        
    }
           
    onFailure=(response) =>{
        console.log("[Login Failure]"); 
        this.setState({
             emailname: "Please Login to Continue"
          }, () => {
              this.render();
              console.log(this.state.emailname)
          }
            );
          
        
    }

    render(){
        var html='';
        if(this.state.emailname=='Please Login to Continue'){
             html = (<div>
                <GoogleLogin
                clientId={this.YOUR_CLIENT_ID}
                buttonText="Google Login"
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop :'100px'}}
                isSignedIn={true}
                />
                
                </div>);
        }
       else {
           html =( <Welcome name={this.state.emailname} logoutHandler={this.onFailure} />)
       }
        
        return html;
    }
}
export default Login;