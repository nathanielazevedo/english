import "./App.css";

function App() {
  const words = [
    {
      word: "nephew",
      pronounciation: "ne-few",
      audio: "../audio/nephew",
      description: "How is your nephew?",
    },
    {
      word: "family",
      pronounciation: "fa-mi-lee",
      audio: "../audio/family",
      description: "I miss my family. They are in China.",
    },
    {
      word: "grocery",
      pronounciation: "grow-sure-e",
      audio: "../audio/grocery",
      description: "I'm going to get groceries.",
    },
    {
      word: "amazon",
      pronounciation: "a-ma-zon",
      audio: "../audio/grocery",
      description: "I bought it from amazon.",
    },
  ];

  const Card = (props) => (
    <div className="card">
      <div>
        {props.word.word}{" "}
        <span className="pro">| {props.word.pronounciation}</span>
      </div>
      <p className="p">{props.word.description}</p>
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
