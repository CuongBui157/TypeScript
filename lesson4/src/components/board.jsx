import React, { useEffect, useState } from "react"
import Square from "./square"

const Board = () => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [timer, setTimer] = useState(3)

    const handlePlay = (position) => {
        const newGame = game.map((g, index) => {
            if (position === index) {
                return player ? "X" : "O"
            }
            return g
        })
        setGame(newGame)
        setPlayer(!player)
    }

    const handleAutoPlay = () => {
        const emptyGame = game.map((square, index) => square ? null : index).filter(item => item !== null)
        const position = emptyGame[Math.floor(Math.random() * emptyGame.length)]
        handlePlay(position)
        setTimer(3)
    }

    const listWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWinner = () => {
        for (let i = 0; i < listWin.length; i++) {
            const [p1, p2, p3] = listWin[i]
            if (game[p1] === game[p2] && game[p2] === game[p3]) {
                return game[p1]
            }
        }
    }

    // Effect
    useEffect(() => {
        if (timer < 0) {
            handleAutoPlay()
        }
        const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)

        return () => clearInterval(interval)
    })

    return <>
        <div>
            <h2>Winner is: {checkWinner()}</h2>
            <h2>Timer: {timer}</h2>
        </div>
        <div className="grid grid-cols-3 gap-2">
            <Square value={game[0]} handlePlay={() => handlePlay(0)} />
            <Square value={game[1]} handlePlay={() => handlePlay(1)} />
            <Square value={game[2]} handlePlay={() => handlePlay(2)} />
            <Square value={game[3]} handlePlay={() => handlePlay(3)} />
            <Square value={game[4]} handlePlay={() => handlePlay(4)} />
            <Square value={game[5]} handlePlay={() => handlePlay(5)} />
            <Square value={game[6]} handlePlay={() => handlePlay(6)} />
            <Square value={game[7]} handlePlay={() => handlePlay(7)} />
            <Square value={game[8]} handlePlay={() => handlePlay(8)} />
        </div>
    </>

}

export default Board
