import React from 'react'
import "./works.css"
import prj1 from "../../assets/portfolio-1.png"
import prj2 from "../../assets/portfolio-2.png"
import prj3 from "../../assets/portfolio-3.png"
import prj4 from "../../assets/portfolio-4.png"
import prj5 from "../../assets/portfolio-5.png"
import prj6 from "../../assets/portfolio-6.png"

const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">
            My preveius projects
        </h2>
        <span className="worksdisc">some bulshit</span>
        <div className="imgs">
            <img src={prj1} alt="" className="imge" />
            <img src={prj2} alt="" className="imge" />
            <img src={prj3} alt="" className="imge" />
            <img src={prj4} alt="" className="imge" />
            <img src={prj5} alt="" className="imge" />
            <img src={prj6} alt="" className="imge" />
        </div>
        <button className="antherbtn">see more</button>
    </section>
  )
}

export default Works
//dont forget to add the images