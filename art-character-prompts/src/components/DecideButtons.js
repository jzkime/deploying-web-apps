import { backData, adjData, headData, colorsData, colorsBase } from "../data";
import { useState, useEffect } from "react";

const initialMore = {backMore: false, skinMore: false}

const DecideButtons = ({ setDecideDesign, decideDesign, ranNum }) => {
    const [ more, setMore ] = useState(initialMore)
    const { back, head, eyeColor, skinColor, themeColor1, themeColor2 } = decideDesign;
    const { skinMore, backMore } = more;

    const changeDec = (what, whatData) => {
        setDecideDesign({...decideDesign, [what]: whatData[ranNum(whatData.length-1)]})
    }

    const addAdj = (e) => {
        setMore({...more, [e.target.name]: e.target.checked})
    }

    const handleBack = () => {
        backMore ? 
        setDecideDesign({...decideDesign, back: `${adjData[ranNum(adjData.length-1)]} ${backData[ranNum(backData.length-1)]}`})
        :
        changeDec('back', backData)
    }

    const handleSkinType = () => {
        skinMore ?
        changeDec('skinColor', colorsData)
        :
        changeDec('skinColor', colorsBase)
    }

    useEffect(() => {
        setMore(initialMore)
    }, [])

    return(
        <div className='additional-left'>
          <div className="button-check"> 
            <button disabled={back} onClick={handleBack}>generate back</button> 
            <label> adj? </label> 
            <input disabled={back} type='checkbox' name='backMore' onChange={addAdj} /> 
          </div>
        
        <button disabled={head} onClick={() => changeDec('head', headData)}>generate head acc</button> 
        <button disabled={eyeColor} onClick={() => changeDec('eyeColor', colorsData)}>generate eye color </button> 
          
          <div className='button-check'> 
            <button disabled={skinColor} onClick={handleSkinType} name='skinColor' >skin color</button>
            <label >all colors?</label>
            <input type='checkbox' name='skinMore' onChange={addAdj} disabled={skinColor} />
          </div>
            <button disabled={themeColor1} onClick={() => changeDec('themeColor1', colorsData)}>theme color(1)</button>
            <button disabled={themeColor2} onClick={() => changeDec('themeColor2', colorsData)}>theme color(2)</button>
        </div>
    )
}

export default DecideButtons;
