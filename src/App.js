import React from 'react'
import './App.css'
import {Nav} from './component/nav/Nav'
import {Carousel} from './component/carousel/Carousel'
import {Subnav} from './component/subnav/Subnav'
import {Article} from './component/article/Article'
import {Movies} from './component/movies/Movies'
import {Tv} from './component/tv_show/Tv'
import {Footer} from './component/footer/Footer'

export const App = () => {
  return (
    <>
      <div className="nav_parent">
        <Nav/>
      </div>
      <div className="carousel_parent">
        <Carousel/>
      </div>
      <div className="subnav_parent">
        <Subnav/>
      </div>
      <div className="article_parent">
        <Article/>
      </div>
      <div className="movies_parent">
        <Movies/>
      </div>
      <div className="tv_parent">
        <Tv/>
      </div>
      <div className="footer_parent">
        <Footer/>
      </div>
    </>
  )
}
