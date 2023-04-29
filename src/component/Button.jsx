import React from 'react'

export default function Button({handleClick}) {
  return (
    <div className="btn-wrapper">
    <h3>Generate New Cocktail</h3>
    <button onClick={handleClick} className="btn">
      New Cocktail 🍸
    </button>
  </div>
  )
}
