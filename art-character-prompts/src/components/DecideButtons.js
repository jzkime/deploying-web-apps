import { backData, headData, colorsData, colorsBase } from "../data";
import { connect } from "react-redux";
import * as act from '../reducer/actionDecide'

const DecideButtons = ({ decideDesign, changeDec, decBack, more, addAdj }) => {
    const { back, head, eyeColor, skinColor, themeColor1, themeColor2 } = decideDesign;
    const { skinMore, backMore } = more;

    const handleBack = () => {
        backMore ? 
        decBack()
        :
        changeDec('back', backData)
    }

    const handleSkinType = () => {
        skinMore ?
        changeDec('skinColor', colorsData)
        :
        changeDec('skinColor', colorsBase)
    }

    return(
        <div className='additional-left'>
          <div className="button-check"> 
            <button disabled={back} onClick={handleBack}>generate back</button> 
            <label> adj? </label> 
            <input disabled={back} type='checkbox' name='backMore' onChange={addAdj} checked={backMore} /> 
          </div>
        
        <button disabled={head} onClick={() => changeDec('head', headData)}>generate head acc</button> 
        <button disabled={eyeColor} onClick={() => changeDec('eyeColor', colorsData)}>generate eye color </button> 
          
          <div className='button-check'> 
            <button disabled={skinColor} onClick={handleSkinType} name='skinColor' >skin color</button>
            <label >all colors?</label>
            <input type='checkbox' name='skinMore' onChange={addAdj} disabled={skinColor} checked={skinMore} />
          </div>
            <button disabled={themeColor1} onClick={() => changeDec('themeColor1', colorsData)}>theme color(1)</button>
            <button disabled={themeColor2} onClick={() => changeDec('themeColor2', colorsData)}>theme color(2)</button>
        </div>
    )
}

export default connect(st => st, act)(DecideButtons);
