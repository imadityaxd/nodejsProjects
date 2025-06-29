
import { useState } from 'react'

function Counterbutton() {

    let [counter, setCounter] = useState(0);

    const increment = () =>{
        if (counter<30){setCounter(counter + 1 )}
    }
    const decrement = () =>{
        if (counter > 0) {setCounter(counter - 1 )}
    }
    
  return (
    <>
        <h1> Use of hooks - useState</h1>
        <button className=" border bg-red-200 p-2"onClick={increment }>Increment: {counter}</button>
        <button className=" border bg-red-200 p-2"onClick={decrement }>Decrement: {counter}</button>
    </>

  )
}

export default Counterbutton