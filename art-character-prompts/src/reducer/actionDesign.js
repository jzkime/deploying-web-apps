import * as act from './titles'
import ranNum from './ranNum'
import { backData, headData, clothesData, basedOn } from '../data'
const { top, bottom } = clothesData;
const { personal, colorBased } = basedOn;

export const handleBack = () => {
   return({type: act.SET_BACK, payload: 
    {back1: backData[ranNum(backData.length-1)], 
    back2: backData[ranNum(backData.length-1)],
    backQues: personal[ranNum(personal.length-1)]}})
}

export const handleEye = () => {
    return({type: act.SET_EYE, payload: colorBased[ranNum(colorBased.length-1)]})
}

export const handleHead = () => {
    return({type: act.SET_HEAD, payload: {
    head1: headData[ranNum(headData.length-1)],
    head2: headData[ranNum(headData.length-1)],
    headQues: personal[ranNum(personal.length-1)]
    }
})
}

export const handleTop = () => {
    return({type: act.SET_CLOTHES_TOP, payload: {
    clothesTop1: top[ranNum(top.length-1)],
    clothesTop2: top[ranNum(top.length-1)],
    clothesQuesTop: personal[ranNum(personal.length-1)]
    }
})
}

export const handleBottom = () => {
    return({type: act.SET_CLOTHES_BOTTOM, payload: {
    clothesBottom1: bottom[ranNum(bottom.length-1)],
    clothesBottom2: bottom[ranNum(bottom.length-1)],
    clothesQuesBottom: personal[ranNum(personal.length-1)]
    }
})
}

export const handleSkinColor = () => {
    return({type: act.SET_SKINCOLOR, payload: colorBased[ranNum(colorBased.length-1)]})
}