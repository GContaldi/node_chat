import React from 'react';

const Avatar = (props) => (
  <div data-component="Avatar" className="avatar">
    {props.username.substr(0, 1)}
  </div>
);

Avatar.propTypes = {
  username: React.PropTypes.string.isRequired
};

export default Avatar;
