import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [hoverCoding, setHoverCoding] = useState(false);
    const [hoverGraphics, setHoverGraphics] = useState(false);
    return (
        <>
            <main>
                <div className="header">
                    <img className="responsive-img" src="images/imaniheadersmile.jpg" alt="Imani Greenidge, Imani, CptMani, CPT Mani, CPT"></img>
                </div>

                <div className="container">
                    <div className="section about">
                        <div className="row">
                            <div className="box z-depth-4">
                                <h1 className="flow-text heading center">Born and raised in Brooklyn, NY. Imani Greenidge sets his sights on impacting the world with his creations.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="section info">
                        <div className="row">
                            <div onMouseEnter={() => setHoverCoding(true)} onMouseLeave={() => setHoverCoding(false)} className="col l6 s12 center coding">
                                <Link to="/coding">
                                    <img className="responsive-img icon" src="images/codingsymbol.png"></img>
                                    <h3 className="heading">Coding</h3>
                                </Link>
                            </div>

                            <div onMouseEnter={() => setHoverGraphics(true)} onMouseLeave={() => setHoverGraphics(false)} className="col l6 s12 center graphic-design">
                                <Link to="/design">
                                    <img className="responsive-img icon" src="images/iglogo.png"></img>
                                    <h3 className="heading">Graphic Design</h3>
                                </Link>
                            </div>
                        </div>

                        <div className="row hide-on-med-and-down">
                            <div className="col l6 s12">
                                {hoverCoding && (<p className="coding-text center">First learning how to code during his sophomore year of high school through an after school program named "Code Nation" (FKA ScriptEd). From there he took what he learned and started working on his own projects and websites. Click here to view the coding porfolio.</p>)}
                            </div>


                            <div className="col l6 s12">
                                {hoverGraphics && (<p className="graphic-design-text center">Self-taught graphic designer, who first started to take interest in graphic design at the age of 11. Through various YouTube tutorials on how to do various design techniques he  started making logos, cover art and cartoons
                                    for people. Click here to view the design portfolio.</p>)}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
  export default Home;