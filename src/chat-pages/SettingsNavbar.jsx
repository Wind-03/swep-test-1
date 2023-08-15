// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../chat-Styles/settings.css"
import logo from '../login-assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import Log from "../chat-assets/bx_log-out.svg"
import profile from "../chat-assets/iconamoon_profile-fill.svg"
import Security from "../chat-assets/Security.svg"
import hamburger from "../chat-assets/hamburger-menu.svg"
import settingsLogo from '../chat-assets/settings-logo.svg'
import { useState } from "react";
function SettingsNavbar(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div>
        <div className='nav-container'>
                <nav>
                    <div className='logo-container'>
                    <Link to="/Aichat">
                      <img src={logo} alt="logo" className="logo"style={{
                        height:77.5,
                        width:77.5,
                      }}></img>
                    </Link>
                    <h1>Settings</h1>
                    </div>
                    <div className='profile-box'>
                      <img src={settingsLogo} alt="settings Logo" className="settingsLogo" style={{
                          height:34,
                          width:34,
                      }}></img>
                      <h1>Profile</h1>
                    </div>
                    <div className='security-box'>
                      <img src={settingsLogo} alt="settings Logo" className="settingsLogo" style={{
                          height:34,
                          width:34,
                      }}></img>
                      <h1>Security</h1>
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
                        <NavLink className='link-decor'>
                            <Link to="/Settings" className="decor"><img src={profile}></img>Profile</Link></NavLink>
                        <NavLink className='link-decor'>
                            <Link to="/Security" className="decor"><img src={Security}></img>Security</Link></NavLink>
                        <NavLink className='link-decor'>
                            <Link className="decor"><img src={Log}></img>Log Out</Link></NavLink>
                    </div>
                </nav>
            </div>
    </div>
  )
}

export default SettingsNavbar