import React from 'react'
import './Hangman.css';

const Hangman = () => {
    return (
        <div id="hangman">
            <div className="top-bar"></div>
            <div className="right-bar"></div>
            <div className="left-bar"></div>
            <div className="base"></div>

            <div className="head"></div>
            <div className="body"></div>
            <div className="left-arm"></div>
            <div className="right-arm"></div>
            <div className="left-leg"></div>
            <div className="right-leg"></div>

            <div className="clearfix"></div>
        </div>
    );
}

export default Hangman;