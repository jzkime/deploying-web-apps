import { initialCharcter, initialAddTraits, initialDesigns, initialDecided, initialRef, initialMore } from './initial'
import 
{ RESET, SET_TYPE, SET_SPECIES, SET_GENDER, SET_ISHYBRID, SET_SECONDSPECIES,
SET_EMOTION, SET_ELEMENT, SET_ADDITIONAL
} from './titles'
import * as act from './titles'
import { combineReducers } from 'redux';

export const resetAll = () => {
    return({type: RESET})
}

export const characterReducer = (state = initialCharcter, action) => {
    switch(action.type) {
        case SET_TYPE:
            return({...state, type: action.payload});
        case SET_SPECIES:
            console.log("from character reducer", action)
            return({...state, species: action.payload.name});
        case SET_GENDER:
            return({...state, gender: action.payload});
        case SET_ISHYBRID:
            return({...state, isHybrid: action.payload})
        case SET_SECONDSPECIES:
            return({...state, secondSpecies: action.payload.name, isHybrid: false})
        case RESET:
            return initialCharcter
        default:
            return state;
    }
}

export const traitReducer = (state = initialAddTraits, action) => {
    switch(action.type) {
        case SET_EMOTION:
            return ({...state, emotion: action.payload})
        case SET_ELEMENT:
            return ({...state, element: action.payload})
        case SET_ADDITIONAL:
            return ({...state, additional: action.payload})
        case RESET: 
            return initialAddTraits
        default: 
            return state
    }
}

export const designReducer = (state = initialDesigns, action) => {
    switch(action.type) {
        case act.SET_BACK:
            return({...state, ...action.payload})
        case act.SET_EYE:
            return({...state, eyeColorQues: action.payload})
        case act.SET_HEAD:
            return({...state, ...action.payload})
        case act.SET_CLOTHES_TOP:
            return({...state, ...action.payload})
        case act.SET_CLOTHES_BOTTOM:
            return({...state, ...action.payload})
        case act.SET_SKINCOLOR:
            return({...state, skinColorQues: action.payload})
        case RESET: 
            return initialDesigns
        default: 
            return state
    }
}

export const decideReducer = (state = initialDecided, action) => {
    switch(action.type) {
        case act.DEC_SET:
            return({...state, ...action.payload})
        case act.DEC_BACK:
            return({...state, back: action.payload})
        case RESET:
            return initialDecided;
        default:
            return state;
    }
}

export const decideMore = (state = initialMore, action) => {
    switch(action.type) {
        case act.DEC_MORE:
            return({...state, ...action.payload})
        case RESET:
            return(initialMore);
        default: 
            return state
    }
}

export const referenceReducer = (state = initialRef, action) => {
    switch(action.type) {
        case(act.SET_REF):
            return({...state, showRef: !state.showRef});
        default:
            return state
    }
}

export default combineReducers({
    character: characterReducer, 
    moreTraits: traitReducer, 
    designs: designReducer, 
    decideDesign: decideReducer,
    more: decideMore,
    ref: referenceReducer
})