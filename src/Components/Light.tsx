import React from 'react';
import PropTypes from 'prop-types';

import './TrafficLight.css'

const Light = props => {
    const className = 'light ' + props.lightColor
    return (
        <div className={className}>
            
        </div>
    );
};

Light.propTypes = {
    
};

export default Light;