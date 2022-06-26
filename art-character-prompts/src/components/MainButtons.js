import { characterSpecies, characterTypes } from "../data";

const MainButtons = (props) => {
    const { handleType, handleSpecies, handleSecSpec, character, handleGender } = props
    const { type, species, isHybrid, gender, secondSpecies } = character;
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
