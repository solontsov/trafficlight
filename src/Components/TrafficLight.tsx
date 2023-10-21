import React from 'react';
import { useState } from 'react'

import './TrafficLight.css'
import Light from './Light';


const TrafficLight = () => {
    // Timing of lights in milliseconds
    const red = 5000, yellow = 2000, green = 3000, blink=500

    const lightSequence = [
        {red: "red", yellow:"black", green: "black", timeout: red},
        {red: "red", yellow:"yellow", green: "black", timeout: yellow},
        {red: "black", yellow:"black", green: "green", timeout: green},
        {red: "black", yellow:"black", green: "black", timeout: blink},
        {red: "black", yellow:"black", green: "green", timeout: blink},
        {red: "black", yellow:"black", green: "black", timeout: blink},
        {red: "black", yellow:"black", green: "green", timeout: blink},
        {red: "black", yellow:"yellow", green: "black", timeout: yellow},
    ]
    const [index, setIndex] = useState(0)

    const changeLights = () => {
        let nextIndex = index+1

        if (nextIndex === lightSequence.length) {
            nextIndex = 0
        }

        setIndex(nextIndex);
    }

    setTimeout(changeLights, lightSequence[index].timeout)


        return (
        <div className='lightBox' >
            <Light lightColor={lightSequence[index].red}/>
            <Light lightColor={lightSequence[index].yellow}/>
            <Light lightColor={lightSequence[index].green}/>
        </div>
    );
};


export default TrafficLight;
