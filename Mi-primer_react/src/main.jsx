import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { TwitterFollow } from './twiter-follow.jsx'

//podemos usar arrays en los props pero es complejo a la hora de manejar y entender datos
const arrays = { userName: "tyler"}
const format = (userName) => "@" + userName 
const root = createRoot(document.getElementById('root'))
root.render(

  <>
    <div className='App'>
      <TwitterFollow
        formatUserName={format}
       {... arrays}
       >
        Anuar Parejo
      </TwitterFollow>
{/*asi comento aqui*/ }
      <TwitterFollow
        formatUserName={format}
        
        userName="will" >
        {name}
      </TwitterFollow>

      <TwitterFollow
        formatUserName={format}
       
        userName="steve">
       
      </TwitterFollow>

      <TwitterFollow
        formatUserName={format}
       
        userName="marco">
        Robinson Aldana
      </TwitterFollow>

      <button onClick={()=> setName("pedromichel")} >
        Cambiar nombre
      </button>
    </div>

  </>
)
