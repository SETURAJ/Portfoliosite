import React, { useEffect,useContext} from 'react'
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/productList'
import Contact from './components/contact/contact'
import Toggle from './components/toggle/toggle';
import { ThemeContext } from './context';

const App = () => {
  useEffect(()=>{
    document.title="Portfolio"
  },[])
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#000000": "white", 
    color:darkMode && "white",
    }}> 
      
      <Toggle />
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;