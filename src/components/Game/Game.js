import React, { useState } from 'react';
import NewGame from '../NewGame/NewGame';
import Points from '../Points/Points';
import Hangman from '../Hangman/Hangman';
import SecretWord from '../SecretWord/SecretWord';
import Letters from '../Letters/Letters';


const Game = ({ name }) => {
    const [newWord, setNewWord] = useState('');

    const handleNewWord = chosenWord => {
        setNewWord(chosenWord);
    };


    return (
        <div>
            <h1>Welcome {name}</h1>
            <NewGame handleNewWord={handleNewWord} />
            <Points />
            <Hangman />
            <SecretWord newWord={newWord} />
            <Letters />
        </div>
    );
}

export default Game;