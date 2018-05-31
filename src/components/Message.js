import React, { Component } from 'react'


class Message extends Component {
  state = {
    starred: true,
    read: true
  }

handleClick = (e) => {
  e.stopPropagation()
  this.setState({starred: !this.state.starred})
}


render(){
    console.log('props in message', this.props)
    console.log('state in message', this.state)


  return (

    <div>

      <div class={this.state.read ? 'row message read' : 'row message read selected'} onClick={() => this.setState({read: !this.state.read})}>
      <div class="col-xs-1">
      <div class="row">
        <div class="col-xs-2">
          <input type="checkbox"  />
        </div>
        <div class="col-xs-2">
          <i class={this.state.starred ? 'star fa fa-star-o' : 'star fa fa-star'} onClick={this.handleClick}></i>
        </div>
      </div>
    </div>
    <div class="col-xs-11">
      <a href="#">
        {this.props.message.subject}
      </a>
    </div>
  </div>

</div>
    )
  }
}

export default Message
