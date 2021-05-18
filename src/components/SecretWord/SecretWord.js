import React from 'react';
import { SecretWordContainer } from './SecretWord.Styled';

const SecretWord = ({ secretWord, letters, handlingMessages }) => {

    const getWordStatus = () => {
        let wordStatus = '';
        secretWord.split('').forEach(function (secretLetter) {
            if (letters.indexOf(secretLetter) > -1) {
                wordStatus += secretLetter;
                return secretLetter
            } else {
                wordStatus += '_';
                return (
                    '_' + ' '
                )
            }
        });
        handlingMessages(wordStatus)
    }



    return (
        <SecretWordContainer>
            {secretWord.split('').map((secretLetter) => {
                {/* if (letters.includes(secretLetter)) { */ }
                if (letters.indexOf(secretLetter) > -1) {
                    getWordStatus()
                    return secretLetter
                } else {
                    return (
                        '_' + ' '
                    )
                }
            })}
        </SecretWordContainer>
    );
}

export default SecretWord;