// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../login-assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import '../chat-Styles/ai.css'
import Activities from "../chat-assets/activities.svg"
import Buddy from "../chat-assets/Buddy.svg"
import Community from "../chat-assets/community.svg"
import Help from "../chat-assets/help.svg"
import SettingsImg from "../chat-assets/settings.svg"
import Log from "../chat-assets/bx_log-out.svg"
import hamburger from "../chat-assets/hamburger-menu.svg"
import { useState } from "react";
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className='nav-container'>
        <nav>
            <div className='logo-container'>
              <img src={logo} alt="logo" style={{
                height: 77.5,
                width: 77.5,
              }}></img>
              < h1 className='lost'>Happyhub</h1>
            </div>
            <div className='buddy-box'>
                <div className="buddy-box-inner">
                    <img src={Buddy}></img>
                    <p>Buddy</p>
                </div>
                <img src={Help} className='hidden'></img>
            </div>
                <button className='hamburger'
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}>
                            <img src={hamburger} ></img>
                </button>
                <div className={
                    isNavExpanded ? "links expanded" : "links"
                }>
                    <NavLink className='link-decor'><Link className="decor" to="/Aichat"><img src={Buddy}></img>Buddy</Link></NavLink>
                    <NavLink className='link-decor'><Link className="decor"><img src={Activities}></img>Exercises</Link></NavLink>
                    <NavLink className='link-decor'><Link className="decor" to="/Community"><img src={Community}></img>Community</Link></NavLink>
                </div>
                <div className={
                    isNavExpanded ? "utility expanded" : "utility"
                }>
                    <NavLink className='link-decor hide'><Link className="decor"><img src={Help}></img><p>Get Help</p></Link></NavLink>
                    <NavLink className='link-decor'><Link className="decor" to="/Settings"><img src={SettingsImg}></img>Settings</Link></NavLink>
                    <NavLink className='link-decor'><Link className="decor"><img src={Log}></img>Log Out</Link></NavLink>
                </div>
        </nav>
    </div>
  )
}

export default Navbar