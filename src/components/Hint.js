import React, { useState, useEffect } from 'react'

function Hint({ players, guessCounter }) {

    let oneHint = <div>
        <h2>Hint:</h2>
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
            {guessCounter !== 6 && (
                <div>
                    <div>
                        {guessCounter === 1 && oneHint}
                    </div>
                    <div>
                        {guessCounter === 2 && twoHint}
                    </div>
                    <div>
                        {guessCounter === 3 && threeHint}
                    </div>
                    <div>
                        {guessCounter === 4 && fourHint}
                    </div>
                    <div>
                        {guessCounter >= 5 && fiveHint}
                    </div>
                </div>
            )}
        </div>
    )

}

export default Hint