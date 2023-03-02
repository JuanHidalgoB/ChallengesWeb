import { useState } from "react"

const Counter  = ({value}) => {
    const [counter,setCounter] = useState(value)

    const handleAdd = () =>{
        setCounter(counter + 1)
    }
    const handleSubstract = () =>{
        setCounter(counter - 1)
    }

    const handleReset = () =>{
        setCounter(value)
    }

    return(
        <>
        <h1>{counter}</h1> 
        <button onClick={() => handleAdd()}>Add</button>
        <button onClick={() => handleSubstract()}>Substract</button>
        <button onClick={() => handleReset()}>Reset</button>
        </>
    )
}

export default Counter