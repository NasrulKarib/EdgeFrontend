import React from 'react'
import Product from './Product'

const Products = ({info}) => {
  return (
    <div>
     {
        info.map(data => 
          <Product  product = {data}/>
        )
     }
    </div>
  )
}

export default Products
