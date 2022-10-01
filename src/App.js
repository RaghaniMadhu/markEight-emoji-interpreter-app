import React, { useState } from "react";
import "./styles.css";

const emojiDictinoary = {
  "♔": "White Chess King",
  "♕": "White Chess Queen",
  "♗": "White Chess Bishop",
  "♘": "White Chess Knight",
  "♙": "White Chess Pawn",
  "♖": "White Chess Rook",
  "❀": "Flower",
  "☆": "Star",
  "♡": "Heart",
  "♫": "Music",
  "♚": "Black Chess King",
  "♛": "Black Chess Queen",
  "♝": "Black Chess Bishop",
  "♞": "Black Chess Knight",
  "♟": "Black Chess Pawn",
  "♜": "Black Chess Rook"
};

const emojis = Object.keys(emojiDictinoary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputMeaningHandler(event) {
    var userInput = event.target.value;
    if (userInput.length > 0) {
      var meaning = emojiDictinoary[userInput];
      if (meaning === undefined) {
        meaning = "sorry, we don't have this in our db";
      }
      setMeaning(meaning);
    }
  }

  function emojiInterpreter(emoji) {
    var meaning = emojiDictinoary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="title">Emoji Interpreter</div>
      </div>

      <section className="section section-alt container-center">
        <div className="container">
          <input maxLength="1" onChange={inputMeaningHandler} />
          <h2>{meaning}</h2>
          <h3>Our Emojis:</h3>
          <ul>
            {emojis.map((emoji) => {
              return (
                <li
                  key={emoji}
                  className="list-emojis-inline"
                  onClick={() => emojiInterpreter(emoji)}
                >
                  {emoji}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="footer">
        <div className="footer-header">About</div>
        <p>This App tells you the meaning of Black & White Emojis</p>
      </div>
    </div>
  );
}
