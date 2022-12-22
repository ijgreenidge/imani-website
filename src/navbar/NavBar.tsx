import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  const currentTab = (currentPath: string) => {
    return currentPath === pathname ? "red-text" : "white-text";
  };
  return (
    <div className="navbar-fixed">
      <nav className="black z-depth-0 nav-center">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            <img src="images/imanilogo2noborder.png" width="60" />
          </Link>
          <ul className="left">
            <li>
              <Link to="/" className={`${currentTab("/")} subText`}>
                Home
              </Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              <Link to="/coding" className={`${currentTab("/coding")} subText`}>
                Coding
              </Link>
            </li>

            <li>
              <Link to="/design" className={`${currentTab("/design")} subText`}>
                Design
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
