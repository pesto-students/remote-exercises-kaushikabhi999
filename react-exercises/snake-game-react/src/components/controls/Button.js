import React from 'react';

function Button({ styleClass, onClick, innerText }) {
  return (
    <button className={styleClass} onClick={onClick} >
      {innerText}
    </button>
  )
}

export default Button;