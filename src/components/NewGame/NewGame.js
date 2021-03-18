import React, { useState } from 'react';

const WORDS = ['Cat', 'Dog', 'Bird']

const NewGame = ({ handleNewWord }) => {


    const chooseRandomWord = () => {
        const randomNumber = Math.floor(Math.random() * WORDS.length);
        const randomWord = WORDS[randomNumber];
        handleNewWord(randomWord);
    }

    return (
        <div>
            <button onClick={chooseRandomWord}>New Game</button>
        </div>
    );
}

export default NewGame;