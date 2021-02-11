import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';

class Chat extends Component{
    render(){
        console.log(this.props);
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
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
      current_user : state.current_user
  })


export default connect(mapStateToProps, null)(Chat);
