

import "./skills.css";
import React from 'react'
import first from "../../assets/ui-design.png"
import second from "../../assets/website-design.png"
import third from "../../assets/app-design.png"


const Skills = () => {
  return (
    <section id="container">
        <span className="title">what i do</span>
        <span className="prg">resumeh</span>
        <div className="skillbars">
            <div className="skillbar"> 
                <img src={first} alt="" className="icon" />
                <div className="expl">
                    <span className="head">first skill</span>
                    <p className="prgrph">explination of skill</p>
                </div> 
            </div>
            <div className="skillbar"> 
                <img src={second} alt="" className="icon" />
                <div className="expl">
                    <span className="head">second skill</span>
                    <p className="prgrph">explination of skill</p>
                </div> 
            </div>
            <div className="skillbar"> 
                <img src={third} alt="" className="icon" />
                <div className="expl">
                    <span className="head">third skill</span>
                    <p className="prgrph">explination of skill</p>
                </div> 
            </div>   
        </div>
    </section>
)
}

export default Skills
//dont forger to import logos
