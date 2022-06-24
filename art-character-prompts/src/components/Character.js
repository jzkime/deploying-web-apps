const Character = ({type, species, secondSpec}) => {
    return(
    <div>
        {type && <h3>Type: {type}</h3>}
        {species && <h3>Species: {species} {secondSpec && `+ ${secondSpec}` } </h3>}
    </div>
    )
}

export default Character;