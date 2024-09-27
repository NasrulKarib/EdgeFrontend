import React from 'react'
import Title from './Title/Title'
import Radio from './RadioGroup/Radio'
const Gender = () => {
  return (
    <div style={{display : 'flex'}}>
      <Title/>
      <div style={{padding: '13px'}}>
        <Radio />
      </div>
    </div>
  )
}

export default Gender
