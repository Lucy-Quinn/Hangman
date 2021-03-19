import React, { useEffect } from 'react';

const WORDS = ['Cat', 'Dog', 'Bird']

const NewGame = ({ handleNewWord, setLetters }) => {

    useEffect(() => {
        chooseRandomWord()
    }, [])

    const chooseRandomWord = () => {
        const randomNumber = Math.floor(Math.random() * WORDS.length);
        const randomWord = WORDS[randomNumber];
        handleNewWord(randomWord);
        setLetters('');
    }

    return (
        <div>
            <button onClick={chooseRandomWord}>New Game</button>
        </div>
    );
}

export default NewGame;