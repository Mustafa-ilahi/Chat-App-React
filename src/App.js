import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import AppRouter from './config/router';

class App extends Component{
  render(){
    return(
      <div>
        <AppRouter />
      </div>
    )
  }
}

export default App;
