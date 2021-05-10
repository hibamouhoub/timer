import React, { useState } from 'react';
import './App.css';
import { CountdownComponent } from './CountdownComponent'

const App = () => {
  const [nb, setState] = useState(0);
  const [start, startQuizz] = useState(false);


  function onDone(): void {
    setState(nb => nb + 1);
  }


  return (
    !start ?
      <div className="App">
        <button onClick={() => startQuizz(true)}>Start Quizz</button>
      </div>
      :
      <div className="App">
        <h1>Question number {nb}</h1>
        <CountdownComponent question={{ nb, onDone }} />
      </div>
  )
};

export default App;
