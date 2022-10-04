import React, { useState } from 'react'

const Keyboard = () => {

  const [letters, setLetters] = useState('abcdefghijklmnopqrstuvwxyz')
  let letterArr = Array.from(letters.toUpperCase()).map((letter, ind) => {
    return <button className="letter"
      key={ind}
      value={letter}
    >
      {letter}
    </button>
  })




  console.log(letterArr)


  return (
    <div>
      {letterArr}
    </div>
  )
}


export default Keyboard