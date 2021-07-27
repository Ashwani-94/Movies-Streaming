import React from 'react'
import './Right.css'
import img from './img.jpg'
import img2 from './img2.webp'
import Arrow_left from '@material-ui/icons/KeyboardBackspaceOutlined'
import Play from '@material-ui/icons/PlayArrowRounded'

export const Right = () => {
    return (
        <div className="right">
            <img className="right_img" src={img} alt="" />
            <div className="rt_play_btn_p">
                <Play className="rt_play_btn"/>
                <div className="rt_dash"></div>
            </div>
            <div className="right_pagination">
                <div className="box_on_img">
                    <Arrow_left className="arrow_right"/>
                    <Arrow_left className="arrow_left"/>
                </div>
                <ul>
                    <li className="num">1</li>
                    <li className="point filled"></li>
                    <li className="point"></li>
                    <li className="point"></li>
                    <li className="point"></li>
                </ul>
            </div>
            <img src={img2} className="rt_img2" alt="" />
        </div>
    )
}
