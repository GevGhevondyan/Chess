import React, { useState } from "react";
import ChessBoard from "./Components/ChessBoard";
import "./style.css";

const Chess = () => {
    const [turn, setTurn] = useState("white");
    const onChangeTurn = (turn) => {
        setTurn(turn);
    };
    return (
        <div className="chessWrapper">
            <span className="whoseMove">{turn}'s turn</span>
            <ChessBoard onChangeTurn={onChangeTurn} />
        </div>
    );
};

export default Chess;
