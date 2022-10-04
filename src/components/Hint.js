import React, { useState } from 'react'

function Hint({ players, setGameOver, gameOver }) {
    const [hintCounter, setHintCounter] = useState(0)

    const userLost = () => {
        setHintCounter(hintCounter + 1)
        if (hintCounter === 5) {
            setGameOver(!gameOver)
        }
    }
    console.log(gameOver)

    let oneHint = <div>
        <h3>height: {players.height}</h3>
        <h3>weight: {players.weight}</h3>
    </div>
    let twoHint = <div>
        {oneHint}       <h3>jersey number: {players.jersey}</h3>

    </div>
    let threeHint = <div>{twoHint} <h3>college: {players.college}</h3>
    </div>
    let fourHint = <div>{threeHint} <h3>team: {players.team}</h3></div>
    let fiveHint = <div>{fourHint} <h3>country: {players.country}</h3></div>


    return (
        <div>
            {hintCounter !== 6 && (
                <div>
                    {/* <!-- Rod --> */}
                    {hintCounter <= 4 && <button onClick={userLost}>Hint</button>}
                    
                    <h1>{hintCounter}</h1>
                    {hintCounter === 1 && oneHint}
                    {hintCounter === 2 && twoHint}
                    {hintCounter === 3 && threeHint}
                    {hintCounter === 4 && fourHint}
                    {hintCounter === 5 && fiveHint}

                </div>
            )}
        </div>
    )

}

export default Hint