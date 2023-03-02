import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFecth } from "../hooks/useFetch";

export const MultipleCustomHooks = () =>{
    const {counter, handleAdd} = useCounter(1)
    const {data, isLoading, hasError} = useFecth(`https://breakingbadapi.com/api/quotes/${counter}`)

    return (
        <>
        <h1>MultipleCustomHooks</h1>
        <hr />
        {isLoading?(
            <div>
                Loading...
            </div>
        ):(
            <blockquote>
                <p>{data[0]?.quote}</p>
                <footer>{data[0]?.author}</footer>
            </blockquote>
            
        )}
        <button onClick={() => handleAdd()}>Next Cuote</button>
        </>
    )
}