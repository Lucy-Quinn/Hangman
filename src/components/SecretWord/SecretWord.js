import React from 'react';
import { SecretWordContainer } from './SecretWord.Styled'

const SecretWord = ({ newWord, letters }) => {
    const secretWord = newWord.toLowerCase();
    console.log(secretWord);
    console.log(letters);

    return (
        <SecretWordContainer>
            {secretWord.split('').map((secretLetter) => {
                if (letters.includes(secretLetter)) {
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