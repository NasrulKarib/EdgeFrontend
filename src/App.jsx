import { useState } from 'react'
import Name from './components/Name/Name'
import Mail from './components/Mail/Mail'
import Gender from './components/Gender/Gender'
import Courses from './components/Courses/Courses'
import Button from './components/Button/Button'
import FirstComponent from './components/FirstComponent/FirstComponent'
import SecondComponent from './components/FirstComponent/SecondComponent'
import Products from './components/Products/Products'
function App() {
  
  const array = ['Apple','banana'];
  function greet(name) {
    return `Hello, ${name}!`;
  }
  const products = [
    {
      id : '1',
      name : 'Bag',
      color : ['Red','Green']
    },
    {
      id : '2',
      name : 'Bottle',
      color : ['White','Green']
    },
    {
      id : '3',
      name : 'Mouse',
      color : ['Black','White']
    },
  ]
  const student = {
    name : 'Aru',
    roll : '1904115',
    emoji : '😒👌😂',
    fruits : ['Apple',' Banana'],
  }
  return (
    <div >
      {/* <h1>Form</h1>
      <form>
        <Name/>
        <Mail/>
        <Gender/>
        <Courses/>
        <Button/>
      </form> */}
      {/* <FirstComponent info = {student}/> */}
      <Products info = {products}/>
    </div>
  )
}

export default App
