// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from "../chat-pages/Navbar"
import "../chat-Styles/community.css"
import like from "../chat-assets/like.svg"
// import { useState } from 'react';
// import {ChangeEventHandler} from 'react';
function Community() {
  // const ref = useRef<HTMLTextAreaElement>(null);
  // const [inputValue, setInputValue] = useState<string>("")
  // const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  // setInputValue(e.target.value)}
  // if (ref.current) {
  //   ref.current.style.height = "auto";
  //   ref.current.style.height = `${e.target.scrollHeight - 16}px`;
  // }
// };
  return(
    <div className='community'>
        <div className='community-container'>
            <Navbar />
            <div className='community-area'>
              <div className='template-message'>
                <p>Got any quick tips for dealing with large amounts of anxiety? got an exam in an hour</p>
                <span className='like-flex'><img src={like}></img><p>1</p></span>
              </div>
              <div className='template-message'>
                <p>I participated in class for the first time!</p>
                <span className='like-flex'><img src={like}></img><p>4</p></span>
              </div>
              <div className='template-message'>
                <p>Took a mental health day off but instructor is not counting it as a valid excuse :// help</p>
                <span className='like-flex'><img src={like}></img><p>4</p></span>
              </div>
              <div className='post'>
                <textarea placeholder="What's happening"></textarea>
                <button className='post-btn'>Post</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Community