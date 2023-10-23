import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img1 from "./Instagram.png"
import Img2 from "./Facebook.png"
import Img3 from "./Twitter.png"
import Img4 from "./Profile.jfif"
import "./Section.css"
const Section = ()=>{
return(
    <>
    <div className="main">
        <h2>Follow us on:</h2>
    </div>
    <div className="logo">
        <a href="https://www.instagram.com/chetanyahindwan/" target="blank" className="Img1">
            <img src={Img1} alt="img" />
        </a>
        <a href="https://www.facebook.com/chetanya.hindwan" target="blank" className="Img2">
            <img src={Img2} alt="img" />
        </a>
        <a href="https://twitter.com/ChetanyaHindwan" target="blank" className="Img3">
            <img src={Img3} alt="img" />
        </a>
        <a href="https://www.linkedin.com/in/chetanya-hindwan-6912b0218/" target="blank" className="Img4">
            <img src={Img4} alt="img" />
        </a>
    </div>
    </>
    
)
}
export default Section