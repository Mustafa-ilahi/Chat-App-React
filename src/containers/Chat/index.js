import React, { Component } from 'react';
import './chat.css';
import { connect } from 'react-redux';
import { get_users } from "../../store/action";
import firebase from '../../config/firebase';

class Chat extends Component{
    constructor(){
        super()
        this.state = {
            chat_user : {},
            chats : [],
            message : ""
        }
    }
    componentDidMount(){
        this.props.get_users();
    }

    chat = (user) =>{
        this.setState({
            chat_user : user
        })
        let current_user = this.props.current_user;
        let merge_uid = this.uid_merge(current_user.uid,user.uid);
        // console.log("==>",merge_uid)
        this.get_messages(merge_uid);
    }

    send_message = () =>{
        let user = this.props.current_user;
        let chat_user = this.state.chat_user;
        let merge_uid = this.uid_merge(user.uid,chat_user.uid);
        firebase.database().ref('/').child(`chats/ ${merge_uid}`).push({
            message: this.state.message,
            name: user.name,
            uid: user.uid
        })
        this.setState({
            message: ""
        })
    }

    get_messages = (merge_uid) => {
        // console.log(uid)
        firebase.database().ref('/').child(`chats/ ${merge_uid}`).on("child_added",messages=>{
            console.log( "message",messages.val());
            this.state.chats.push(messages.val());
            this.setState({
                chats: this.state.chats
            })
        })
    }

    uid_merge = (uid1,uid2) =>{
        if(uid1<uid2){
            return uid1 + uid2;
        }
        else{
            return uid2 + uid1;
        }
    }
    render(){
        // console.log(this.state.chat);
        let user = this.props.current_user;
        return(
            <div>
                <div>
                    <h2> <img src={user.profile} /> <span id="head">Welcome {user.name} </span></h2>
                </div>
                <div className="mainDiv">
                    <div className="users">
                        <h3>Chat Users:</h3>
                        <ul id="chatUsers">
                            {this.props.users.map((v,i)=>{
                                return  user.uid !== v.uid && <li key={i} id="check"><img src={v.profile} alt="" width="30" /> {v.name} &nbsp; 
                                <button className="chatBtn" onClick={()=> this.chat(v)}>Chat</button></li> 
                                }) }
                        </ul>
                    </div>
                    <div className="chatBox">
                        <h1>Messenger</h1>
                        {Object.keys(this.state.chat_user ).length ? 
                        <h4> &nbsp; &nbsp;
                        <img src={this.state.chat_user.profile} width="20"/> &nbsp; 
                        {this.state.chat_user.name}
                        <ul>
                            {this.state.chats.map((v,i)=>{
                                return <li style={{color : v.uid === user.uid ? "#71CEBB" : "#7188CE",
                                textAlign: "center",
                                textAlign : v.uid === user.uid ? "right" : "left",
                                marginRight: "25px",
                                listStyleType : "none",
                                backgroundColor : v.uid === user.uid ? "#484A51" : "#31343B"
                            }} key={i}>{v.message}</li>
                            })}
                        </ul>
                        <div className="messageInput">
                             
                            <input value={this.state.message} onChange={(e)=> this.setState({message: e.target.value})} type="text" placeholder="Enter Message"/>
                            <button className="sendBtn" onClick={()=> this.send_message()}>Send</button>
                        </div>
                            </h4>
                            :
                            <h4 style={{textAlign:"center"}}> No user</h4>
                        }
                        
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
