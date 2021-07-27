import React from 'react'
import './Tv.css'
import img_1 from './img1_.png'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import Arrow from '@material-ui/icons/KeyboardBackspaceOutlined'
import Book from '@material-ui/icons/LibraryBooksOutlined'

export const Tv = () => {
    return (
        <div className="tv">
            <div className="tv_imgs">
                <div className="tv_ot_p_box">
                    <div className="tv_ot_img"></div>
                    {/* <img className="tv_ot_img" src={img_1} alt="" /> */}
                </div>
                <div className="tv_img_a_h">
                    <div className="tv_img_a_p">
                        <img src={img2} alt="" />
                        <Arrow className="ar_arrow tv_arrow"/>
                    </div>
                    <h4>Nashville</h4>
                    <h5>Thu Jan 5 9/8C</h5>
                </div>
                <div className="tv_left_top_h_sh">
                    <h1>STREAM YOUR <br />FAVOURATE TV SHOW</h1>
                    <h6>Watch popular titles on demand</h6>
                </div>
            </div>
            <div className="h_imgs">
                <div className="more_news more_tv">
                    <Book className="ar_book"/>
                    <span>BROWSE MORE TV SHOWS</span>
                </div>
                <div className="tv_w">Rayna James has had a successful <br />country-music career, but lately, her <br />popularity has started to fade. </div>
                <div className="tv_item_box">
                    <div className="tv_item">
                        <img src={img3} alt="" />
                        <h5>The Royals</h5>
                        <h6>Stream Now</h6>
                    </div>
                    <div className="tv_item">
                        <img src={img4} alt="" />
                        <h5>Graves</h5>
                        <h6>Stream Now</h6>
                    </div>
                    <div className="tv_item">
                        <img src={img5} alt="" />
                        <h5>Nightcap</h5>
                        <h6>Stream Now</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
