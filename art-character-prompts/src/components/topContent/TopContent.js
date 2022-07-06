import Character from "./Character"
import MainButtons from "./MainButtons"
import { connect } from "react-redux"
import * as act from '../../reducer/actionRef'

const search = 'https://www.google.com/search?tbm=isch&q='
const TopContent = props => {
    console.log(props)
    const {character, setRef, showRef, decideDesign} = props
    const {species, secondSpecies} = character
    const decideKeys = Object.keys(decideDesign)

    const makeDiv = (what, forThis) => {
        return (
            <div className="ref-sect">
                <p>{forThis}: <strong>{what}</strong></p> 
                <a href={`${search}${what}`} target='_blank' rel='noopener noreferrer'>go to google</a>
            </div>)
    }
    return(
        <div className='main-content'>
          <Character/>
          <MainButtons/>
                <button onClick={setRef}>{showRef ? 'hide' : 'show'} references</button>
            <div className={`ref-container ${props.showRef ? 'active' : ''}`}>
                {(!species && !secondSpecies) && <p>nothing to reference yet!</p>}
                {species && makeDiv(species, 'species')}
                {secondSpecies && makeDiv(secondSpecies, 'hybrid oth half')}
                {decideKeys.map(key => decideDesign[key] && makeDiv(decideDesign[key], key))}
            </div>
        </div>
    )
}
export default connect(st => {
    const { ref } = st
    return({...ref, ...st})
}, act)(TopContent);