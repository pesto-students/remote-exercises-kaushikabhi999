import React from 'react';

function Snake(props) {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const snakeStyle = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className="snake-dot" key={i} style={snakeStyle}></div>
        )
      })}
    </div>
  )
}

export default Snake;