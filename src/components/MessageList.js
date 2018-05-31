import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'



const MessageList = (props) => {
console.log('props in MessageList', props)

  let listOfMessages = props.messages.map(message => <Message key={message.id} message={message} />)

  return(

    <div>
    {listOfMessages}

    </div>
  )
}

const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(mapStateToProps)(MessageList)
