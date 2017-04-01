import React from 'react';

const Message = (props) => (
  <div data-component="Message" className="message">{props.text}</div>
);

Message.propTypes = {
  text: React.PropTypes.string
};

export default Message;
