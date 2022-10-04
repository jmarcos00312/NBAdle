import React, { useState } from 'react'





function Guess({ players }) {
  const [wrongLetters, setWrongLetters] = useState([])
  const [correctLetters, setCorrectLetters] = useState([])
  const [guess, setGuess] = useState([])

  // let gameStart = <div classname="letters-blanks"> </div>
  let gameStart = Array.from(players.name).map(e => {
    return e === " " ? <p className="eachLetters">{e}</p> : <p className="eachLetters">_</p>
  })

  // let gameStart = <div className="letters-blanks">{players.name.replace(/[a-zA-Z]/, '_').toUpperCase()}</div>



  return (
    <div>
      <img src={players.img_url} id="img_url" alt="Profile pic" />
      <p id="wrongLetters">{wrongLetters}</p>
      <h1 className="toBlank">{gameStart}</h1>
      guess
    </div>
  )
}

export default Guess