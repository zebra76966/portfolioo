import React, { useContext } from 'react';
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Tabsss from "./components/tabs/Tabsss.jsx"

const App = () => {
const theme=useContext(ThemeContext);
const darkMode=theme.state.darkMode;
  return (
    <div 
    style={{
      backgroundColor:darkMode?"#222":"white",
      color:darkMode&&"white",
    }}
    >
      <Toggle />
      <Intro />
      <About />
      <Tabsss/>
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;