import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHouse,faCircleInfo,faPhone} from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
const Header = () => {
    return (
        <> 

                    <div className="Header">
                            <h1>Caio</h1>
                        <nav>
                            <ul>
                                <div className="Closed">
                                </div>
                                <li>
                                    <a href="#">Home</a>
                                <FontAwesomeIcon className='iconsHome' icon={faHouse}/>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                    <FontAwesomeIcon className='iconsAbout' icon={faCircleInfo}/>

                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                    <FontAwesomeIcon className='iconsCall' icon={faPhone}/>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>
                )
}
                export default Header