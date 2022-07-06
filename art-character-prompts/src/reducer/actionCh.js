import { SET_TYPE, SET_SPECIES, SET_GENDER, SET_ISHYBRID, SET_SECONDSPECIES } from './titles'
import { characterSpecies, characterTypes, hybrid, genderData } from "../data";
import ranNum from './ranNum';

const ver = (type) => {
  if(type === 'humanoid' || type === 'robot') return characterSpecies.humanoid_robot;
  if(type === 'creature') return characterSpecies.creature;
  if(type === 'hybrid') return hybrid
}

export const handleType = () => {
    return({type: SET_TYPE, payload: characterTypes[ranNum(characterTypes.length-1)]})
}

export const handleSpecies = (type) => {
  const v = ver(type)
  const sp = v[ranNum(v.length-1)]
    return({type: SET_SPECIES, payload: sp})
}

export const handleSecSpec = () => {
    let othSpec = hybrid[ranNum(hybrid.length-1)]
    return({type: SET_SECONDSPECIES, payload: othSpec})
}

export const handleGender = () => {
    return({type: SET_GENDER, payload: genderData[ranNum(genderData.length-1)]})
}

export const handleHybrid = (hybrid) => {
  return({type: SET_ISHYBRID, payload: hybrid})
}
