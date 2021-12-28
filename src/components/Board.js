import React, { useState, useEffect } from 'react'

function Board() {
  const [cards, setCards] = useState([1, 2, 3]);

  const click = () => {
    const map1 = (cards.map((x) => x));
    setCards(map1.sort(() => (Math.random() - 0.5)));
  }

  return (
    <div>
      {cards.map((x) => <div className='square'>{x}</div>)}
      <button onClick={click}>Click</button>
    </div>
  )
}

export default Board
