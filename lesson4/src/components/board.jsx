import React, { useState } from "react"
import Square from "./square"

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


const Board = ({ squares, onClick }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)

    const checkWinner = () => {
        for (let i = 0; i < listWin.length; i++) {
            const [p1, p2, p3] = listWin[i]
            if (game[p1] && game[p1] === game[p2] && game[p1] === game[p3]) {
                return game[p1]
            }
        }
        return null
    }



    const handlePlay = (position) => {
        if (checkWinner()) {
            return
        }
        const newGame = game.map((g, index) => {
            if (position === index) {
                return player ? "X" : "O"
            }
            return g
        })
        setGame(newGame)
        setPlayer(!player)
    }




    const Reset = () => {
        setGame([null, null, null, null, null, null, null, null, null])
        setPlayer(player ? "X" : "O")
        return;
    }

    return <>
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
        <h2>Winner is: {checkWinner()}</h2>
        <button onClick={Reset} className="border-spacing-0 bg-red-500">Chơi lại</button>
    </>

}

export default Board
