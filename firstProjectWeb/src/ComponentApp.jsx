import { useEffect, useState } from "react";

const GifExpertApp = () =>{

    const [categories,setCategories] = useState(['First category', 'Second category'])
    const [category, setCategory] = useState('')
    
    const onAddCategory = () =>{
        setCategories(x => [...x,category])
        setCategory('')
    }

    const onSetCategory = (evt) =>{
        setCategory(evt.target.value)
    }

    return(
        <>
        <h1>GifExpertApp</h1>
        <input type="text" value={category} onChange = {(event) => onSetCategory(event)} />
        <button onClick={() => onAddCategory()}>Add Category</button>
        <ol>
            {categories.map((categories,key) => {
                return(
                <li key={key}>{categories}</li>
                )
                }
                )
            }
        </ol>

        </>
    )
}

export default GifExpertApp