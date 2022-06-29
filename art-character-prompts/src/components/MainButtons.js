import { characterSpecies, characterTypes, hybrid, genderData } from "../data";

const MainButtons = (props) => {
    const { setCharacter, ranNum, character } = props
    const { type, species, isHybrid, gender, secondSpecies } = character;

    const ver = () => {
        if(type === 'humanoid' || type === 'robot') return characterSpecies.humanoid_robot;
        if(type === 'creature') return characterSpecies.creature;
        if(type === 'hybrid') return hybrid
      }

    const handleSpecies = () => {
    const v = ver();
    if(type === 'humanoid' || type === 'robot') return setCharacter({...character, species: v[ranNum(v.length-1)].name})
    setCharacter({...character, species: v[ranNum(v.length-1)]})
    }

    const handleSecSpec = () => {
    let othSpec = hybrid[ranNum(hybrid.length-1)]
    setCharacter({...character, secondSpecies: othSpec, isHybrid: false})
    }
    const handleGender = () => {
    setCharacter({...character, gender: genderData[ranNum(genderData.length-1)]})
    }

    const handleType = (typeL) => {
        setCharacter({...character, type: characterTypes[ranNum(typeL)]})
    }

    return(
        <div className='generate-buttons'>
            <button disabled={type} onClick={() => handleType(characterTypes.length-1)}>generate type</button>
            {type && <button disabled={species} onClick={handleSpecies}>generate species</button>}
            {isHybrid && <button disabled={secondSpecies} onClick={handleSecSpec}>+ 1/2 species</button>}
            {<button disabled={gender} onClick={handleGender}>generate gender</button>}
        </div>
    )
}

export default MainButtons;
