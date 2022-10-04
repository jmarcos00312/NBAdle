import React, { useState } from 'react'
import './App.css';
import Keyboard from './components/keyboard'
import Guess from './components/guess'
import Hint from './components/Hint'

function App() {

  const [gameOver, setGameOver] = useState(false)


  const players = {
    img_url: "https://cdn.nba.com/headshots/nba/latest/260x190/203500.png",
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
        <h1>NBAdle</h1>
      </header>
      <div>
        <Guess players={players} />
        <Keyboard />
        {gameOver ? <div>You lost</div> : <Hint players={players} setGameOver={setGameOver} gameOver={gameOver} />}

      </div>
    </div>
  );
}

export default App;


