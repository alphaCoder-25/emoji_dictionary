import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
  "😀": "grinning face",
  "😁": "beaming face",
  "😂": "face with tears of joy",
  "🤣": "rolling on the floor laughing",
  "😜": "winking face with toungue",
  "😊": "smiling face",
  "😉": "winking face",
  "😎": "smiling face with sunglasses",
  "😍": "smiling face with heart eyes",
  "😘": "face blowing a kiss",
  "🤗": "hugging face",
  "🤩": "star-stuck",
  "🤔": "thinking face",
  "😋": "face souvering food",
  "🙂": "slightly smiling face",
  "🤨": "face with raised eyebrow",
  "😐": "neutral face",
  "😑": "expressionless face",
  "😶": "face in clouds",
  "🙄": "face with rolling eyes",
  "😏": "smirking face",
  "😥": "sad but relieved face",
  "😮": "faced with open mouth",
  "😪": "sleepy face",
  "🥱": "yawning face",
  "😴": "sleeping face"
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
