import React from 'react'

const Product = ({product}) => {
  return (
    <div>
        
      <h1 style={{color:'green'}}>{product.id}</h1>
      <h2 style={{color:'red'}}>{product.name}</h2>
      <p>
      {product.color.map((color, index) => (
          <p key={index}>{color}</p>
        ))}
    </p>
    </div>
  )
}

export default Product
