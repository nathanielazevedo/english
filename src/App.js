import { useState } from "react";
import "./App.css";
import nephew from "./audio/nephew.m4a";
import family from "./audio/family.m4a";
import grocery from "./audio/grocery.m4a";
import amazon from "./audio/amazon.m4a";
import california from "./audio/california.m4a";
import CountStack from "./CountStack";

function App() {
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
    {
      word: "California",
      pronounciation: "cal-e-for-nia",
      audio: california,
      description: "I live in California.",
      status: localStorage.getItem("california"),
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

  const setBigStatus = (name) => {
    const old = localStorage.getItem(name);
    if (old === "false") {
      localStorage.setItem(name, true);
    } else {
      localStorage.setItem(name, false);
    }
  };

  const Card = (props) => {
    const booleanStatus = props.word.status === "false" ? false : true;
    const [status, setStatus] = useState(booleanStatus);

    return (
      <div
        className={`${status} card`}
        onClick={() => {
          setBigStatus(props.word.word);
          setStatus((o) => !o);
        }}
      >
        <div>
          {props.word.word}
          <span className="pro"> | {props.word.pronounciation}</span>
        </div>
        <p className="p">{props.word.description}</p>
        <audio controls onClick={(evt) => evt.stopPropagation()}>
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
            <span className="falseNum">' </span>
            <span className="trueNum">' </span>
            <span>' </span>
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
