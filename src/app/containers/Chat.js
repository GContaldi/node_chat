import React from 'react';
import { connect } from 'react-redux';

import Message from '../components/Message';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Chat = (props) => (
  <div data-component="Chat" className="chat-wrapper">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="chat">
      <div className="messages">
        {
          props.messages.map((message, index) => (
            <Message key={index} username={message.username} text={message.text} />
          ))
        }
      </div>
      <Footer />
    </div>
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
