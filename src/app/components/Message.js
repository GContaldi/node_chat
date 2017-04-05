import React from 'react';

import Avatar from './Avatar';

const Message = (props) => {
  const classNames = props.me ? 'message--me' : 'message--others';

  const content = <div data-element="text" className="message--content">{props.text}</div>;
  const avatar = <Avatar username={props.username} />;

  return (
    <div data-component="Message" className="message">
      <div className={classNames}>
        {props.me ? [content, avatar] : [avatar, content]}
      </div>
    </div>
  );
};

Message.propTypes = {
  me: React.PropTypes.bool,
  username: React.PropTypes.string,
  text: React.PropTypes.string
};

export default Message;
