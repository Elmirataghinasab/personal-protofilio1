import { Link } from "react-scroll";
import "./intro.css";

import React from 'react'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
         <span className="hello">Hello,</span>
         <span className="introduc">I'm <span className="myname">Elmira</span>
         <br/>Developer</span>
         <p className="introprg">I'm a skilled programmer with exprience...</p>
         <Link><button className="btn">hire Me</button></Link>
        </div>
        <img src="../assets/Untitled-2.jpg" alt="" className="myPhoto"/>
    </section>
  )
}

export default Intro
//remmember to change the font