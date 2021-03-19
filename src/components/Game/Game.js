import React, { useState } from 'react';
import NewGame from '../NewGame/NewGame';
import Points from '../Points/Points';
import Hangman from '../Hangman/Hangman';
import SecretWord from '../SecretWord/SecretWord';
import Letters from '../Letters/Letters';


const Game = ({ name }) => {
    const [newWord, setNewWord] = useState('');
    const [letters, setLetters] = useState('');

    //need to sort out so that random word is not picked more than once
    const handleNewWord = chosenWord => {
        // const word = chosenWord;
        setNewWord(chosenWord);
    };

    const handleSelectedLetters = selectedLetter => {
        if (!letters.includes(selectedLetter)) {
            setLetters(prevletter => prevletter + selectedLetter);
        }
    };

    return (
        <div>
            <h1>Welcome {name}</h1>
            <NewGame handleNewWord={handleNewWord} setLetters={setLetters} />
            <Points />
            <Hangman />
            <SecretWord newWord={newWord} letters={letters} />
            <Letters handleSelectedLetters={handleSelectedLetters} letters={letters} />
        </div>
    );
}

export default Game;