import React from 'react';
import { LettersContainer, Alphabet } from './Letters.styled';

const LETTERS_ARRAY = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const Letters = ({ handleSelectedLetters, letters }) => {

    const handleLetter = (event) => {
        const letter = event.target.innerHTML;
        handleSelectedLetters(letter);
    }

    const handleClickedLetter = (letter) => {
        if (letters.includes(letter)) {
            return true
        }
    }

    return (
        <LettersContainer>
            {LETTERS_ARRAY.map((letter, i) => {
                return (
                    <Alphabet onClick={handleLetter} key={i}>
                        { handleClickedLetter(letter) ?
                            <p style={{ color: 'red' }}>{letter}</p>
                            :
                            <p style={{ color: 'black' }}>{letter}</p>
                        }
                    </Alphabet>
                )
            })}
        </LettersContainer>
    );
}

export default Letters;