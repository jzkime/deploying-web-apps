import './App.css';
import { useState, useEffect } from 'react';

import { characterSpecies, characterTypes } from './data'
import Character from './components/Character';

function App() {
  const [ type, setType ] = useState(null)
  const [ species, setSpecies ] = useState(null)
  const [ secondSpec, setSecondSpec ] = useState(null)
  const [ isHybrid, setIsHybrid ] = useState(false)

  const ranNum = (num) => {
    return Math.round(Math.random() * num)
  }
  const handleType = (typeL) => {
    setType(characterTypes[ranNum(typeL)])
  }

  const ver = () => {
    if(type === 'humanoid' || 'robot') return 'humanoid_robot';
    if(type === 'beast') return type
    if(type === 'hybrid') return type
  }

  const handleSpecies = () => {
    const v = ver()
    setSpecies(characterSpecies[v][ranNum(characterSpecies[v].length-1)])
  }

  const handleSecSpec = () => {
    const v = ver()
    let othSpec = characterSpecies[v][ranNum(characterSpecies[v].length-1)]
    // if(species === othSpec) 
    setSecondSpec(othSpec)
  }

  useEffect(() => {
    if(type==='hybrid') setIsHybrid(true);
  }, [type])

  return (
    <div className="App">
        <h1>Random Character Generator!</h1>
        <Character type={type} species={species} secondSpec={secondSpec}/>
        {!type && <button onClick={() => handleType(characterTypes.length-1)}>randomly generate type!</button>}
        {(type && !species) && <button onClick={handleSpecies}>randomly generate species!</button>}
        {(isHybrid && !secondSpec) && <button onClick={handleSecSpec}>generate other half of species!</button>}
    </div>
  );
}

export default App;
