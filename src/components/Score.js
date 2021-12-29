import React from 'react'

function Score(props) {
  const { score, highScore } = props;
  return (
    <div className='score'>
      <div>Current Score: {score}</div>
      <div>High Score : {highScore}</div>
    </div>
  )
}

export default Score
