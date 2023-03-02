import { useState } from "react"
import {useCounter} from "./hooks/useCounter"

const Counter  = ({value}) => {

    const{counter,handleAdd,handleSubstract,handleReset} = useCounter(value)

    return(
    <>
    <h1>Counter</h1>
    <button onClick={ () => handleAdd() }> +1 </button>
    <button onClick={ () => handleSubstract() }> -1 </button>
    <button onClick={() => handleReset()}> Reset </button>
    <br />
    <span> {counter} </span>
    </>
    )
}

export default Counter