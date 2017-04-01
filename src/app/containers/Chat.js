import React from 'react';
import { connect } from 'react-redux';

import Message from '../components/Message';
import Footer from './Footer';

const Chat = (props) => (
  <div data-component="Chat" className="chat">
    <div className="messages">
      {
        props.messages.map((message, index) => (
          <Message key={index} username={message.username} text={message.text} />
        ))
      }
    </div>
    <Footer />
  </div>
);

Chat.propTypes = {
  messages: React.PropTypes.arrayOf(
    React.PropTypes.shape(Message.propTypes)
  ).isRequired
};

const mapStateToProps = (state) => {
  return { messages: state.messages };
};

export default connect(mapStateToProps)(Chat);
