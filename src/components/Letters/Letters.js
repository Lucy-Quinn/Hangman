import React, { useState } from 'react';
import { LettersContainer, Alphabet } from './Letters.styled';

const LETTERS_ARRAY = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const Letters = () => {

    const [clickedLetter, setClickedLetter] = useState('');

    const handleLetter = (event) => {
        const letter = event.target.innerHTML;
        setClickedLetter(prevletter => prevletter + letter)
    }

    const handleClickedLetter = (letter) => {
        if (clickedLetter.includes(letter)) {
            return true
        } else {
            return false;
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