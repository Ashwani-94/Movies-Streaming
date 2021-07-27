import React from 'react'
import './Carousel.css'
import {Left} from './left/Left'
import {Right} from './right/Right'

export const Carousel = () => {
    return (
        <div className="carousel">
            <div className="left_parent">
                <Left/>
            </div>
            <div className="right_parent">
                <Right/>
            </div>
        </div>
    )
}
