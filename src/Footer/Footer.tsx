import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer black">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Imani Greenidge</h5>
            <h5 className="white-text">Email: imanigreenidge@gmail.com</h5>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/ijgreenidge"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.linkedin.com/in/imani-greenidge-52952b53/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">Made By Mani</div>
      </div>
    </footer>
  );
}

export default Footer;
