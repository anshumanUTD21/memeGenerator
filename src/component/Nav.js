import React from "react";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src="trollicon.png" alt="troll icon" className="icon-img" />
        <h1 className="nav-heading">Meme Generator</h1>
      </div>
      <div className="nav-right">
        <span>React Course - Project 3</span>
      </div>
    </div>
  );
}
export default Nav;
