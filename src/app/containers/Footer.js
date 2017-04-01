import React from 'react';
import { connect } from 'react-redux';
import { updateMessage, sendMessage } from '../actions';

const Footer = (props) => {
  const handleChange = (event) => { props.onInputChange(event.target.value); };
  const handleClick = props.onButtonClick.bind(null, props.message);

  return (
    <div data-component="Footer" className="footer">
      <input
        data-element="input"
        type="text"
        value={props.message}
        placeholder="Write here...."
        onChange={handleChange}
      />
      <button data-element="button" className="btn" onClick={handleClick}>Send</button>
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
    onButtonClick: (message) => {
      dispatch(sendMessage(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
