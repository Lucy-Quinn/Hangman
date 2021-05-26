import React, { useState, useEffect } from 'react';
import NewGame from '../NewGame/NewGame';
import Points from '../Points/Points';
import HangmanFigure from '../HangmanFigure/HangmanFigure';
import SecretWord from '../SecretWord/SecretWord';
import Letters from '../Letters/Letters';
import FinalResult from '../FinalResult/FinalResult';

const Game = ({ name }) => {
    const [newWord, setNewWord] = useState('');
    const [letters, setLetters] = useState('');
    const [points, setPoints] = useState(10);
    const [message, setMessage] = useState('');
    const [newGame, setNewGame] = useState(false);

    const secretWord = newWord.toLowerCase();

    //need to sort out so that random word is not picked more than once
    const handleNewWord = chosenWord => {
        setNewWord(chosenWord);
    };

    const handleSelectedLetters = selectedLetter => {
        if (!letters.includes(selectedLetter)) {
            setLetters(prevletter => prevletter + selectedLetter);
        }
    };

    const countingErrors = letter => {
        if (secretWord.indexOf(letter) === -1) {
            if (points >= 1) {
                setPoints((prevPoints) => prevPoints - 1)
            }
        }
    }

    const handlingMessages = word => {
        if (word !== undefined && word.indexOf("_") < 0) {
            setMessage('You win!');
            setTimeout(() => {
                setLetters('');
                setMessage('');
                setPoints(10);
            }, 1000);
        }
        else if (points === 0) {
            setMessage('Game over!');
        }
    }

    const isNotNewGame = (noGame) => {
        setNewGame(noGame)
    }

    useEffect(() => {
        handlingMessages()

    }, [points, message, newGame])


    return (
        <div>
            <h1>Welcome {name}</h1>
            <NewGame handleNewWord={handleNewWord} setLetters={setLetters} setMessage={setMessage} setPoints={setPoints} message={message} setNewGame={setNewGame} />
            <FinalResult message={message} />
            <Points points={points} />
            <HangmanFigure points={points} message={message} newGame={newGame} isNotNewGame={isNotNewGame} />
            <SecretWord secretWord={secretWord} letters={letters} handlingMessages={handlingMessages} />
            <Letters handleSelectedLetters={handleSelectedLetters} letters={letters} countingErrors={countingErrors} />
        </div>
    );
}

export default Game;