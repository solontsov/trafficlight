// import React from 'react';

import './TrafficLight.css'

type LightProps = { lightColor: string}

const Light = ({lightColor}: LightProps) => {
    const className = 'light ' + lightColor
    return (
        <div className={className}>
            
        </div>
    );
};


export default Light;