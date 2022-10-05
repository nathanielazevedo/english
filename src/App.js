import { useState } from "react";
import "./App.css";
import nephew from "./audio/nephew.m4a";
import family from "./audio/family.m4a";
import grocery from "./audio/grocery.m4a";
import amazon from "./audio/amazon.m4a";

function App() {
  const [unMastered, setUnMastered] = useState(0);
  const [mastered, setMastered] = useState(0);
  const words = [
    {
      word: "nephew",
      pronounciation: "ne-few",
      audio: nephew,
      description: "How is your nephew?",
      status: localStorage.getItem("nephew"),
    },
    {
      word: "family",
      pronounciation: "fam-ehh-lee",
      audio: family,
      description: "I miss my family. They are in China.",
      status: localStorage.getItem("family"),
    },
    {
      word: "grocery",
      pronounciation: "grow-sure-e",
      audio: grocery,
      description: "I'm going to get groceries.",
      status: localStorage.getItem("grocery"),
    },
    {
      word: "amazon",
      pronounciation: "a-ma-zon",
      audio: amazon,
      description: "I bought it from amazon.",
      status: localStorage.getItem("amazon"),
    },
    {
      word: "pronounce",
      pronounciation: "pro-nown-ce",
      audio: "",
      description: "Sorry, I cannot pronounce that word.",
      status: localStorage.getItem("pronounce"),
    },
  ];

  const counts = words.reduce(
    (array, next) => {
      if (next.status === "true") {
        array[0]++;
        array[2]++;
      } else {
        array[1]++;
        array[2]++;
      }
      return array;
    },
    [0, 0, 0]
  );

  const setStatus = (name) => {
    const old = localStorage.getItem(name);
    if (old === "false") {
      localStorage.setItem(name, true);
      setMastered((o) => o + 1);
      setUnMastered((o) => o - 1);
    } else {
      localStorage.setItem(name, false);
      setUnMastered((o) => o + 1);
      setMastered((o) => o - 1);
    }
  };

  const Card = (props) => {
    return (
      <div className={props.word.status + " card"}>
        <div onClick={() => setStatus(props.word.word)}>
          {props.word.word}
          <span className="pro"> | {props.word.pronounciation}</span>
        </div>
        <p className="p">{props.word.description}</p>
        <audio controls>
          <source src={props.word.audio} type="audio/mp4" />
        </audio>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="counts">
          <span className="title">Cali's Words</span>
          <div className="stack">
            <span className="falseNum">{counts[1]}</span>
            <span className="trueNum">{counts[0]}</span>
            <span>{counts[2]}</span>
          </div>
        </div>
        {words.map((e) => {
          return <Card key={e.word} word={e} />;
        })}
      </header>
    </div>
  );
}

export default App;
