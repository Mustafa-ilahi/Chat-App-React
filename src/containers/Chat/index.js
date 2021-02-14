import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { get_users } from "../../store/action";
import { bindActionCreators } from 'redux';

class Chat extends Component{
    constructor(){
        super()
        this.state = {
            chat_user : {},
            chat : []
        }
    }
    componentDidMount(){
        this.props.get_users();
    }

    chat = (user) =>{
        // console.log(user);
        this.setState({
            chat_user : user
        })
    }

    render(){
        // console.log(this.state.chat_user);
        let user = this.props.current_user;
        return(
            <div>
                <div>
                    <h2> <img src={user.profile} /> <span id="head">Welcome {user.name} </span></h2>
                </div>
                <div className="mainDiv">
                    <div>
                        <h3>Chat Users:</h3>
                        <ul>
                            {this.props.users.map((v,i)=>{
                                return   user.uid !== v.uid && <li key={i}><img src={v.profile} alt="" width="20" /> {v.name} 
                                <button onClick={()=> this.chat(v)}>Chat</button></li> 
                                }) }
                        </ul>
                    </div>
                    <div className="chatBox">
                        <h1>Messenger</h1>
                        {Object.keys(this.state.chat_user ).length ? 
                        <h4> &nbsp; &nbsp;
                        <img src={this.state.chat_user.profile} width="20"/> &nbsp; 
                        {this.state.chat_user.name}
                            </h4>
                            :
                            <h4 style={{textAlign:"center"}}> No user</h4>
                    }
                        <div className="messageInput">
                             
                            <input type="text" placeholder="Enter Message"/>
                            <button className="sendBtn">Send</button>
                        </div>
                        
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
      current_user : state.current_user,
      users : state.users
  })

const mapDispatchToProps = (dispatch) => ({
    get_users: () => dispatch(get_users())
  })
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
