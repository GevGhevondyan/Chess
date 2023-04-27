import React, { useState } from "react";
import whiteRook from "../../../ChessIcons/whiteRook.svg";
import blackRook from "../../../ChessIcons/blackRook.svg";
import whiteKnight from "../../../ChessIcons/whiteKnight.svg";
import blackKnight from "../../../ChessIcons/blackKnight.svg";
import whiteBishop from "../../../ChessIcons/whiteBishop.svg";
import blackBishop from "../../../ChessIcons/blackBishop.svg";
import whiteQueen from "../../../ChessIcons/whiteQueen.svg";
import blackQueen from "../../../ChessIcons/blackQueen.svg";
import "./style.css";

const PawnEnd = ({ color, setPawnEnd, changedPawnSquare }) => {
    const handleChecked = (e) => {
        changedPawnSquare.name = e.target.name;
        setPawnEnd(false);
    };
    return (
        <div className="pawnEndBackgroud">
            <div className="pawnEndWrapper">
                <img
                    src={color === "white" ? whiteQueen : blackQueen}
                    alt="queen"
                    name="queen"
                    onClick={handleChecked}
                />
                <img
                    src={color === "white" ? whiteRook : blackRook}
                    alt="rook"
                    name="rook"
                    onClick={handleChecked}
                />
                <img
                    src={color === "white" ? whiteBishop : blackBishop}
                    alt="bishop"
                    name="bishop"
                    onClick={handleChecked}
                />
                <img
                    src={color === "white" ? whiteKnight : blackKnight}
                    alt="knight"
                    name="knight"
                    onClick={handleChecked}
                />
            </div>
        </div>
    );
};

export default PawnEnd;
