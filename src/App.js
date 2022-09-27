import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [randomedPlayerNum, setRandomedPlayerNum] = useState(237)
  const [randomedPlayer, setRandomedPlayer] = useState(null)


  useEffect(() => {
    fetch(`https://balldontlie.io/api/v1/players/237`, {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user)
        });
      }
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <h1>{randomedPlayerNum}</h1>
        <p>{randomedPlayer}</p>
      </header>
    </div>
  );
}

export default App;


