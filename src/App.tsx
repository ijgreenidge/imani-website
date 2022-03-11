import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Coding from './Coding';
import Design from './Design';
import Home from './Home/Home';

function App() {
  return (
     <Routes>
         <Route 
         path="/" 
         element={<Home />} 

         />
        <Route 
         path="/coding" 
         element={<Coding />} 

         />

        <Route 
         path="/design" 
         element={<Design />} 

         />

        <Route 
         path="*" 
         element={<h1>404. Not Found</h1>} 

         />


     </Routes>   
  );
}

function AppWrapper() {
    return (
      <BrowserRouter>
      <App />

      </BrowserRouter>
          
    );
  }

export default AppWrapper;
