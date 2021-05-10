import React, { useEffect, useState } from 'react';
import './App.css';

interface Question {
  nb: number;
  onDone: () => void
}

interface CountdownComponentProps {
  question: Question
}

export const CountdownComponent: React.FC<CountdownComponentProps> = (props) => {
  const [timer, setTimer] = useState(30);

  let startTimer = (() => {
    props.question.onDone()
    setTimer(30)
    clearInterval()
    if (timer == 30) {
      setInterval(() => {
        setTimer(timer => timer - 1)
      }, 1000)
    }
  })

  useEffect(() => {
    if (timer <= 0 || props.question.nb == 0) {
      startTimer()
    }
  })

  return (
    <div>
      <h3>00:{(timer<=9)?0:null}{timer}</h3>
    </div>
  )
}

