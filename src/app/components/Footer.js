import React from 'react';

const Footer = (props) => {
  const handleChange = (event) => props.onInputChange(event.target.value);

  return (
    <div data-component="Footer" className="footer">
      <input type="text" onChange={handleChange} />
      <button onClick={props.onButtonClick}>Send</button>
    </div>
  );
};

Footer.propTypes = {
  onButtonClick: React.PropTypes.func.isRequired,
  onInputChange: React.PropTypes.func.isRequired
};

export default Footer;
