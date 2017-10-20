import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addMessage } from '../redux/chat';

import MessageList from '../components/MessageList.jsx';
import MessageAdd from '../components/MessageAdd.jsx';

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddMessage: (content) => {
      dispatch(addMessage(content));
    }
  }
}

class Messages extends Component {
  render() {
    return (
      <div>
        <MessageAdd onAddMessage={ this.props.addMessage } />
        <MessageList { ...this.props } />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
