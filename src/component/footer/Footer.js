import React from 'react'
import './Footer.css'
import Arrow from '@material-ui/icons/KeyboardBackspaceOutlined'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="ft_top">
                <h2 className="ft_loinsgate">LOINSGATE</h2>
                <div className="ft_mid">
                    <div className="ft_mid_1 ft_mid_box">
                        <h4>Corporate</h4>
                        <ul>
                            <li className="ft_m_1_li">NYSE: LGF-A</li>
                            <li className="ft_m_1_li">NYSE: LGF-B</li>
                            <li className="ft_m_1_li">TERMS OF USE</li>
                            <li className="ft_m_1_li">PRIVACY POLICY</li>
                        </ul>
                    </div>
                    <div className="ft_mid_2 ft_mid_box">
                        <h4>Sitemap</h4>
                        <ul>
                            <li className="ft_m_2_li">MOVIES</li>
                            <li className="ft_m_2_li">TV SHOWS</li>
                            <li className="ft_m_2_li">AT HOME</li>
                            <li className="ft_m_2_li">CORPORATE</li>
                        </ul>
                    </div>
                    <div className="ft_mid_3 ft_mid_box">
                        <h4>Subscribe</h4>
                        <h6>Enter your e-mail to get notified about the latest <br />Loinsgate news and events</h6>
                        <div className="ft_input_box">
                            <input className="ft_input_email" type="email" placeholder="Enter your e-mail"/>
                            <Arrow className="ft_send_arrow"/>
                        </div>
                    </div>
                </div>
                <div className="ft_sm">
                    <div className="nav_smh ft_sm_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                </div>
            </div>
            <div className="ft_bot">&copy; 2021 Lionsgate Entertainment Inc. All Rights Reserved.</div>
            <div className="ft_bot_2">Developed by Ashwani Kumar (20111011) in 12 hours of coding.</div>
        </div>
    )
}
