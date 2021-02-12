import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { get_users } from "../../store/action";
import { bindActionCreators } from 'redux';

class Chat extends Component{
    componentDidMount(){
        this.props.get_users();
    }

    render(){

        let user = this.props.current_user;
        return(
            <div>
                <div>
                    <h2> Welcome {user.name} ..!</h2>
                    <img src={user.profile} />
                    <h3>Email: {user.email}</h3>
                </div>
                <div>
                    <div>
                        <h3>Chat Users:</h3>
                        <ul>
                            {this.props.users.map((v,i)=>{
                                return v.uid !== user.uid && <li key={i}><img src={v.profile} alt="" width="20" /> {v.name} <button>Chat</button></li> 
                                }) }
                        </ul>
                    </div>
                </div>
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
