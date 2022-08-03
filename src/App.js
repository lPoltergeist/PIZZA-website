import React from 'react'
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from './styles/globalStyles';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import {PizzaMenuData, PizzaMenuData2} from './Components/Products/Data'
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={PizzaMenuData}/>
      <Feature />
      <Products heading='Sweet Treats for You' data={PizzaMenuData2}/>
      <Footer/>
            </BrowserRouter>
    </div>
  );
}

export default App;
