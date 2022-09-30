import React, { useState, useEffect } from 'react'
import './App.css';
import Keyboard from './keyboard.js'


function App() {
  const [randomedPlayerNum, setRandomedPlayerNum] = useState(237)
  const [randomedPlayer, setRandomedPlayer] = useState(null)


  // useEffect(() => {
  //   fetch(`https://balldontlie.io/api/v1/players/237`, {
  //     method: "GET",
  //     mode: 'cors',
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         console.log(user)
  //       });
  //     }
  //   })
  // }, [])


  const players = {
    name: 'Steven Adams',
    team: "MEM",
    jersey: "4",
    position: "C",
    height: "6-11",
    weight: "265lbs",
    college: "Pittsburgh",
    country: "New Zealand"
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <h1>{players.name}</h1>
        <p>{randomedPlayer}</p>
        <Keyboard />
      </header>
    </div>
  );
}

export default App;


