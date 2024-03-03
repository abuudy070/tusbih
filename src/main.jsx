import React from 'react'
import {createRoot}from 'react-dom/client'
import "./style.css"
const root = document.getElementById("root")
import Header from './comenents/Header.jsx'
import Footeer from './comenents/Footeer.jsx'
// import CENTER from './comenents/CENTER.jsx'
import State from './comenents/State.jsx'
import Tasbih from './comenents/Tasbih.jsx'

createRoot(root).render(
  
  <div>
     <Header />
     
     <Tasbih />


     
  <Footeer />

  </div>
 


 
)
