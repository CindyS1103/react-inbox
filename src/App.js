import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'


class App extends Component {

  markAsReadFunc = () => {

    let selectedMessages = this.state.messages.filter( message => message.selected )
    this.setState( this.state.messages.concat(selectedMessages.map( message => {
      message.read = true
      return message
    } ) ) )
  }

  render() {

    return (
      
      <div className="App">

      <Main markAsReadFunc={ this.markAsReadFunc }/>



      </div>
    );
  }
}

export default App;
