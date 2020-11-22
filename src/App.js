import React from 'react'
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <GlobalStyle />
    
      <Hero />
      <Products heading='Chose Your Meal' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer />
      
    
    </Router>
  );
}

export default App;
