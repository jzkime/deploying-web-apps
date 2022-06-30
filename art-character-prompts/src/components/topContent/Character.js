import { connect } from "react-redux";

const Character = ({character}) => {
    const { type, species, gender, secondSpecies } = character;
    return(
    <section className="create-chara">
        <h2> {!type ? 'click on the button to start generating!' : 'Your character is...'}</h2>
        {type && <p>Type: <strong>{type}</strong></p>}
        {(species || secondSpecies) && <p>Species: <strong>{species} {secondSpecies && `+ ${secondSpecies}`}</strong></p>}
        {gender && <p>Gender: <strong>{gender}</strong></p>}
    </section>
    )
}

export default connect(st => st)(Character);