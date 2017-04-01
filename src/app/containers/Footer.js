import React from 'react';
import { connect } from 'react-redux';
import { updateMessage, addMessage } from '../actions';

const Footer = (props) => {
  const handleChange = (event) => props.onInputChange(event.target.value);

  return (
    <div data-component="Footer" className="footer">
      <input type="text" value={props.message} onChange={handleChange} />
      <button onClick={props.onButtonClick}>Send</button>
    </div>
  );
};

Footer.propTypes = {
  message: React.PropTypes.string,
  onButtonClick: React.PropTypes.func.isRequired,
  onInputChange: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { message: state.newMessage };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (message) => {
      dispatch(updateMessage(message));
    },
    onButtonClick: () => {
      dispatch(addMessage());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
