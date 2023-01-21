import React from "react";
import memeData from "../memeData";
/**
 * Challenge: Get a random image from the `memesData` array
 * when the "new meme image" button is clicked.
 *
 * Log the URL of the image to the console. (Don't worry
 * about displaying the image yet)
  const randomIndex = Math.floor(Math.random() * arr.length);
*/

function Meme() {
  let randomUrl;
  function randomImageGen() {
    const memeArr = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArr.length);

    randomUrl = memeArr[randomIndex].url;
    console.log(randomUrl);
  }

  return (
    <main className="meme-container">
      <p>{randomUrl}</p>
      <div className="input-box">
        <input type="text" id="text-top" placeholder="Top text" />
        <input type="text" id="text-bottom" placeholder="Bottom text" />
      </div>
      <div className="button-box">
        <button onClick={randomImageGen} type="submit" className="submit-btn">
          Get a new meme image 🖼️
        </button>
      </div>
    </main>
  );
}

export default Meme;
