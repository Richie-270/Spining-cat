import React, { useState , useRef} from "react";
import Cats from '../assets/Cats.gif';
import CatsImg from '../assets/Cats.png';
import catsound from '../assets/catsound.wav';
import '../styles/cat.css';

const Cat = () => {
  const [cat, setCat] = useState(false);

  const audioRef = useRef(new Audio(catsound));

  const toggleCat = () => {
      setCat(true);
      audioRef.current.play();
      console.log("true")

      setTimeout(()=>{
        setCat(false)
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        console.log("false")
      }, 3000)
  }

  

  return (
    <>
      <div className="spin-cat">
        <button
        onClick={toggleCat}
        className="cat-button">
        <img src={cat ? Cats : CatsImg} alt="gato" />
        </button>
      </div>
    </>
  );
}

export default Cat;
