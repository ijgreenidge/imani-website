import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Design.css";
import ReactPlayer from "react-player";
import useShowMore from "../useShowMore";

function Design() {
  const { element, seeMore } = useShowMore();

  return (
    <div>
      <main>
        <div className="container">
          {/* <div className="section hide-on-large-only">
            <div className="row">
              <div className="box z-depth-5 hide-on-large-only">
                <p className="flow-text heading hide-on-large-only">
                  Self-taught graphic designer, who first started to take
                  interest in graphic design at the age of 11. Through various
                  YouTube tutorials on how to do various design techniques he
                  started making logos, cover art and cartoons.
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="showcase">
          <div className="container">
            <div className="row center">
              <h1 className="center heading">Logos</h1>
              <div className="col s12 l6">
                <ReactPlayer
                  className="logoVideo"
                  url="images/BWLB_Logo_Progression2.mp4"
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="95%"
                ></ReactPlayer>
              </div>

              <div className="col s12 l3">
                <img
                  className="responsive-img"
                  width="300"
                  src="images/imanilogo.png"
                />
              </div>

              <div className="col s12 l3">
                <img
                  className="responsive-img"
                  width="300"
                  src="images/buttahlogo3.png"
                />
              </div>

              <div className="row">
                <div className="col s12 l3">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/dev_yen.jpg"
                  />
                </div>

                <div className="col s12 l3">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/Hooded_Ent_Profile_Picture.jpg"
                  />
                </div>
              </div>

              {element}
            </div>
          </div>
        </div>

        {seeMore && (
          <div className="container">
            <div className="section logos">
              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/BWLB_Logov2.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/magickmimosas_final.png"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/mbmlogo2blacktrans.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/captainslogo1.png"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/caylynn_logo.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/bwlb_jolly_roger.png"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/lvp_logo_black.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/Klipto_Logov2.png"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/locked3.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/wopstarzzlogo2.png"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/caylynnlogo1noborderblack.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/lswlogo1.png"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/buttahlogo2.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/mj1.png"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/nyzhaia_a_logo.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/jahfitness.png"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/teebolt1.png"
                  />
                </div>

                <div className="col s12 l6 center-align">
                  <img
                    className="responsive-img"
                    width="300"
                    src="images/luhmia.png"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="divider"></div>
        <div className="showcase section">
          <div className="container">
            <div className="row">
              <h1 className="center heading">Cartoons</h1>
              <div className="col s12 l6 center">
                <img
                  className="responsive-img z-depth-5 bottom"
                  src="images/ashley-cartoon3.jpg"
                />
              </div>

              <div className="col s12 l3">
                <img
                  className="responsive-img z-depth-3 bottom"
                  width="300"
                  src="images/jasoncartoon.jpg"
                />
              </div>

              <div className="col s12 l3">
                <img
                  className="responsive-img z-depth-3 bottom"
                  width="300"
                  src="images/kapricartoon.jpg"
                />
              </div>
            

            <div className="row">
              <div className="col s12 l3">
                <img
                  className="responsive-img z-depth-3 bottom"
                  width="300"
                  src="images/ervcartoon2.jpg"
                />
              </div>

              <div className="col s12 l3">
                <img
                  className="responsive-img z-depth-3 bottom"
                  width="300"
                  src="images/imani_lost_cartoon3.jpg"
                />
                </div>
              </div>
              {element}
            </div>
          </div>
        </div>
        {seeMore && (
          <div className="container">
            <div className="cartoons section">
              <div className="row">
                <div className="col s12 l4">
                  <img
                    className="responsive-img z-depth-5 center"
                    width="300"
                    src="images/imanicartoon1.jpg"
                  />
                </div>

                <div className="col s12 l4">
                  <img
                    className="responsive-img z-depth-5"
                    width="300"
                    src="images/ashley-cartoon4.jpg"
                  />
                </div>

                <div className="col s12 l4">
                  <img
                    className="responsive-img z-depth-5 center"
                    width="300"
                    src="images/isabelacartoon2.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Design;
