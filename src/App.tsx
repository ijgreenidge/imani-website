import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Coding from './Coding/Coding';
import Design from './Design/Design';
import Home from './Home/Home';
import Error from './Error/Error';
import NavBar from './navbar/NavBar';
import Footer from './Footer/Footer';
import Links from './Links/Links';

function App() {
  return (
     <Routes>
         <Route 
         path="/" 
         element={<NavWrapper Page={<Home />}/> }
          

         />
        <Route 
         path="/coding" 
         element={<NavWrapper Page={<Coding />} />} 

         />

        <Route 
         path="/design" 
         element={<NavWrapper Page= {<Design />} />} 

         />

        <Route 
         path="/links" 
         element={<Links />} 

         />

        <Route 
         path="*" 
         element={<Error />} 

         />
         
     </Routes>   
  );
}

function AppWrapper() {
    return (
      <BrowserRouter>
      {/* <NavBar /> */}
      <App />

      </BrowserRouter>
          
    );
  }
interface NavWrapperProps {
  Page : any;
}
  const NavWrapper:React.FC<NavWrapperProps>=({Page}) => {
    return (
      <>
      <NavBar />
      {Page}
      <Footer />
      </>
          
    );
  }

export default AppWrapper;
