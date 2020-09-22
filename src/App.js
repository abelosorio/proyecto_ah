import React from 'react';
import questionImage from './question_image.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="question-section">
        <img src={questionImage} className="question-image" alt="logo" />
      </header>

      <content className="answer-section">
        <input type="text" className="answer-input" autofocus="1" placeholder="?" />
        <input type="button" className="answer-button" value="avanzar" />
      </content>
    </div>
  );
}

export default App;
