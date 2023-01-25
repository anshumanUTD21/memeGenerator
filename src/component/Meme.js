import React from "react";
import memeData from "../memeData";


function Meme() {
  const [memeImage,setMemeImage]=React.useState({
    topText:"",
    bottomText:"",  
    randomImage:"http://i.imgflip.com/1bij.jpg"
  });
  const [allMemeImage,setAllMemeImage]=React.useState(memeData);


  function randomImageGen() {
    const memeArr = allMemeImage.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArr.length);
    const url=memeArr[randomIndex].url;
    setMemeImage(prevState=>{
          return{
            ...prevState,
            randomImage:url
          }   
      
    })
  
  }

  return (
    <main className="meme-container">
      
      <div className="input-box">
        <input type="text" id="text-top" placeholder="Top text" />
        <input type="text" id="text-bottom" placeholder="Bottom text" />
      </div>
      <div className="button-box">
        <button onClick={randomImageGen} type="submit" className="submit-btn">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="img-container">
        <img src={memeImage.randomImage} className="meme-img" alt="meme" />
      </div>
      
    </main>
  );
}

export default Meme;
