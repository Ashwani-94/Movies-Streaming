import React from 'react'
import './Article.css'
import left1 from './left1.jpg'
import left2 from './left2.jpg'
import left3 from './left3.png'
import right1 from './right1.jpg'
import right2 from './right2.jpg'
import right3 from './right3.jpg'
import sign from './sign.png'
import Arrow from '@material-ui/icons/KeyboardBackspaceOutlined'
import Book from '@material-ui/icons/LibraryBooksOutlined'
import Play from '@material-ui/icons/PlayArrowRounded'

export const Article = () => {
    return (
        <div className="article">
            <div className="ar_left">
                <ul className="ar_left_subnav_box">
                    <li className="ar_left_subnav_item">ALL ARTICLES</li>
                    <li className="ar_left_subnav_item">PRESS RELEASES</li>
                </ul>
                <div className="ar_box left1">
                    <Arrow className="ar_arrow"/>
                    <div className="ar_date">05.10.2017</div>
                    <img src={left1} alt="" />
                    <div className="ar_heading">
                        THE WORLDS'S TOP BODYGAURD GETS A <br />
                        NEW CLIENT, THE HITMAN'S BODYGAURD
                    </div>
                    <div className="ar_sub_heading">
                        The world's top bodygaurd gets a new client, a hit man who must <br />
                        testify at the International Court of Justice. They must put their <br />
                        duifferences aside and work together to make it to the trail on time.
                    </div>
                </div>
                <div className="ar_box left2">
                    <Arrow className="ar_arrow"/>
                    <div className="ar_date">05.10.2017</div>
                    <img src={left2} alt="" />
                    <div className="ar_heading">
                        LIONSGATE INKS FIRST-LOOK DEAL WITH <br />
                        DIGITAL STAR MARIE HART 
                    </div>
                    <div className="ar_sub_heading">
                    Lionsgate's feature film production and distribution <br />
                    operation encompasses a diverse slate of tentpoles, <br />
                    star-driven event films and branded properties. 
                    </div>
                </div>
                <div className="more_news">
                    <Book className="ar_book"/>
                    <span>BROWSE MORE NEWS</span>
                </div>
                <img className="aeom_logo" src={left3} alt="" />
            </div>
            <div className="ar_right">
                <div className="ar_2017_img">
                    <img src="https://images.vexels.com/media/users/3/206417/isolated/lists/7eef544c644b6dddf2f66a098c120df2-art-nouveau-ornament-square-tilted-stroke.png" alt="" />
                    <div className="ar_2017">2<span>0</span>17</div>
                </div>
                <div className="off_lg">
                    OFFICIAL LIONSGATE <br />
                    NEWS & PRESS
                </div>
                <div className="ar_box right1">
                    <Arrow className="ar_arrow"/>
                    <div className="ar_date">05.10.2017</div>
                    <img src={right1} alt="" />
                    <div className="ar_heading">
                        HIGH SCHOOL OUTCASTS STUMBLE UPON <br />
                        AN OLD ALIEN SHIP 
                    </div>
                    <div className="ar_sub_heading sh_faded">
                    A group of high-school students, who are infused with unique superpowers, <br />
                    harness their abilities in order to save the world. 
                    </div>
                </div>
                <div className="man_img_dots">
                    <img className="man_img" src={right2} alt="" />
                    <img className="man_sign" src={sign} alt="" />
                    <ul className="ar_dots">
                        <li className="num">1</li>
                        <li className="point filled"></li>
                        <li className="point"></li>
                        <li className="point"></li>
                    </ul>
                    <div className="ar_arrow_box">
                        <Arrow className="ar_arrow_left"/>
                        <Arrow className="ar_arrow_right"/>
                    </div>
                    <div className="ar_trailer">
                        <img src={right3} alt="" />
                        <div className="tr_ic_head">
                            <Play className="play_icon"/>
                            <div className="dash"></div>
                            <div className="ar_wt">
                                WATCH TRAILER <br />
                                <span>01:35</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
