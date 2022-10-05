import React, { useState } from 'react'





function Guess({ players }) {
  const [wrongLetters, setWrongLetters] = useState([])

  const [correctLetters, setCorrectLetters] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [guessCounter, setGuessCounter] = useState(1)
  const [userGuess, setUserGuess] = useState([])
  // const userGuess = []

  // let gameStart = <div classname="letters-blanks"> </div>
  let gameStart = Array.from(players.name).map(e => {
    return e === " " ? <p className="eachLetters">{e}</p> : <p className="eachLetters">_</p>
  })

  // let gameStart = <div className="letters-blanks">{players.name.replace(/[a-zA-Z]/, '_').toUpperCase()}</div>

  const hadleSubmit = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
    if (players.name.toLowerCase().trim() === inputValue.toLowerCase().trim()) {
      console.log("win")
    }
    else {
      setUserGuess([...userGuess, inputValue])
    }
    setInputValue("")
  }
  console.log(userGuess)



  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const checkIfInputMatch = () => {
    if (inputValue.trim() === players.name) {
      setCorrectLetters([...correctLetters, inputValue])
    }
    else {
      setWrongLetters([...wrongLetters, inputValue])
    }
    setInputValue("")
  }

  return (
    <div>
      <img src={players.img_url} id="img_url" alt="Profile pic" />
      <div className="wrongLettersDiv">

        <p id="eachWrongGuesses">{userGuess.map(e => {
          return <p>{e}</p>
        })}</p>
      </div>
      <h1 className="toBlank">{gameStart}</h1>
      <form onSubmit={hadleSubmit}>
        <input
          id="userInputLetters"
          type="text"
          // value={inputValue}
          onChange={(e) => handleChange(e)}
        // onKeyPress={e => handleInputValue(e)}
        />
        <input
          type="submit"
          name="submit"
        />
      </form>
      guess
    </div>
  )
}

export default Guess