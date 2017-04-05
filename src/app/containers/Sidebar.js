import React from 'react';
import { connect } from 'react-redux';

const Sidebar = (props) => (
  <div data-component="Sidebar">
    <ul>
      {
        props.users.map((user, index) => (
          <li key={index} className="sidebar--username">{user}</li>)
        )
      }
    </ul>
  </div>
);

Sidebar.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.string)
};

const isUserPresent = (users, user) => {
  return users.indexOf(user) !== -1;
};

const getUsersFromMessages = (messages) => {
  return messages.reduce((users, message) => {
    if (!isUserPresent(users, message.username)) {
      users.push(message.username);
    }
    return users;
  }, []);
};

const mapStateToProps = (state) => {
  return { users: getUsersFromMessages(state.messages) };
};

export default connect(mapStateToProps)(Sidebar);
