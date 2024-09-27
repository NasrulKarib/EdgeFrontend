import React from 'react'

const FirstComponent = ({info}) => {
  const {name, roll, emoji, fruits} = info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{roll}</h2>
      {emoji}
      <h2>Favorite Food : {
        fruits.map(fruit=>
            <p>{fruit}</p>
        )
      }</h2>

    </div>
  )
}

export default FirstComponent
