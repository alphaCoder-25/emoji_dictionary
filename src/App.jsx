import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐": "grinning face",
  "๐": "beaming face",
  "๐": "face with tears of joy",
  "๐คฃ": "rolling on the floor laughing",
  "๐": "winking face with toungue",
  "๐": "smiling face",
  "๐": "winking face",
  "๐": "smiling face with sunglasses",
  "๐": "smiling face with heart eyes",
  "๐": "face blowing a kiss",
  "๐ค": "hugging face",
  "๐คฉ": "star-stuck",
  "๐ค": "thinking face",
  "๐": "face souvering food",
  "๐": "slightly smiling face",
  "๐คจ": "face with raised eyebrow",
  "๐": "neutral face",
  "๐": "expressionless face",
  "๐ถ": "face in clouds",
  "๐": "face with rolling eyes",
  "๐": "smirking face",
  "๐ฅ": "sad but relieved face",
  "๐ฎ": "faced with open mouth",
  "๐ช": "sleepy face",
  "๐ฅฑ": "yawning face",
  "๐ด": "sleeping face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! We don't have this in our Database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={emojiInputHandler}></input>

      <h2> {meaning} </h2>

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5 rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
