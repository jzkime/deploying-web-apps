import { connect } from "react-redux";
import * as actions from '../../reducer/actionTr'

const SideTraits = (props) => {
    const { handleEmotion, handleElement, handleAdd, moreTraits } = props

return(
    <div className='additional-left'>
            <button disabled={moreTraits.emotion} onClick={handleEmotion}>generate emotion</button>
            <button disabled={moreTraits.element} onClick={handleElement} >generate element</button>
            <button disabled={moreTraits.additional} onClick={handleAdd} >generate additional</button>
    </div>
)
}

export default connect(st => st, actions)(SideTraits);