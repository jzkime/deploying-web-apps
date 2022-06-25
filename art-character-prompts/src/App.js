import './App.css';
import { useState, useEffect } from 'react';

import { characterSpecies, characterTypes, emotions, elements } from './data'
import Character from './components/Character';
import Header from './components/Header'
import ContentTraits from './components/ContentTraits'

let char;

const initialCharcter = {
  type: '',
  species: '',
  isHybrid: false
}
const initialAddTraits ={
  emotion: '',
  element: ''
}

function App() {
  const [ character, setCharacter ] = useState(initialCharcter);
  const { type, species, isHybrid } = character;

  const [ wantMore, setWantMore ] = useState(false);

  const [ moreTraits, setMoreTraits ] = useState(initialAddTraits);
 
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

  const handleReset = () => {
    setCharacter(initialCharcter);
    setMoreTraits(initialAddTraits)
  }

  return (
    <div className="App">
        <Header />
      <section className='contents'>
        <div className='main-content'>
          <Character type={type} species={species}/>

          <div className='generate-buttons'>
            <button disabled={type} onClick={() => handleType(characterTypes.length-1)}>generate type</button>
            {type && <button disabled={species} onClick={handleSpecies}>generate species</button>}
            {isHybrid && <button disabled={!isHybrid} onClick={handleSecSpec}>+ 1/2 species</button>}
          </div>
          </div>
          <div className='content-bottom'>
            <button onClick={() => setWantMore(!wantMore)}>{wantMore ? 'hide' : 'show more'} traits</button>
            <button disabled={!type} onClick={handleReset}>restart</button>
          </div>
          <div className={`additional-content ${wantMore ? 'active' : ''}`} >
            <div className='additional-left'>
              <button disabled={moreTraits.emotion} onClick={() => setMoreTraits({...moreTraits, emotion: emotions[ranNum(emotions.length-1)]})}>generate emotion</button>
              <button disabled={moreTraits.element} onClick={() => setMoreTraits({...moreTraits, element: elements[ranNum(elements.length-1)]})} >generate element</button>
            </div>
            <div className='additional-right'>
              <ContentTraits moreTraits={moreTraits} />
            </div>
          </div>
         
        </section>
    </div>
  );
}

export default App;
