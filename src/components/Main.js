import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toolbar from './Toolbar'
import MessageList from './MessageList'
import Message from './Message'



class Main extends Component {


render() {
  console.log('props in Main', this.props)
  return(
    <div>
      <Toolbar props={this.props}/>
      <MessageList />
    </div>
    )
  }
}
const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(mapStateToProps)(Main)
