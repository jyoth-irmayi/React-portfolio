// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/global.css"
import "./styles/navbar.css"
import "./styles/hero.css"
import "./styles/about.css"
import "./styles/skills.css"
import "./styles/projects.css"
import "./styles/resume.css"
import "./styles/contact.css"
import "./styles/footer.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
