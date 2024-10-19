import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';

var text1= ""
var text = new SpeechSynthesisUtterance();

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function main() {
    text.text = inputValue;
    window.speechSynthesis.speak(text);
  }

  return (
    <div className="App">
      <header className="App-about">
        <h2>
          Welcome to
        </h2>
        <h1>
          AccessiRead
        </h1>
        <h3>
          This is app focuses on the inability for people to be able to read, with disabilities such as dyslexia and blindess. To use it you simply just paste in the text you want to read, then press submit and it will begin to read the text to you. 
        </h3>
      </header>

      <div className="App-reader">
        <h2>
          Text to speech reader
        </h2>  
        <input id="texti" className="text-input" placeholder="What do you want to say?" value={inputValue} onChange={handleInputChange }
        >
        </input>  
        <br></br>   
        <button onClick={ () => { main()
        }
        }>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;