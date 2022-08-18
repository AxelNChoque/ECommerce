import React from "react";
import './index.css';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {
    const ima = () => {
        alert('ima trolazo')
    }
    return(
        <div className="Header">
            <ul>
            <GiHamburgerMenu className="Hamburger" size='30' onClick={ima}/>
                <div>
                <p>
                    sneakers
                </p>
                <li>
                    <a>
                    Collections
                    </a>
                </li>
                <li>
                    <a>
                    Men
                    </a>
                </li>
                <li>
                    <a>
                    Women
                    </a>
                </li>
                <li>
                    <a>
                    About
                    </a>
                </li>
                <li>
                    <a>
                    Contact
                    </a>
                </li>
                </div>
            </ul>
        </div>
    )
}

export { Header };