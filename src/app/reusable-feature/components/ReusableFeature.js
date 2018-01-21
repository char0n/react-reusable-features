import React from 'react';
import PropTypes from 'prop-types';


const ReusableFeature = ({ clickCount, onClick }) => (
  <article style={{ border: '1px solid red', width: '200px', height: '200px'}}>
    <strong>Reusable feature instance</strong>
    <br />
    <button onClick={onClick}>Increment click count</button>
    <br />
    Click count: {clickCount}
  </article>
);

ReusableFeature.propTypes = {
  clickCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default ReusableFeature;