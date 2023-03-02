import { useEffect, useState } from 'react'

export const useFecth = (url) =>{
    const[state, setState] = useState({
        data: null,
        isLoading:true,
        hasError: null
    })

    const getFetch = async () =>{
        const api = await fetch(url);
        const data = await api.json();

        useState({
            data,
            isLoading: false,
            hasError: null
        })
    }
    useEffect(()=>{
        getFetch()
    }, [url])

    return {
        ...state
    }
}