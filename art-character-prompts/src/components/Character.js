const Character = ({type, species}) => {
    return(
    <section className="create-chara">
        <h2> {!type ? 'click on the button to start generating!' : 'Your character...'}</h2>
        {type && <p>Type: {type}</p>}
        {species && <p>Species: {species}</p>}
    </section>
    )
}

export default Character;