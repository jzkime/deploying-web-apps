const Character = ({type, species}) => {
    return(
    <section className="create-chara">
        <h2> {!type ? 'click on the button to start generating!' : 'Your character is...'}</h2>
        {type && <p>Type: <strong>{type}</strong></p>}
        {species && <p>Species: <strong>{species}</strong></p>}
    </section>
    )
}

export default Character;