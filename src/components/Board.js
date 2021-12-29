import React, { useState, useEffect } from 'react';
import Bulbasaur from '../assets/bulbasaur.png';
import Ivysaur from '../assets/ivysaur.png';
import Venusaur from '../assets/venusaur.png';
import Charmander from '../assets/charmander.png';
import Charmeleon from '../assets/charmeleon.png';
import Charizard from '../assets/charizard.png';
import Squirtle from '../assets/squirtle.png';
import Wartotle from '../assets/wartotle.png';
import Blastoise from '../assets/blastoise.png';
import Abra from '../assets/abra.png';
import Kadabra from '../assets/kadabra.png';
import Alakazam from '../assets/alakazam.png';
import Instruction from './Instruction';
import Score from './Score';

function Board() {
  const [cards, setCards] = useState([
    { image: Bulbasaur, name: 'Bulbasaur' },
    { image: Ivysaur, name: 'Ivysaur' },
    { image: Venusaur, name: 'Venusaur' },
    { image: Charmander, name: 'Charmander' },
    { image: Charmeleon, name: 'Charmeleon' },
    { image: Charizard, name: 'Charizard' },
    { image: Squirtle, name: 'Squirtle' },
    { image: Wartotle, name: 'Wartotle' },
    { image: Blastoise, name: 'Blastoise' },
    { image: Abra, name: 'Abra' },
    { image: Kadabra, name: 'Kadabra' },
    { image: Alakazam, name: 'Alakazam' },
  ]);

  // States
  const [current, setCurrent] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Shuffle cards
  const shuffle = () => {
    const map1 = (cards.map((x) => x));
    setCards(map1.sort(() => (Math.random() - 0.5)));
  };

  // Click to shuffle and run game logic
  const click = (e) => {
    shuffle();
    playGame(e.currentTarget.id);
  }

  const playGame = (pokemon) => {
    if (current.includes(pokemon)) {
      setCurrent([]);
      setScore(0);
    } else {
      if (score >= highScore) {
        setHighScore(highScore + 1);
      }
      setScore(score + 1);
      setCurrent(current.concat(pokemon));

    }
  }

  // Invoke when components mount
  useEffect(() => {
    shuffle();
  }, []);

  return (
    <div className='main'>
      <Instruction />
      <div className='container'>
        {cards.map((x) =>
          <div className='cell' id={x.name} key={x.name} onClick={click}>
            <img className='image' alt={x.name} src={x.image}></img>
            <p>{x.name}</p>
          </div>
        )}
      </div>
      <Score score={score} highScore={highScore} />
    </div>
  )
}

export default Board
