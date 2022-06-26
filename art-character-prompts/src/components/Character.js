const Character = ({character}) => {
    const {type, species, gender, secondSpecies} = character;
    console.log('species: ', species)
    return(
    <section className="create-chara">
        <h2> {!type ? 'click on the button to start generating!' : 'Your character is...'}</h2>
        {type && <p>Type: <strong>{type}</strong></p>}
        {species && <p>Species: <strong>{species} {secondSpecies && `+ ${secondSpecies}`}</strong></p>}
        {gender && <p>Gender: <strong>{gender}</strong></p>}
    </section>
    )
}

export default Character;