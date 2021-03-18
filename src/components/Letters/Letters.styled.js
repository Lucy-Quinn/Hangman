import styled from 'styled-components';

const LettersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width:50%;
    margin: 20px auto;
`

const Alphabet = styled.p`
font-size: 1.6rem;
margin-left: 20px;
`

export { LettersContainer, Alphabet }
