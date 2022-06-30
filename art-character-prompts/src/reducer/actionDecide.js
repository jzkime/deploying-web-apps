import * as act from './titles'
import ranNum from './ranNum'
import { adjData, backData } from '../data'

export const changeDec = (what, whatData) => {
    return({type: act.DEC_SET, payload: {[what]: whatData[ranNum(whatData.length-1)]}})
}

export const decBack = () => {
    return({type: act.DEC_BACK, payload: `${adjData[ranNum(adjData.length-1)]} ${backData[ranNum(backData.length-1)]}`})
}

export const addAdj = (e) => {
    return({type: act.DEC_MORE, payload: {[e.target.name]: e.target.checked}})
}