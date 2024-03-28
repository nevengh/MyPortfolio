import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Components/1-Header/Header";
import Hero from "./Components/2-Hero/Hero";
import Main from "./Components/3-Main/Main";
import Contact from "./Components/4-Contact/Contact";
import Footer from "./Components/5-Footer/Footer";
function App() {
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 300 ){
        setShowScroll(true)
      }
      else{
        setShowScroll(false)
      }
    })
  })
  const [ showscroll , setShowScroll ] = useState(false)
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      
        <a style={{opacity : showscroll ? 1 :0 ,transition: "0.4s"}} href="#up">
          <button className="scroll2Top icon-keyboard_arrow_up" />
        </a>
      
    </div>
  );
}

export default App;
