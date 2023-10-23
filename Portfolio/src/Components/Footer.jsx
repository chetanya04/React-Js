import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"

const Footer= ()=>{
    return(
        <>
        <div className="footer">
            <h2>Copyright@2023</h2>
            <FontAwesomeIcon className="Copyright" icon={faCopyright}/>
        </div>
        </>
    )
}


export default Footer