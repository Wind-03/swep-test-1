// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../chat-Styles/ai.css'
import Send from "../chat-assets/send.svg"
import Navbar from "../chat-pages/Navbar"
import { useState } from 'react';
function Aichat() {
  const [chatInput, setChatInput] = useState("");
  const [chatOutput, setChatOutput] = useState("");
  
  const handleChatInput = (e) => {
    console.log(e.target.value)
    setChatInput(e.target.value)
  }

  const fetchAPI = async () => {
    const formdata = new FormData();
    formdata.append("user_input", chatInput);
    console.log(chatInput)
    
    const options = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    console.log(`before: ${chatOutput}`)
    const req = await fetch("https://therapy-bot.herokuapp.com/chat", options)
    const resp = await req.text();
    console.log(`After: ${resp}`)
    setChatOutput(resp);
    
    setChatInput("")
  }
  return (
    <div className="chat">
      <div className='chat-container'>
        <Navbar />
        <div className='chat-area'>
          <div className='message-bg'>
            <div className='see-message' style={{fontSize: "16px", color: "black", fontWeight: "bold"}}>
              {chatOutput}
            </div>
          </div>
          <div className='send-message'>
            <textarea value={chatInput} onChange={handleChatInput} placeholder='Tell me, what&#39;s on your mind'></textarea>
            <button className='send' onClick={fetchAPI}><img src={Send}></img></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aichat