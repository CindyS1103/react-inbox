import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'
import { selectAll } from '../redux/actions'
import { bindActionCreators } from 'redux'


class Toolbar extends Component {


render() {
console.log('props in Toolbar', this.props.props)
  return(
    <div>
      <div class="row toolbar">
      <div class="col-md-12">
        <p class="pull-right">
          <span class="badge badge">2</span>
          unread messages
          </p>

          <button class="btn btn-default">
            <i class="fa fa-square-o" onClick={this.props.selectAll} ></i>
          </button>

          <button class="btn btn-default" disabled="disabled">
          Mark As Read
          </button>

          <button class="btn btn-default" disabled="disabled">
          Mark As Unread
          </button>

          <select class="form-control label-select" disabled="disabled">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

        <select class="form-control label-select" disabled="disabled">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button class="btn btn-default" disabled="disabled">
          <i class="fa fa-trash-o"></i>
        </button>
    </div>
  </div>
</div>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  selectAll
}, dispatch)

export default connect(null, mapDispatchToProps)(Toolbar);
