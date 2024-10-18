import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    console.log(count)

    const handleAdd=()=>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleRemove =()=>{
        const remove  = count -1;
        setCount(remove)
    }
    
    return (
        <div style={{border: '2px solid red'}}>
            <h2>Counter {count}</h2>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>remove</button>
            
        </div>
    )
}