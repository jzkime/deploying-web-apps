import './App.css';
import { useState, useEffect } from 'react';

import { characterSpecies, characterTypes } from './data'
import Character from './components/Character';
import Header from './components/Header'

let char;

const initialCharcter = {
  type: '',
  species: '',
  isHybrid: false
}
function App() {
  const [ character, setCharacter ] = useState(initialCharcter);
  const { type, species, isHybrid } = character
 
  const ranNum = (num) => {
    let number = Math.round(Math.random() * num)
    number !== char ? char = number : char = Math.round(Math.random() * num);
    return char;
  }
  const handleType = (typeL) => {
    setCharacter({...character, type: characterTypes[ranNum(typeL)]})
  }

  const ver = () => {
    if(type === 'humanoid' || type === 'robot') return 'humanoid_robot';
    if(type === 'beast') return type;
    if(type === 'hybrid') return 'hybrid()';
  }

  const handleSpecies = () => {
    const v = ver();
    type === 'hybrid' ? 
    setCharacter({...character, species: characterSpecies["hybrid"]()[ranNum(characterSpecies["hybrid"]().length-1)]})
    :
    setCharacter({...character, species: characterSpecies[v][ranNum(characterSpecies[v].length)]})
  }

  const handleSecSpec = () => {
    let othSpec = characterSpecies["hybrid"]()[ranNum(characterSpecies["hybrid"]().length-1)]
    setCharacter({...character, species: `${character.species} + ${othSpec}`, isHybrid: false})
  }

  useEffect(() => {
    if(type==='hybrid') setCharacter({...character, isHybrid: true});
  }, [type])

  return (
    <div className="App">
        <Header />
      <section className='contents'>
          <Character type={type} species={species}/>

          <div className='generate-buttons'>
            <button disabled={type} onClick={() => handleType(characterTypes.length-1)}>randomly generate type!</button>
            {type && <button disabled={species} onClick={handleSpecies}>randomly generate species!</button>}
            {isHybrid && <button disabled={!isHybrid} onClick={handleSecSpec}>generate other half of species!</button>}
          </div>
        </section>
    </div>
  );
}

export default App;
