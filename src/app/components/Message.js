import React from 'react';

const Message = (props) => (
  <div data-component="Message" className="message">{props.username}: {props.text}</div>
);

Message.propTypes = {
  username: React.PropTypes.string,
  text: React.PropTypes.string
};

export default Message;
