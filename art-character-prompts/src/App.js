import './App.css';
import { useState, useEffect } from 'react';

import { characterSpecies, characterTypes } from './data'
import Character from './components/Character';
import Header from './components/Header'

let char;
function App() {
  const [ type, setType ] = useState(null)
  const [ species, setSpecies ] = useState(null)
  const [ secondSpec, setSecondSpec ] = useState(null)
  const [ isHybrid, setIsHybrid ] = useState(false)

  const ranNum = (num) => {
    char = Math.round(Math.random() * num)
    return char;
  }
  const handleType = (typeL) => {
    setType(characterTypes[ranNum(typeL)])
  }

  const ver = () => {
    if(type === 'humanoid' || type === 'robot') return 'humanoid_robot';
    if(type === 'beast') return type;
    if(type === 'hybrid') return 'hybrid()';
  }

  const handleSpecies = () => {
    const v = ver();
    type === 'hybrid' ? 
    setSpecies(characterSpecies["hybrid"]()[ranNum(characterSpecies["hybrid"]().length-1)])
    :
    setSpecies(characterSpecies[v][ranNum(characterSpecies[v].length)])
  }

  const handleSecSpec = () => {
    let othSpec = characterSpecies["hybrid"]()[ranNum(characterSpecies["hybrid"]().length-1)]
    setSecondSpec(othSpec)
  }

  useEffect(() => {
    if(type==='hybrid') setIsHybrid(true);
  }, [type])

  console.log(species)
  return (
    <div className="App">
        <Header />
      <section className='contents'>
          <Character type={type} species={species} secondSpec={secondSpec}/>

          <div className='generate-buttons'>
            <button disabled={type} onClick={() => handleType(characterTypes.length-1)}>randomly generate type!</button>
            {type && <button disabled={species} onClick={handleSpecies}>randomly generate species!</button>}
            {isHybrid && <button disabled={secondSpec} onClick={handleSecSpec}>generate other half of species!</button>}
          </div>
        </section>
    </div>
  );
}

export default App;
