import React from 'react';
import PropTypes from 'prop-types';


const StandardFeature = ({ clickCount, onClick }) => (
  <article style={{ border: '1px solid black', width: '200px', height: '200px'}}>
    <strong>Standard feature</strong>
    <br />
    <button onClick={onClick}>Increment click count</button>
    <br />
    Click count: {clickCount}
  </article>
);

StandardFeature.propTypes = {
  clickCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default StandardFeature;