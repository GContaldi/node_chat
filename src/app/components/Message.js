import React from 'react';

const Message = (props) => (
  <div data-component="Message" className="message">
    <div data-element="username" className="username">{props.username} wrote:</div>
    <div data-element="text">{props.text}</div>
  </div>
);

Message.propTypes = {
  username: React.PropTypes.string,
  text: React.PropTypes.string
};

export default Message;
