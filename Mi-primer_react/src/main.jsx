import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { TwitterFollow } from './twiter-follow.jsx'

const format = (userName) => "@" + userName
const root = createRoot(document.getElementById('root'))
root.render(

  <>
    <div className='App'>
      <TwitterFollow
        formatUserName={format}
        isFollowing
        userName="Anuar">
        Anuar Parejo
      </TwitterFollow>

      <TwitterFollow
        formatUserName={format}
        isFollowing={false}
        userName="Sofia" >
        Sofia Aldana
      </TwitterFollow>

      <TwitterFollow
        formatUserName={format}
        isFollowing={false}
        userName="Catalina">
       
      </TwitterFollow>

      <TwitterFollow
        formatUserName={format}
        isFollowing
        userName="Robinson">
        Robinson Aldana
      </TwitterFollow>
    </div>

  </>
)
