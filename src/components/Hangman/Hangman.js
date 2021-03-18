import React from 'react'
import './Hangman.css';

const Hangman = () => {
    return (
        <div id="hangman">
            <div class="right-bar"></div>
            <div class="top-bar"></div>
            <div class="left-bar"></div>
            <div class="base"></div>

            <div class="head"></div>
            <div class="body"></div>
            <div class="left-arm"></div>
            <div class="right-arm"></div>
            <div class="left-leg"></div>
            <div class="right-leg"></div>

            <div class="clearfix"></div>
        </div>
    );
}

export default Hangman;