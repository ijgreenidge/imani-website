import React from 'react';
import { Link } from 'react-router-dom';

function Design() {
    return (
        <>
        <div className="navbar-fixed">
                <nav className="black z-depth-0 nav-center">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo center"><img src="images/imanilogo2noborder.png" width="60"  /></Link>
                        <ul className="left">
                            <li>
                                <Link to="/" className="white-text subText">Home</Link>
                            </li>
                        </ul>
                        <ul className="right">
                            <li>
                            <Link to="/coding" className="white-text subText">Coding</Link>
                            </li>
    
    
                            <li>
                                <a href="design.html" className="red-text subText">Design</a>
                            </li>
                        </ul>
    
                    </div>
                </nav>
            </div>

            <main>

            </main>
        
        </>
        );
}

export default Design;