import { connect } from "react-redux";
import * as actions from "../../reducer/actionCh";

const MainButtons = (props) => {
    const {character, handleType, handleGender, handleSpecies, handleSecSpec } = props
    const {type, species, isHybrid, gender, secondSpecies} = character

    return(
        <div className='generate-buttons'>
            <button disabled={type} onClick={handleType}>generate type</button>
            {type && <button disabled={species} onClick={() => handleSpecies(type)}>generate species</button>}
            {isHybrid && <button disabled={secondSpecies} onClick={handleSecSpec}>+ 1/2 species</button>}
            {<button disabled={gender} onClick={handleGender}>generate gender</button>}
        </div>
    )
}

export default connect(st => st, actions)(MainButtons);
