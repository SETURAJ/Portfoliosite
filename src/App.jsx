import React, { useEffect } from 'react'
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList'
const App = () => {
  useEffect(()=>{
    document.title="Portfolio "
  },[])
  return (
    <div> 
      <Intro/>
      <About/>
      <ProductList/>
    </div>
  );
};

export default App;