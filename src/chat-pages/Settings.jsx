// eslint-disable-next-line no-unused-vars
import React from 'react'
import SettingsNavbar from './SettingsNavbar'
import Avatar from "../chat-assets/avatar.png"
import '../chat-Styles/ai.css'
function Settings() {
  return (
    <div className='Settings'>
        <div className='settings-container'>
            <SettingsNavbar />
            <div className='profile-container'>
                    <img src={Avatar}></img>
                <div className='profile-inner'>
                    <h1>Contact Details</h1>
                    <form className='profile-input'>
                            <div className='flex'>
                                <div>
                                    <label className='fname'>First Name</label><br />
                                    <input className='finput'></input><br />
                                </div>
                                <div>
                                    <label className='lname'>Last Name</label><br />
                                    <input className="linput"></input><br />
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <label className='mail'>Email</label><br />
                                    <input className='mail-input'></input><br />
                                </div>
                                <div>
                                    <label className='Date'>Date of Birth</label><br />
                                    <input className='DOB' type='date'></input><br />
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <label className='mail-1'>Emergency email 1</label><br />
                                    <input className='mail-1-input'></input><br />
                                </div>
                                <div>
                                    <label className='num-1'>Emergency Number 1</label><br />
                                    <input className='num-1-input'></input><br />
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <label className='mail-2'>Emergency email 2</label><br />
                                    <input className='mail-2-input'></input><br />
                                </div>
                                <div>
                                    <label className='num-2'>Emergency Number 2</label><br />
                                    <input className='num-2-input'></input><br />
                                </div>
                            </div>
                            <button>Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings