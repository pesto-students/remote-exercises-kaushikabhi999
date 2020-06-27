import React from 'react';

function Food(props) {

  const foodStyle = {
    left: `${props.food[0]}%`,
    top: `${props.food[1]}%`
  }

  return (
    <div className="snake-food" style={foodStyle}></div>
  )
}

export default Food;