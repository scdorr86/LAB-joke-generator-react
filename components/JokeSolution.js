import React, { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from './JokeDisplay';

function JokeGenerator() {
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  return (
    <>
      <Joker joke={joke} btnText={btnText} />
      {
         btnText === 'Get A Joke' || btnText === 'Get A New Joke'
           ? <button type="button" onClick={getAJoke}>{btnText}</button>
           : <button type="button" onClick={() => setButton('Get A New Joke')}>{btnText}</button>
       }
    </>
  );
}

export default JokeGenerator;
