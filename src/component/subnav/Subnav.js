import React from 'react'
import "./Subnav.css"

export const Subnav = () => {
    return (
        <div className="subnav">
            <ul className="subnav_box_1">
                <li className="subnav_item"><span>OFFICIAL WEBSITE</span></li>
                <li className="subnav_item"><span>GET TI</span>CKETS</li>
                <li className="subnav_item"><span>WATCH</span> TRAILER</li>
            </ul>
            <div className="subnav_box_2">
                The true story of Pfc. Desmond T.Doss (Andrew Garfield), <br />
                who won the Congressional Medal of Honor despite refusing <br />
                to bear arms during WWII on religious grounds.
            </div>
        </div>
    )
}
