import './style.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { facebook_login } from '../../store/action';
import { FacebookLoginButton } from "react-social-login-buttons";
import chat_home from '../../assets/chat_home.gif';

class Home extends Component{
  render(){
      
    return(
      <div>
        <h1 style={{textAlign:"center"}}>Welcome to Chat-App</h1>
        <br/>
        <div  className="home_div">
        <img src={chat_home} id="home_img"/>
        </div>
        <br/>
        <FacebookLoginButton style={{width: "200px",fontSize:"16px",margin: "0 auto"}} onClick={() => this.props.facebook_login(this.props.history)} />
        {/* <button id="loginBtn" onClick={()=> }>Facebook Login</button> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
    {
        name: state.username,
        email: state.email
  }
)

const mapDispatchToProps = (dispatch) => ({
    facebook_login: (history) => dispatch(facebook_login(history))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
