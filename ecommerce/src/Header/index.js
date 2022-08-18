import React from "react";
import './index.css';
const Header = () => {

    return(
        <div className="Header">
            <ul>
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
            </ul>
        </div>
    )
}

export { Header };