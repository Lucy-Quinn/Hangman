import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './../../App.css';

function WelcomePage({ getName }, props) {
  const [input, setInput] = useState('')
  let history = useHistory();

  const handleChange = event => {
    const { value } = event.target;
    setInput(value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    getName(input);
    history.push('/game')
  }

  return (
    <div className="App">
      <h1>Welcome to Hangman</h1>
      <p>Please type your name below:</p>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleChange} />
        <br />
        <button type="submit">Enter Game</button>
      </form>
    </div>
  );
}

export default WelcomePage;
