import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Countar'
import Team from './Team'

function App() {
  // function handleClick(){
  //   alert('this is your click me')

  // }
  const handleClick2=()=>{
    alert('click me')
  }
  const addToFive=(sum)=>{
 alert(sum + 7)
  }


  return (
    <>

      <div>
        <Team></Team>
        <Counter> </Counter>
        <h1>welcome to my app</h1>
        {/* ata holo vejailla */}
        <button onClick={()=>addToFive(5)} >click me</button>
        <button onClick={handleClick2} >click me2</button>
        <button onClick={()=>{alert('this third button')}} >click me23</button>
        
        
      </div>
     
    </>
  )
}

export default App
