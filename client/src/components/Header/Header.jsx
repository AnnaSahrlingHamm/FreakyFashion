import React from "react";
import "./Header.css";
import images from "../../assets/index.js";

const Header = () => {
  return (
    <header>
      <div className="logocontainer">
        <img src={images.FREAKYFASHIONlogo} alt="Välkommen till Freaky Fashion!" />
      </div>
      <div className="formcontainer">
        <form>
          <input
            type="search"
            id="freakysearch"
            name="freakysearch"
            placeholder="Sök vår sajt!"
          />
          <input id="sökknapp" type="submit" value="Sök" />
        </form>
        <div id="headericons">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <i className="bi bi-heart-fill"></i>
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <i className="bi bi-basket2-fill"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
