import "./App.css";
import nephew from "./audio/nephew.m4a";
import family from "./audio/family.m4a";
import grocery from "./audio/grocery.m4a";
import amazon from "./audio/amazon.m4a";

function App() {
  const words = [
    {
      word: "nephew",
      pronounciation: "ne-few",
      audio: nephew,
      description: "How is your nephew?",
    },
    {
      word: "family",
      pronounciation: "fam-ehh-lee",
      audio: family,
      description: "I miss my family. They are in China.",
    },
    {
      word: "grocery",
      pronounciation: "grow-sure-e",
      audio: grocery,
      description: "I'm going to get groceries.",
    },
    {
      word: "amazon",
      pronounciation: "a-ma-zon",
      audio: amazon,
      description: "I bought it from amazon.",
    },
  ];

  const Card = (props) => (
    <div className="card">
      <div>
        {props.word.word}
        <span className="pro">| {props.word.pronounciation}</span>
      </div>
      <p className="p">{props.word.description}</p>
      <audio controls>
        <source src={props.word.audio} type="audio/mp4" />
      </audio>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        {words.map((e) => {
          return <Card key={e.word} word={e} />;
        })}
      </header>
    </div>
  );
}

export default App;
