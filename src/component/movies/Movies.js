import React from 'react'
import './Movies.css'
import Book from '@material-ui/icons/LibraryBooksOutlined'
import Arrow from '@material-ui/icons/KeyboardBackspaceOutlined'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'

export const Movies = () => {
    return (
        <div className="movies">
            <div className="movies_box1">
                <div className="movies_box_1_1">
                    <h1>DISCOVER NEW MOVIES</h1>
                    <h5>On the big screen and at home.</h5>
                </div>
                <div className="more_news mo_mov">
                    <Book className="ar_book"/>
                    <span>BROWSE MORE MOVIES</span>
                </div>
            </div>
            <div className="movies_box2">
                <ul className="mo_sub">
                    <li className="mo_sub_item">LATEST MOVIES</li>
                    <li className="mo_sub_item">COMING SOON</li>
                    <li className="mo_sub_item">IN THEATERS</li>
                    <li className="mo_sub_item">AT HOME</li>
                </ul>
                <div className="mo_p_box">
                    <div className="mo_box">
                        <img src={img1} alt="" />
                        <div className="mo_h">The Hitman's <br />Bodygaurd</div>
                        <div className="mo_s_h">Coming Soon</div>
                    </div>
                    <div className="mo_box">
                        <img src={img2} alt="" />
                        <div className="mo_h">How To Be A Latin <br />Lover</div>
                        <div className="mo_s_h">In Theaters August 18</div>
                    </div>
                    <div className="mo_box">
                        <img src={img3} alt="" />
                        <div className="mo_h">Saban's Power<br />Rangers</div>
                        <div className="mo_s_h">In Theaters August 18</div>
                    </div>
                    <div className="mo_box">
                        <img src={img4} alt="" />
                        <div className="mo_h">John Wick Chapter<br />Two</div>
                        <div className="mo_s_h">At Home</div>
                    </div>
                </div>
                <ul className="ar_dots mo_dots">
                    <li className="num">1</li>
                    <li className="point mo_filled"></li>
                    <li className="point"></li>
                    <li className="point"></li>
                </ul>
                <div className="ar_arrow_box mo_arrow_box">
                    <Arrow className="ar_arrow_left mo_arrow_left"/>
                    <Arrow className="ar_arrow_right"/>
                </div>
            </div>
        </div>
    )
}
