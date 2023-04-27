import React, { useEffect, useState } from "react";
import PawnEnd from "./Components/PawnEnd";
import WhiteRook from "../ChessIcons/whiteRook.svg";
import BlackRook from "../ChessIcons/blackRook.svg";
import WhiteKnight from "../ChessIcons/whiteKnight.svg";
import BlackKnight from "../ChessIcons/blackKnight.svg";
import WhiteBishop from "../ChessIcons/whiteBishop.svg";
import BlackBishop from "../ChessIcons/blackBishop.svg";
import WhiteQueen from "../ChessIcons/whiteQueen.svg";
import BlackQueen from "../ChessIcons/blackQueen.svg";
import WhiteKing from "../ChessIcons/whiteKing.svg";
import BlackKing from "../ChessIcons/blackKing.svg";
import WhitePawn from "../ChessIcons/whitePawn.svg";
import BlackPawn from "../ChessIcons/blackPawn.svg";
import QayleluDzen from "../ChessSounds/qayleluDzen.mp3";
import uteluDzen from "../ChessSounds/uteluDzen.mp3";
import "./style.css";

const ChessBoard = ({ onChangeTurn }) => {
    const blackBlocks = [
        "a1",
        "a3",
        "a5",
        "a7",
        "b2",
        "b4",
        "b6",
        "b8",
        "c1",
        "c3",
        "c5",
        "c7",
        "d2",
        "d4",
        "d6",
        "d8",
        "e1",
        "e3",
        "e5",
        "e7",
        "f2",
        "f4",
        "f6",
        "f8",
        "g1",
        "g3",
        "g5",
        "g7",
        "h2",
        "h4",
        "h6",
        "h8",
    ];
    const whiteBlocks = [
        "a2",
        "a4",
        "a6",
        "a8",
        "b1",
        "b3",
        "b5",
        "b7",
        "c2",
        "c4",
        "c6",
        "c8",
        "d1",
        "d3",
        "d5",
        "d7",
        "e2",
        "e4",
        "e6",
        "e8",
        "f1",
        "f3",
        "f5",
        "f7",
        "g2",
        "g4",
        "g6",
        "g8",
        "h1",
        "h3",
        "h5",
        "h7",
    ];
    const whiteNumbers = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"];
    const blackNumbers = ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"];
    const [playingBy, setPlayingBy] = useState("white");
    const [squares, setSquares] = useState([
        { id: "a1", image: WhiteRook, color: "white", name: "rook" },
        { id: "a2", image: WhitePawn, color: "white", name: "pawn" },
        { id: "a3" },
        { id: "a4" },
        { id: "a5" },
        { id: "a6" },
        { id: "a7", image: BlackPawn, color: "black", name: "pawn" },
        { id: "a8", image: BlackRook, color: "black", name: "rook" },
        { id: "b1", image: WhiteKnight, color: "white", name: "knight" },
        { id: "b2", image: WhitePawn, color: "white", name: "pawn" },
        { id: "b3" },
        { id: "b4" },
        { id: "b5" },
        { id: "b6" },
        { id: "b7", image: BlackPawn, color: "black", name: "pawn" },
        { id: "b8", image: BlackKnight, color: "black", name: "knight" },
        { id: "c1", image: WhiteBishop, color: "white", name: "bishop" },
        { id: "c2", image: WhitePawn, color: "white", name: "pawn" },
        { id: "c3" },
        { id: "c4" },
        { id: "c5" },
        { id: "c6" },
        { id: "c7", image: BlackPawn, color: "black", name: "pawn" },
        { id: "c8", image: BlackBishop, color: "black", name: "bishop" },
        { id: "d1", image: WhiteQueen, color: "white", name: "queen" },
        { id: "d2", image: WhitePawn, color: "white", name: "pawn" },
        { id: "d3" },
        { id: "d4" },
        { id: "d5" },
        { id: "d6" },
        { id: "d7", image: BlackPawn, color: "black", name: "pawn" },
        { id: "d8", image: BlackQueen, color: "black", name: "queen" },
        { id: "e1", image: WhiteKing, color: "white", name: "king" },
        { id: "e2", image: WhitePawn, color: "white", name: "pawn" },
        { id: "e3" },
        { id: "e4" },
        { id: "e5" },
        { id: "e6" },
        { id: "e7", image: BlackPawn, color: "black", name: "pawn" },
        { id: "e8", image: BlackKing, color: "black", name: "king" },
        { id: "f1", image: WhiteBishop, color: "white", name: "bishop" },
        { id: "f2", image: WhitePawn, color: "white", name: "pawn" },
        { id: "f3" },
        { id: "f4" },
        { id: "f5" },
        { id: "f6" },
        { id: "f7", image: BlackPawn, color: "black", name: "pawn" },
        { id: "f8", image: BlackBishop, color: "black", name: "bishop" },
        { id: "g1", image: WhiteKnight, color: "white", name: "knight" },
        { id: "g2", image: WhitePawn, color: "white", name: "pawn" },
        { id: "g3" },
        { id: "g4" },
        { id: "g5" },
        { id: "g6" },
        { id: "g7", image: BlackPawn, color: "black", name: "pawn" },
        { id: "g8", image: BlackKnight, color: "black", name: "knight" },
        { id: "h1", image: WhiteRook, color: "white", name: "rook" },
        { id: "h2", image: WhitePawn, color: "white", name: "pawn" },
        { id: "h3" },
        { id: "h4" },
        { id: "h5" },
        { id: "h6" },
        { id: "h7", image: BlackPawn, color: "black", name: "pawn" },
        { id: "h8", image: BlackRook, color: "black", name: "rook" },
    ]);
    const [beingDragged, setbeingDragged] = useState();
    const [startTarget, setStartTarget] = useState();
    const [lastStartTarget, setLastStartTarget] = useState();
    const [lastTarget, setLastTarget] = useState();
    const [legal, setLegal] = useState(false);
    const [turn, setTurn] = useState("white");
    const [checkLegal, setCheckLegal] = useState([]);
    const [legalChanged, setLegalChanged] = useState([]);
    const [canEat, setCanEat] = useState([]);
    const [enPass, setEnPass] = useState(null);
    const [check, setCheck] = useState(false);
    const [bkPos, setBkPos] = useState("e8");
    const [wkPos, setWkPos] = useState("e1");
    const [pawnEnd, setPawnEnd] = useState(false);
    const [changedPawn, setChangedPawn] = useState(null);
    const [changedPawnSquare, setChangedPawnSquare] = useState(null);
    useEffect(() => {
        onChangeTurn(turn);
    }, [turn]);
    const writeNumbers = (id) => {
        let color = whiteBlocks.includes(id) ? "white" : "black";
        if (playingBy === "white") {
            if (id.slice(0, 1) === "a") {
                if (id.slice(1, 2) == "1") {
                    return (
                        <>
                            <span className={"rowNumber " + color}>
                                {id.slice(1, 2)}
                            </span>
                            <span className={"colNumber " + color}>
                                {id.slice(0, 1)}
                            </span>
                        </>
                    );
                }
                return (
                    <span className={"rowNumber " + color}>
                        {id.slice(1, 2)}
                    </span>
                );
            }
            if (whiteNumbers.includes(id)) {
                return (
                    <span className={"colNumber " + color}>
                        {id.slice(0, 1)}
                    </span>
                );
            }
        }
        if (playingBy === "black") {
            if (id.slice(0, 1) === "h") {
                if (id.slice(1, 2) == "8") {
                    return (
                        <>
                            <span className={"rowNumber " + color}>
                                {id.slice(1, 2)}
                            </span>
                            <span className={"colNumber " + color}>
                                {id.slice(0, 1)}
                            </span>
                        </>
                    );
                }
                return (
                    <span className={"rowNumber " + color}>
                        {id.slice(1, 2)}
                    </span>
                );
            }
            if (blackNumbers.includes(id)) {
                return (
                    <span className={"colNumber " + color}>
                        {id.slice(0, 1)}
                    </span>
                );
            }
        }
    };

    const handleDragStart = (e) => {
        setbeingDragged(e.target);
        const parentDiv = e.target.parentElement;
        setStartTarget(parentDiv);
    };

    const handleDragDrop = (e) => {
        setLegalChanged(false);
        if (
            beingDragged.name === "pawn" &&
            canEat.includes(e.target.parentElement.id) &&
            (e.target.parentElement.id.slice(1) == 8 ||
                e.target.parentElement.id.slice(1) == 1)
        ) {
            setPawnEnd(true);
            setTurn(turn === "white" ? "black" : "white");
            setChangedPawnSquare(beingDragged);
            new Audio(QayleluDzen).play();
            e.target.parentElement.prepend(beingDragged);
            e.target.remove();
        } else if (
            (e.target !== beingDragged && checkLegal.includes(e.target.id)) ||
            checkLegal.includes(e.target.parentElement.id)
        ) {
            if (enPass && e.target.id == enPass) {
                if (
                    turn === "white" &&
                    lastTarget.id.slice(0, 1) +
                        (lastTarget.id.slice(1) * 1 + 1) ==
                        enPass
                ) {
                    new Audio(uteluDzen).play();
                    lastTarget.children[0].remove();
                    e.target.prepend(beingDragged);
                } else if (
                    turn === "black" &&
                    lastTarget.id.slice(0, 1) +
                        (lastTarget.id.slice(1) * 1 - 1) ==
                        enPass
                ) {
                    new Audio(uteluDzen).play();
                    lastTarget.children[0].remove();
                    e.target.prepend(beingDragged);
                }
                setEnPass(null);
            } else if (e.target.tagName.toLowerCase() === "img") {
                new Audio(uteluDzen).play();
                e.target.parentElement.prepend(beingDragged);
                e.target.remove();
            } else {
                new Audio(QayleluDzen).play();
                e.target.prepend(beingDragged);
                if (beingDragged.name === "king") {
                    if (turn === "white") {
                        setBkPos(e.target.id);
                    } else {
                        setWkPos(e.target.id);
                    }
                }
            }
            setTurn(turn === "white" ? "black" : "white");
            setLegal(true);
        } else {
            e.target.classList.remove("highLight");
            setLegal(false);
        }
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const checkPawn = (e, rows) => {
        let canGo = [];
        let canBeEaten = [];
        const color = e.target.dataset.color;
        const number = e.target.parentElement.id.slice(1);
        const letter = e.target.parentElement.id.slice(0, 1);
        if (number == 2 && color === "white") {
            let square1 = letter + (number * 1 + 1);
            let square2 = letter + (number * 1 + 2);
            if (
                document.getElementById(square2).firstElementChild &&
                document.getElementById(square2).firstElementChild.tagName ===
                    "IMG"
            ) {
                canGo = [square1];
            } else if (
                document.getElementById(square1).firstElementChild &&
                document.getElementById(square1).firstElementChild.tagName ===
                    "IMG"
            ) {
                canGo = [];
            } else {
                canGo = [square1, square2];
            }
        } else if (number !== 2 && color === "white") {
            let square1 = letter + (number * 1 + 1);
            if (
                document.getElementById(square1).firstElementChild &&
                document.getElementById(square1).firstElementChild.tagName ===
                    "IMG"
            ) {
                canGo = [];
            } else {
                canGo = [square1];
            }
        } else if (number == 7 && color === "black") {
            let square1 = letter + (number * 1 - 1);
            let square2 = letter + (number * 1 - 2);
            if (
                document.getElementById(square2).firstElementChild &&
                document.getElementById(square2).firstElementChild.tagName ===
                    "IMG"
            ) {
                canGo = [square1];
            } else if (
                document.getElementById(square1).firstElementChild &&
                document.getElementById(square1).firstElementChild.tagName ===
                    "IMG"
            ) {
                canGo = [];
            } else {
                canGo = [square1, square2];
            }
        } else if (number !== 7 && color === "black") {
            let square1 = letter + (number * 1 - 1);
            if (
                document.getElementById(square1).firstElementChild &&
                document.getElementById(square1).firstElementChild.tagName ===
                    "IMG"
            ) {
                canGo = [];
            } else {
                canGo = [square1];
            }
        }
        if (color === "white") {
            let canEat1, canEat2;
            if (letter === "a") {
                canEat1 = "b" + (number * 1 + 1);
            } else if (letter === "h") {
                canEat1 = "g" + (number * 1 + 1);
            } else {
                let letterIndex = rows.indexOf(letter);
                canEat1 = rows[letterIndex - 1] + (number * 1 + 1);
                canEat2 = rows[letterIndex + 1] + (number * 1 + 1);
            }
            if (
                canEat1 &&
                document.getElementById(canEat1).firstElementChild &&
                document.getElementById(canEat1).firstElementChild.tagName ===
                    "IMG" &&
                document.getElementById(canEat1).firstElementChild.dataset
                    .color === "black"
            ) {
                canGo.push(canEat1);
                canBeEaten.push(canEat1);
            }
            if (
                canEat2 &&
                document.getElementById(canEat2).firstElementChild &&
                document.getElementById(canEat2).firstElementChild.tagName ===
                    "IMG" &&
                document.getElementById(canEat2).firstElementChild.dataset
                    .color === "black"
            ) {
                canGo.push(canEat2);
                canBeEaten.push(canEat2);
            }
        } else {
            let canEat1, canEat2;
            if (letter === "a") {
                canEat1 = "b" + (number * 1 - 1);
            } else if (letter === "h") {
                canEat1 = "g" + (number * 1 - 1);
            } else {
                let letterIndex = rows.indexOf(letter);
                canEat1 = rows[letterIndex - 1] + (number * 1 - 1);
                canEat2 = rows[letterIndex + 1] + (number * 1 - 1);
            }
            if (
                canEat1 &&
                document.getElementById(canEat1).firstElementChild &&
                document.getElementById(canEat1).firstElementChild.tagName ===
                    "IMG" &&
                document.getElementById(canEat1).firstElementChild.dataset
                    .color === "white"
            ) {
                canGo.push(canEat1);
                canBeEaten.push(canEat1);
            }
            if (
                canEat2 &&
                document.getElementById(canEat2).firstElementChild &&
                document.getElementById(canEat2).firstElementChild.tagName ===
                    "IMG" &&
                document.getElementById(canEat2).firstElementChild.dataset
                    .color === "white"
            ) {
                canGo.push(canEat2);
                canBeEaten.push(canEat2);
            }
        }
        if (color === "white" && number == 5) {
            if (
                lastTarget.id.slice(1) == 5 &&
                lastStartTarget.id.slice(1) == 7 &&
                (rows.indexOf(lastTarget.id.slice(0, 1)) ===
                    rows.indexOf(letter) + 1 ||
                    rows.indexOf(lastTarget.id.slice(0, 1)) ===
                        rows.indexOf(letter) - 1)
            ) {
                let enPassant =
                    lastTarget.id.slice(0, 1) +
                    (lastTarget.id.slice(1) * 1 + 1);
                canBeEaten.push(enPassant);
                canGo.push(enPassant);
                setEnPass(enPassant);
            }
        } else if (color === "black" && number == 4) {
            if (
                lastTarget.id.slice(1) == 4 &&
                lastStartTarget.id.slice(1) == 2 &&
                (rows.indexOf(lastTarget.id.slice(0, 1)) ===
                    rows.indexOf(letter) + 1 ||
                    rows.indexOf(lastTarget.id.slice(0, 1)) ===
                        rows.indexOf(letter) - 1)
            ) {
                let enPassant =
                    lastTarget.id.slice(0, 1) +
                    (lastTarget.id.slice(1) * 1 - 1);
                canBeEaten.push(enPassant);
                canGo.push(enPassant);
                setEnPass(enPassant);
            }
        } else {
            setEnPass(null);
        }
        setCanEat(canBeEaten);
        setCheckLegal(canGo);
        setLegalChanged(true);
    };

    const checkRook = (e, rows, checkQueen) => {
        let canGo = [];
        let canBeEaten = [];
        const color = e.target.dataset.color;
        const number = e.target.parentElement.id.slice(1) * 1;
        const letter = e.target.parentElement.id.slice(0, 1);
        let num = rows.indexOf(letter) + 1;
        let yt = 8;
        let yb = 1;
        let yl = 1;
        let yr = 8;
        let ct = [];
        let cb = [];
        let cl = [];
        let cr = [];
        while (yt > number) {
            ct.push(letter + yt);
            yt--;
        }
        while (yb < number) {
            cb.push(letter + yb);
            yb++;
        }
        while (yl < num) {
            cl.push(rows[yl - 1] + number);
            yl++;
        }
        while (yr > num) {
            cr.push(rows[yr - 1] + number);
            yr--;
        }
        if (ct.length > 0) {
            ct = ct.reverse();
            for (let i = 0; i < ct.length; i++) {
                let square = document.getElementById(ct[i]);
                if (
                    square.hasChildNodes() &&
                    square.firstChild.tagName.toLowerCase() === "img"
                ) {
                    if (square.firstChild.dataset.color !== color) {
                        canBeEaten.push(ct[i]);
                        canGo.push(ct[i]);
                    }
                    break;
                } else {
                    canGo.push(ct[i]);
                }
            }
        }
        if (cb.length > 0) {
            cb = cb.reverse();
            for (let i = 0; i < cb.length; i++) {
                let square = document.getElementById(cb[i]);
                if (
                    square.hasChildNodes() &&
                    square.firstChild.tagName.toLowerCase() === "img"
                ) {
                    if (square.firstChild.dataset.color !== color) {
                        canBeEaten.push(cb[i]);
                        canGo.push(cb[i]);
                    }
                    break;
                } else {
                    canGo.push(cb[i]);
                }
            }
        }
        if (cr.length > 0) {
            cr = cr.reverse();
            for (let i = 0; i < cr.length; i++) {
                let square = document.getElementById(cr[i]);
                if (
                    square.hasChildNodes() &&
                    square.firstChild.tagName.toLowerCase() === "img"
                ) {
                    if (square.firstChild.dataset.color !== color) {
                        canBeEaten.push(cr[i]);
                        canGo.push(cr[i]);
                    }
                    break;
                } else {
                    canGo.push(cr[i]);
                }
            }
        }
        if (cl.length > 0) {
            cl = cl.reverse();
            for (let i = 0; i < cl.length; i++) {
                let square = document.getElementById(cl[i]);
                if (
                    square.hasChildNodes() &&
                    square.firstChild.tagName.toLowerCase() === "img"
                ) {
                    if (square.firstChild.dataset.color !== color) {
                        canBeEaten.push(cl[i]);
                        canGo.push(cl[i]);
                    }
                    break;
                } else {
                    canGo.push(cl[i]);
                }
            }
        }
        if (checkQueen) {
            setCanEat((prev) => [...prev, ...canBeEaten]);
            setCheckLegal((prev) => [...prev, ...canGo]);
        } else {
            setCanEat(canBeEaten);
            setCheckLegal(canGo);
        }
        setLegalChanged(true);
    };

    const checkKnight = (e, rows) => {
        let canGo = [];
        let canBeEaten = [];
        const color = e.target.dataset.color;
        const number = e.target.parentElement.id.slice(1) * 1;
        const letter = e.target.parentElement.id.slice(0, 1);
        const x = rows.indexOf(letter);
        if (x + 1 < 8 && number + 2 <= 8) {
            let square1 = document.getElementById(rows[x + 1] + (number + 2));
            if (
                square1.hasChildNodes() &&
                square1.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square1.firstChild.dataset.color !== color) {
                    canBeEaten.push(square1.id);
                    canGo.push(square1.id);
                }
            } else {
                canGo.push(square1.id);
            }
        }
        if (x + 1 < 8 && number - 2 >= 1) {
            let square2 = document.getElementById(rows[x + 1] + (number - 2));
            if (
                square2.hasChildNodes() &&
                square2.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square2.firstChild.dataset.color !== color) {
                    canBeEaten.push(square2.id);
                    canGo.push(square2.id);
                }
            } else {
                canGo.push(square2.id);
            }
        }
        if (x + 2 < 8 && number + 1 <= 8) {
            let square3 = document.getElementById(rows[x + 2] + (number + 1));
            if (
                square3.hasChildNodes() &&
                square3.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square3.firstChild.dataset.color !== color) {
                    canBeEaten.push(square3.id);
                    canGo.push(square3.id);
                }
            } else {
                canGo.push(square3.id);
            }
        }
        if (x + 2 < 8 && number - 1 >= 1) {
            let square4 = document.getElementById(rows[x + 2] + (number - 1));
            if (
                square4.hasChildNodes() &&
                square4.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square4.firstChild.dataset.color !== color) {
                    canBeEaten.push(square4.id);
                    canGo.push(square4.id);
                }
            } else {
                canGo.push(square4.id);
            }
        }
        if (x - 1 >= 0 && number + 2 <= 8) {
            let square5 = document.getElementById(rows[x - 1] + (number + 2));
            if (
                square5.hasChildNodes() &&
                square5.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square5.firstChild.dataset.color !== color) {
                    canBeEaten.push(square5.id);
                    canGo.push(square5.id);
                }
            } else {
                canGo.push(square5.id);
            }
        }
        if (x - 1 >= 0 && number - 2 >= 1) {
            let square6 = document.getElementById(rows[x - 1] + (number - 2));
            if (
                square6.hasChildNodes() &&
                square6.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square6.firstChild.dataset.color !== color) {
                    canBeEaten.push(square6.id);
                    canGo.push(square6.id);
                }
            } else {
                canGo.push(square6.id);
            }
        }
        if (x - 2 >= 0 && number + 1 <= 8) {
            let square7 = document.getElementById(rows[x - 2] + (number + 1));
            if (
                square7.hasChildNodes() &&
                square7.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square7.firstChild.dataset.color !== color) {
                    canBeEaten.push(square7.id);
                    canGo.push(square7.id);
                }
            } else {
                canGo.push(square7.id);
            }
        }
        if (x - 2 >= 0 && number - 1 >= 1) {
            let square8 = document.getElementById(rows[x - 2] + (number - 1));
            if (
                square8.hasChildNodes() &&
                square8.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square8.firstChild.dataset.color !== color) {
                    canBeEaten.push(square8.id);
                    canGo.push(square8.id);
                }
            } else {
                canGo.push(square8.id);
            }
        }
        setCanEat(canBeEaten);
        setCheckLegal(canGo);
        setLegalChanged(true);
    };

    const checkBishop = (e, rows) => {
        let canGo = [];
        let canBeEaten = [];
        const color = e.target.dataset.color;
        const number = e.target.parentElement.id.slice(1) * 1;
        const letter = e.target.parentElement.id.slice(0, 1);
        let ctr = [];
        let ctl = [];
        let cbl = [];
        let cbr = [];
        let tr = number + 1;
        let tl = number + 1;
        let bl = number - 1;
        let br = number - 1;
        let x = rows.indexOf(letter);
        while (tr <= 8 && x < 7) {
            ctr.push(rows[x + 1] + tr);
            tr++;
            x++;
        }
        x = rows.indexOf(letter);
        while (tl <= 8 && x > 0) {
            ctl.push(rows[x - 1] + tl);
            tl++;
            x--;
        }
        x = rows.indexOf(letter);
        while (bl > 0 && x > 0) {
            cbl.push(rows[x - 1] + bl);
            bl--;
            x--;
        }
        x = rows.indexOf(letter);
        while (br > 0 && x < 7) {
            cbr.push(rows[x + 1] + br);
            br--;
            x++;
        }
        for (let i = 0; i < ctr.length; i++) {
            let square = document.getElementById(ctr[i]);
            if (
                square.hasChildNodes() &&
                square.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square.firstChild.dataset.color !== color) {
                    canBeEaten.push(ctr[i]);
                    canGo.push(ctr[i]);
                }
                break;
            } else {
                canGo.push(ctr[i]);
            }
        }
        for (let i = 0; i < ctl.length; i++) {
            let square = document.getElementById(ctl[i]);
            if (
                square.hasChildNodes() &&
                square.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square.firstChild.dataset.color !== color) {
                    canBeEaten.push(ctl[i]);
                    canGo.push(ctl[i]);
                }
                break;
            } else {
                canGo.push(ctl[i]);
            }
        }
        for (let i = 0; i < cbl.length; i++) {
            let square = document.getElementById(cbl[i]);
            if (
                square.hasChildNodes() &&
                square.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square.firstChild.dataset.color !== color) {
                    canBeEaten.push(cbl[i]);
                    canGo.push(cbl[i]);
                }
                break;
            } else {
                canGo.push(cbl[i]);
            }
        }
        for (let i = 0; i < cbr.length; i++) {
            let square = document.getElementById(cbr[i]);
            if (
                square.hasChildNodes() &&
                square.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square.firstChild.dataset.color !== color) {
                    canBeEaten.push(cbr[i]);
                    canGo.push(cbr[i]);
                }
                break;
            } else {
                canGo.push(cbr[i]);
            }
        }
        setCanEat(canBeEaten);
        setCheckLegal(canGo);
        setLegalChanged(true);
    };

    const checkKing = (e, rows) => {
        let canGo = [];
        let canBeEaten = [];
        const color = e.target.dataset.color;
        const number = e.target.parentElement.id.slice(1) * 1;
        const letter = e.target.parentElement.id.slice(0, 1);
        let x = rows.indexOf(letter);
        let ew = [];
        let square1 = document.getElementById(letter + (number + 1));
        let square2 = document.getElementById(letter + (number - 1));
        square1 && ew.push(square1);
        square2 && ew.push(square2);
        if (x + 1 <= 7) {
            let square6 = document.getElementById(rows[x + 1] + number);
            let square7 = document.getElementById(rows[x + 1] + (number + 1));
            let square8 = document.getElementById(rows[x + 1] + (number - 1));
            square6 && ew.push(square6);
            square7 && ew.push(square7);
            square8 && ew.push(square8);
        }
        if (x - 1 >= 0) {
            let square3 = document.getElementById(rows[x - 1] + number);
            let square4 = document.getElementById(rows[x - 1] + (number + 1));
            let square5 = document.getElementById(rows[x - 1] + (number - 1));
            square3 && ew.push(square3);
            square4 && ew.push(square4);
            square5 && ew.push(square5);
        }
        for (let i = 0; i < ew.length; i++) {
            let square = ew[i];
            if (
                square.hasChildNodes() &&
                square.firstChild.tagName.toLowerCase() === "img"
            ) {
                if (square.firstChild.dataset.color !== color) {
                    canBeEaten.push(square.id);
                    canGo.push(square.id);
                }
            } else {
                canGo.push(square.id);
            }
        }
        setCanEat(canBeEaten);
        setCheckLegal(canGo);
        setLegalChanged(true);
    };

    const handleDrag = (e, rows, colls) => {
        if (e.target.name === "pawn") {
            checkPawn(e, rows);
        }
        if (e.target.name === "rook") {
            checkRook(e, rows);
        }
        if (e.target.name === "knight") {
            checkKnight(e, rows);
        }
        if (e.target.name === "bishop") {
            checkBishop(e, rows);
        }
        if (e.target.name === "king") {
            checkKing(e, rows);
        }
        if (e.target.name === "queen") {
            checkBishop(e, rows);
            checkRook(e, rows, true);
        }
    };

    const handleDragEnter = (e) => {
        e.target.classList.add("highLight");
    };

    const handleDragLeave = (e) => {
        e.target.classList.remove("highLight");
    };

    const handleDragEnd = (e) => {
        setbeingDragged(false);
        const parentDiv = e.target.parentElement;
        parentDiv.classList.remove("highLight");
        if (startTarget !== parentDiv) {
            setLastStartTarget(startTarget);
            setLastTarget(parentDiv);
        }
    };

    const renderSquare = (square, id, rows, colls) => {
        let targetColor = "";
        if (lastTarget && (lastTarget.id === id || lastStartTarget.id === id)) {
            targetColor = blackBlocks.includes(id) ? "Btarget" : "Wtarget";
        }
        return (
            <div
                id={square.id}
                key={square.id}
                className={
                    (blackBlocks.includes(id) ? "black " : "white ") +
                    targetColor
                }
                onDrop={handleDragDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
            >
                {square.image && (
                    <img
                        src={square.image}
                        alt={square.id}
                        data-color={square.color}
                        name={square.name}
                        onDragStart={handleDragStart}
                        onDrag={(e) => handleDrag(e, rows, colls)}
                        draggable={square.color === turn}
                    />
                )}
                {checkLegal.includes(square.id) &&
                    beingDragged &&
                    legalChanged && (
                        <div
                            className={
                                "circle" +
                                (canEat.includes(square.id) ? " canEat" : "")
                            }
                            id={square.id}
                        ></div>
                    )}
                {writeNumbers(id)}
            </div>
        );
    };

    const renderBoard = () => {
        const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
        const colls = ["1", "2", "3", "4", "5", "6", "7", "8"];

        return rows.map((row) => {
            return (
                <div className={"row " + playingBy} key={row}>
                    {colls.map((coll) => {
                        const id = row + coll;
                        const square = squares.find(
                            (square) => square.id === id
                        );
                        return square ? (
                            renderSquare(square, id, rows, colls)
                        ) : (
                            <div
                                id={id}
                                key={id}
                                className={
                                    blackBlocks.includes(id) ? "black" : "white"
                                }
                                onDrop={handleDragDrop}
                                onDragOver={handleDragOver}
                            ></div>
                        );
                    })}
                </div>
            );
        });
    };
    return (
        <>
            {pawnEnd && (
                <PawnEnd
                    color={turn === "black" ? "white" : "black"}
                    setPawnEnd={setPawnEnd}
                    changedPawnSquare={changedPawnSquare}
                />
            )}
            <div className={"chessBoard " + playingBy}>{renderBoard()}</div>
        </>
    );
};

export default ChessBoard;
