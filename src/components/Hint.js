import React, { useState } from 'react'

function Hint({ players, setGameOver, gameOver }) {
    const [hintCounter, setHintCounter] = useState(0)

    const userLost = () => {
        setHintCounter(hintCounter + 1)
        if (hintCounter === 5) {
            setGameOver(true)
        }


    }
    console.log(gameOver)

    return (
        <div className="hintButton">

            <button onClick={userLost}>Hint</button>
            <h1>{hintCounter}</h1>
        </div>
    )
}

export default Hint