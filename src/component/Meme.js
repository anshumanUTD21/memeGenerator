import React from "react";

function Meme() {
  return (
    <main className="meme-container">
      <form className="input-box">
        <input type="text" id="text-top" placeholder="Top text" />
        <input type="text" id="text-bottom" placeholder="Bottom text" />
      </form>
      <div className="button-box">
        <button type="submit" className="submit-btn">
          Get a new meme image 🖼️
        </button>
      </div>
    </main>
  );
}

export default Meme;
