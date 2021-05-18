import React, { useState, useEffect } from 'react';

const WORDS = ['Cat', 'Dog', 'Bird']

const NewGame = ({ handleNewWord, setLetters, setMessage, setPoints, message, setNewGame }) => {


    useEffect(() => {
        chooseRandomWord()
    }, [])

    const chooseRandomWord = () => {
        const randomNumber = Math.floor(Math.random() * WORDS.length);
        const randomWord = WORDS[randomNumber];
        handleNewWord(randomWord);
        setLetters('');
        setMessage('');
        setPoints(10);
        if (message === 'You win!') {
            setNewGame(false);
        }
        setNewGame(true);

    }

    return (
        <div>
            <button onClick={chooseRandomWord}>New Game</button>
        </div>
    );
}

export default NewGame;