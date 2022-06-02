import React, { useEffect } from 'react'
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/productList'
import Contact from './components/contact/contact'
const App = () => {
  useEffect(()=>{
    document.title="Portfolio "
  },[])
  return (
    <div> 
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;