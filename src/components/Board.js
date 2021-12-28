import React, { useState, useEffect } from 'react'

function Board() {
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const click = () => {
    const map1 = (cards.map((x) => x));
    setCards(map1.sort(() => (Math.random() - 0.5)));
  }

  return (
    <div className='main'>
      <button onClick={click}>Click</button>
      <div className='container'>
        {cards.map((x) => <div className='cell'>{x}</div>)}
      </div>
    </div>
  )
}

export default Board
