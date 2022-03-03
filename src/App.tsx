import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
            <div className="navbar-fixed">
                <nav className="black z-depth-0 nav-center">
                    <div className="nav-wrapper">
                        <a href="index.html" className="brand-logo center"><img src="images/imanilogo2noborder.png" width="60"  /></a>
                        <ul className="left">
                            <li>
                                <a href="index.html" className="red-text subText">Home</a>
                            </li>
                             <li>
                                <a href="coding.html" className="white-text subText">Coding</a>
                            </li> 
                        </ul>
                        <ul className="right">
                            <li>
                                <a href="madebymani.html" className="white-text subText">MBM</a>
                            </li>
                            <li>
                                <a href="coding.html" className="white-text subText">Coding</a>
                            </li>
    
    
                            <li>
                                <a href="design.html" className="white-text subText">Design</a>
                            </li>
                        </ul>
    
                    </div>
                </nav>
            </div>
      
    
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
                        <div className="col l6 s12 center coding">
                            <a href="coding.html">
                    <img className="responsive-img icon" src="images/codingsymbol.png"></img>
                    <h3 className="heading">Coding</h3>
                    </a>
                        </div>
    
                         <div className="col l4 s12 center mbm">
                            <a href="madebymani.html">
                    <img className="responsive-img icon mbm-img" src="images/mbmlogo.png"></img>
                    <h3 className="heading">Made By Mani</h3>
                    </a>
                        </div>
    
    
                        <div className="col l6 s12 center graphic-design">
                            <a href="design.html">
                    <img className="responsive-img icon" src="images/iglogo.png"></img>
                    <h3 className="heading">Graphic Design</h3>
                    </a>
                        </div>
                    </div>
    
                    <div className="row hide-on-med-and-down">
                        <div className="col l6 s12">
                            <p className="coding-text center">First learning how to code during his sophomore year of high school through an after school program named "Code Nation" (FKA ScriptEd). From there he took what he learned and started working on his own projects and websites. Click here to view the coding porfolio.</p>
                        </div>
    
                        <div className="col l4 s12">
                            <p className="mbm-text center">
                                Opened for sales on May 27th, 2019. Made By Mani is a collection of designs created by Imani. All products are printed, shipped and fulfilled by Teespring. Click here to go to the Made By Mani shopping page.</p>
                        </div> 
    
                        <div className="col l6 s12">
                            <p className="graphic-design-text center">Self-taught graphic designer, who first started to take interest in graphic design at the age of 11. Through various YouTube tutorials on how to do various design techniques he  started making logos, cover art and cartoons
                                for people. Click here to view the design portfolio.</p>
                        </div>
                    </div>
    
                    <div className="divider"></div> 
    
                    <div className="section">
                        <div className="row">
                            <div className="box z-depth-4">
                                <h1 className="flow-text heading center">Multi-talented, multi-faceted Imani strives to have expertise in many areas.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row connect">
                            <div className="col s12 l6 center">
                                <a href="https://codenation.org/imani-greenidge/" target="_blank">
                                    <h5 className="center heading">Article about me from Code Nation</h5>
                                    <blockquote>
                                        "He gave an inspiring speech at the Code Nation fundraiser in 2018, talking specifically about the Hackathon that taught him so much."
                                    </blockquote>
                                </a>
                            </div>
    
                            <div className="col s12 l6 center">
                                <a href="https://www.linkedin.com/in/imani-greenidge-52952b53/">
                                    <h5 className="heading">Connect with me on LinkedIn</h5>
                                    <img className="responsive-img" src="https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/74/a1/a4/74a1a400-55d5-6e07-4eee-532c2e9ecaa5/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg" width="100"></img>
                                </a>
                            </div>
    
                        </div>
    
                    </div>
                </div>
                
            </div>
        </main>
    
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
                            <li><a className="grey-text text-lighten-3" href="https://github.com/ijgreenidge" target="_blank">GitHub</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/imani-greenidge-52952b53/" target="_blank">LinkedIn</a></li>
                             <li><a className="grey-text text-lighten-3" href="http://bit.ly/madebymani" target="_blank">Made By Mani</a></li>
                             <li><a className="grey-text text-lighten-3" href="updates.html">Updates</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Made By Mani
                </div>
            </div>
        </footer>
    </>
    
        
  );
}

export default App;
