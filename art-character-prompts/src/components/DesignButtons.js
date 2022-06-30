import * as actions from '../reducer/actionDesign'
import { connect } from 'react-redux';

const DesignButtons = (props) => {
    const {designs,
    handleBack, handleEye, handleHead, handleTop, handleBottom, handleSkinColor} = props
    const { backQues, eyeColorQues, headQues, clothesQuesTop, clothesQuesBottom, skinColorQues } = designs

    return (
        <div className='additional-right'>
            <button disabled={backQues} onClick={handleBack}>back</button>
            <button disabled={eyeColorQues} onClick={handleEye}>eye color</button>
            <button disabled={headQues} onClick={handleHead}>head design</button>
            <button disabled={clothesQuesTop} onClick={handleTop}>clothes: top</button>
            <button disabled={clothesQuesBottom} onClick={handleBottom}>clothes: bottoms</button>
            <button disabled={skinColorQues} onClick={handleSkinColor}>skin color</button>
        </div>
    )
}

export default connect(st => st, actions)(DesignButtons);
