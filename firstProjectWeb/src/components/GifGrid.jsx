import {useEffect} from 'react'
import {useFetchGifs} from "../hooks/useFetchGif";
import {GifItem} from "./GifItem";
import './GifGrid.css'

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
        <h3> {category}</h3>
        <div className='card-grid'>
            {
                images.map((image,key)=>{

                    return <GifItem key = {key} {...image}></GifItem>
                })
            }
        </div>
        </>
    )
}
