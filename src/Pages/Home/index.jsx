import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Chess");
    };
    return (
        <div className="homeWrapper">
            <div className="homeContent">
                <h1>GChess</h1>
                <button onClick={handleClick}>Play</button>
            </div>
        </div>
    );
};

export default Home;
