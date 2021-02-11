import './style.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { facebook_login } from '../../store/action';

class Home extends Component{
  render(){
      console.log("props==>", this.props);
    return(
      <div>
        <h1>Home</h1>
        <button onClick={()=> this.props.facebook_login()}>Facebook Login</button>
        {/* <br /> */}
        {/* <button onClick={() => this.props.set_data("mai data hun...!")}>Set Data</button> */}
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
    // set_data: (data) => dispatch(set_data(data)),
    facebook_login: () => dispatch(facebook_login())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
