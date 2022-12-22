import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinksContainer from "./LinkContainer";
import "./Links.css";

function Links() {
  return (
    <div className="main">
      <main>
        <div className="container">
          <div className="row center">
            <div className="section">
              <img
                className="responsive-img links-img"
                src="images/mani22bday.jpg"
                width="200"
              />
              <h3 className="center name">
                <b>CptMani | Mani G | Imani</b>
              </h3>
            </div>
          </div>

          <div className="social center row">
            <a href="https://www.instagram.com/cpt.mani/" target="_blank">
              <img className="links-icon" src="icons/insta-logo.png"></img>
            </a>
            <a href="https://twitter.com/cptmani_" target="_blank">
              <img className="links-icon" src="icons/twitter-logo.png"></img>
            </a>
            <a href="https://www.tiktok.com/@cptmani" target="_blank">
              <img className="links-icon" src="icons/tiktok-logo.png"></img>
            </a>

            <a
              href="https://www.linkedin.com/in/imani-greenidge-52952b53/"
              target="_blank"
            >
              <img className="links-icon" src="icons/linkedin-logo.png"></img>
            </a>
          </div>

          <div className="section">
            {/* <div className="section">
                        <a href="https://youtu.be/s67c0ojlkos" target="_blank">
                        <div className="row link z-depth-3">
                            <p className="link-text">Latest Release</p>
                        </div>
                        </a>
                    </div> */}

            <LinksContainer
              title="Latest Release"
              link="https://youtu.be/s67c0ojlkos"
            />

            <LinksContainer
              title="Long Story Short Vol 1 - SoundCloud"
              link="https://youtu.be/s67c0ojlkos"
            />

            <LinksContainer
              title="Long Story Short Vol 1 - YouTube"
              link="https://youtu.be/s67c0ojlkos"
            />

            <div className="section">
              <Link to="/">
                <div className="row link z-depth-3">
                  <p className="link-text">imanigreenidge.com</p>
                </div>
              </Link>
            </div>

            <LinksContainer
              title={
                <p>
                  I Can't Breathe- A Poem <br /> By Imani Greenidge
                </p>
              }
              link="https://youtu.be/s67c0ojlkos"
            />

            <LinksContainer
              title={
                <p>
                  Challenge ACCEPTED - <br /> CPT Mani
                </p>
              }
              link="https://youtu.be/s67c0ojlkos"
            />

            {/* <div className="section">
                        <a href="https://youtu.be/s67c0ojlkos" target="_blank">
                        <div className="row link z-depth-3">
                            <p className="link-text">Long Story Short Vol. 1 - SoundCloud</p>
                        </div>
                        </a>
                    </div>

                    <div className="section">
                        <a href="https://youtu.be/s67c0ojlkos" target="_blank">
                        <div className="row link z-depth-3">
                            <p className="link-text">Long Story Short Vol. 1 - YouTube</p>
                        </div>
                        </a>
                    </div>

                    <div className="section">
                    <Link to="/">
                        <div className="row link z-depth-3">
                            <p className="link-text">imanigreenidge.com</p>
                        </div>
                        </Link>
                    </div>

                    <div className="section">
                        <a href="https://youtu.be/s67c0ojlkos" target="_blank">
                        <div className="row link z-depth-3">
                            <p className="link-text">I Can't Breathe- A Poem <br /> By Imani Greenidge</p>
                        </div>
                        </a>
                    </div>

                    <div className="section">
                        <a href="https://youtu.be/s67c0ojlkos" target="_blank">
                        <div className="row link z-depth-3">
                            <p className="link-text">Challenge ACCEPTED - <br /> CPT Mani</p>
                        </div>
                        </a>
                    </div> */}

            {/* <div className="section">
                        <a href="https://youtu.be/s67c0ojlkos" target="_blank">
                        <div className="row link z-depth-3">
                            <p className="link-text">imanigreenidge.com - Coding</p>
                        </div>
                        </a>
                    </div>

                    <div className="section">
                        <a href="https://youtu.be/s67c0ojlkos" target="_blank">
                        <div className="row link z-depth-3">
                            <p className="link-text">imanigreenidge.com - Design</p>
                        </div>
                        </a>
                    </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Links;
