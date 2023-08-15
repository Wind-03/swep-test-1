// eslint-disable-next-line no-unused-vars
import React from 'react'
import SettingsNavbar from './SettingsNavbar'
import "../chat-Styles/security.css"
function Security() {
  return (
    <div className='Security'>
        <div className='security-container'>
          <SettingsNavbar />
          <div className='security-input'>
            <h1 className='hidden'>Security</h1>
            <div className='border'>
              <div className='email-flex'>
                <h1>Email Adress</h1>
                <div className='flex'>
                  <label htmlFor='btn'>Users email</label>
                  <button id="btn">Edit</button>
                </div>
              </div>
                <p>The email address associated with your account.</p>
            </div>
            <div className='border'>
              <div className='pass-flex'>
                <h1>Password</h1>
                <button className='change-btn'>Change Password</button>
              </div>
                <p>Set a unique password to protect your account.</p>
            </div>
            <div className='border'>
              <button className='clear-btn'>Deactivate Account</button>
              <p>This will shut down your account until  you reactivate when you sign in again.</p>
            </div>
            <div className='border'>
              <button className='clear-btn red-text'>Deactivate Account</button>
              <p>This will permanently  delete your account.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Security