import { SET_EMOTION, SET_ELEMENT, SET_ADDITIONAL } from "./titles"
import { emotions, elements, additionalCharacteristics as addCh } from "../data"
import ranNum from "./ranNum"

export const handleEmotion = () => {
    return({type: SET_EMOTION, payload: emotions[ranNum(emotions.length-1)]})
}

export const handleElement = () => {
    return({type: SET_ELEMENT, payload: elements[ranNum(elements.length-1)]})
}

export const handleAdd = () => {
    return({type: SET_ADDITIONAL, payload: addCh[ranNum(addCh.length-1)]})
}