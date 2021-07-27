import React from 'react'
import './Left.css'
import Bookmark from '@material-ui/icons/CollectionsBookmarkOutlined';
import img_1 from './img-1.jpg'
import img_2 from './img-2.jpg'
import img_3 from './img-3.jpg'

export const Left = () => {
    return (
        <div className="left">
            <h3 className="left_top_name">LATEST MOVIES</h3>
            <ul>
                <li className="movie_item">
                    <img src={img_1} alt="" />
                    <div className="movie_name"><h3>HACKSAW RIDGE</h3><h4>Now Playing</h4></div>
                    <Bookmark className="movie_icon"/>
                </li>
                <li className="movie_item">
                    <img src={img_2} alt="" />
                    <div className="movie_name"><h3>SABAN'S POWER <br />RANGERS</h3><h4>Now Playing</h4></div>
                    <Bookmark className="movie_icon"/>
                </li>
                <li className="movie_item">
                    <img src={img_3} alt="" />
                    <div className="movie_name"><h3>THE HITMAN'S BODYGAURD</h3><h4>In Theaters August 18</h4></div>
                </li>
            </ul>
            <div className="movie_current_right">
                HACKSAW RIDGE <br />NOW IN THEATERS
            </div>
        </div>
    )
}
