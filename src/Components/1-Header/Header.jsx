import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [mode, setMode] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (mode == "light"){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
    else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);
  const [showModal, setModal] = useState(false);
  return (
    <header className="flex">
      {/* that div it's a tricky move to force nave placed in center althought we give it space between */}
      <button
        className="menu icon-menu flex"
        onClick={() => {
          setModal(true);
        }}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Article</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <button onClick={()=>{
        // Send Value to LocalStorage
        localStorage.setItem("currentMode",mode === "dark" ? "light" : "dark")
        // Get value from Local storage
        setMode(localStorage.getItem("currentMode"))
      }} className="mode flex">
        {mode === "dark" ? (<span className="icon-moon-o"></span>) : (<span  className=".icon-sun"></span>)}
      </button>

      {showModal && (
        <div className=" fixed">
          <div className="modal">
            <ul>
              <li>
                <button
                  className="icon-times"
                  onClick={() => {
                    setModal(false);
                  }}
                />
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Article</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
