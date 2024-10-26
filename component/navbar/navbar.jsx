import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/namelogoblk-3.jpg";
import {Link} from "react-scroll";


const Navbar=()=>{

    //to show witch menu we want we should use react hook
    const [showMenu,setshowMenu]=useState(false);

    return(

        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopmenu">
            <Link activeClass="active" to="intro" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
            className="desktopmenulistitem">Home</Link>
            <Link activeClass="active" to="container" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
             className="desktopmenulistitem">About</Link>
            <Link activeClass="active" to="works" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
             className="desktopmenulistitem">Elmira</Link>
            <Link activeClass="active" to="Clientandcontact" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
             className="desktopmenulistitem">Clients</Link>
            
            </div>
            <button className="desktopmenubtn" onClick={
                ()=>{
                    //we hoto msg section
                    document.getElementById("contactme").scrollIntoView({behavior:"smooth"});
                }
            }>
                Contact Me
            </button>
            
            <img src="" alt="M" className="mobmenu"
            onClick={()=>{setshowMenu(!showMenu)}} />
            <div className="navmenu"
            /*xeili dgt kon inja menu avz mikne*/
            style={{display: showMenu ? "flex" : "none" }}>
            <Link activeClass="active" to="intro" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
            onClick={()=>{setshowMenu(false)}}
            className="listitem">Home</Link>
            <Link activeClass="active" to="container" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
            onClick={()=>{setshowMenu(false)}}
            className="listitem">About</Link>
            <Link activeClass="active" to="works" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
            onClick={()=>{setshowMenu(false)}}
             className="listitem">porttfolio</Link>
            <Link activeClass="active" to="Clientandcontact" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
            onClick={()=>{setshowMenu(false)}}
             className="listitem">Clients</Link>
            <Link activeClass="active" to="contactme" spy={true} 
            smooth={true} offset={-50} duration={500/*ml second*/} 
            onClick={()=>{setshowMenu(false)}}
             className="listitem">contact</Link>
            </div>


        </nav>


    )


}
export default Navbar