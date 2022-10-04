import "./App.css";

function App() {
  const words = [
    {
      word: "nephew",
      pronounciation: "ne-few",
      audio: "../audio/nephew",
    },
    {
      word: "family",
      pronounciation: "fa-mi-lee",
      audio: "../audio/family",
    },
    {
      word: "grocery",
      pronounciation: "grow-sure-e",
      audio: "../audio/grocery",
    },
    {
      word: "amazon",
      pronounciation: "a-ma-zon",
      audio: "../audio/grocery",
    },
  ];

  const Card = (props) => (
    <div className="card">
      <div>
        {props.word.word}{" "}
        <span className="pro">| {props.word.pronounciation}</span>
      </div>
      <p className="p">I miss my family. They are in China.</p>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        {words.map((e) => {
          return <Card word={e} />;
        })}
      </header>
    </div>
  );
}

export default App;
