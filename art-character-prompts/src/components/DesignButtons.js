import { basedOn, clothesData, backData, headData, } from '../data'
const { personal, colorBased } = basedOn;
const {top, bottom} = clothesData;

const DesignButtons = ({setDesign, designs, ranNum}) => {
    const { backQues, eyeColorQues, headQues, clothesQuesTop, clothesQuesBottom, skinColorQues } = designs

    const handleBack = () => {
        setDesign({...designs, back1: backData[ranNum(backData.length-1)], 
        back2: backData[ranNum(backData.length-1)],
        backQues: personal[ranNum(personal.length-1)]})
    }
    const handleEye = () => {
        setDesign({...designs, eyeColorQues: colorBased[ranNum(colorBased.length-1)]})
    }
    const handleHead = () => {
        setDesign({...designs, 
        head1: headData[ranNum(headData.length-1)],
        head2: headData[ranNum(headData.length-1)],
        headQues: personal[ranNum(personal.length-1)]
    })
    }
    const handleTop = () => {
        setDesign({...designs,
        clothesTop1: top[ranNum(top.length-1)],
        clothesTop2: top[ranNum(top.length-1)],
        clothesQuesTop: personal[ranNum(personal.length-1)]
        })
    }
    const handleBottom = () => {
        setDesign({...designs,
        clothesBottom1: bottom[ranNum(bottom.length-1)],
        clothesBottom2: bottom[ranNum(bottom.length-1)],
        clothesQuesBottom: personal[ranNum(personal.length-1)]
        })
    }
    const handleSkinColor = () => {
        setDesign({...designs,
            skinColorQues: colorBased[ranNum(colorBased.length-1)]
        })
    }

    return (
        <div className='additional-right'>
            <button disabled={backQues} onClick={handleBack}>back</button>
            <button disabled={eyeColorQues} onClick={handleEye}>eye color</button>
            <button disabled={headQues} onClick={handleHead}>head design</button>
            <button disabled={clothesQuesTop} onClick={handleTop}>clothes: top</button>
            <button disabled={clothesQuesBottom} onClick={handleBottom}>clothes: bottom</button>
            <button disabled={skinColorQues} onClick={handleSkinColor}>skin color</button>
        </div>
    )
}

export default DesignButtons;
