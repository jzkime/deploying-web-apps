import './App.css';
import { useState, useEffect } from 'react';

import { 
characterSpecies, hybrid, characterTypes, emotions, elements, 
back, adjBack, colors, gender, basedOn
} from './data'
import Character from './components/Character';
import Header from './components/Header'
import ContentTraits from './components/ContentTraits'
import MainButtons from './components/MainButtons'
import Design from './components/Design'

let char;

const initialCharcter = {
  type: '',
  species: '',
  isHybrid: false,
  gender: '',
  secondSpecies: ''
}
const initialAddTraits ={
  emotion: '',
  element: ''
}

const initialDesigns = {
  back: '',
  head: '',
  eyeColor: '',
  additional: '',
  skinColor: '',
  clothesType: ''
}

function App() {
  const [ character, setCharacter ] = useState(initialCharcter);
  const { type, species, secondSpecies} = character;

  const [ wantMore, setWantMore ] = useState(false);
  const [ moreTraits, setMoreTraits ] = useState(initialAddTraits);

  const [ wantDesign, setWantDesign ] = useState(false);
  const [ designs, setDesign ] = useState(initialDesigns);
  const { back, ears, eyeColor, scar } = designs;
 
  const ranNum = (num) => {
    let number = Math.round(Math.random() * num)
    number !== char ? char = number : char = Math.round(Math.random() * num);
    return char;
  }
  const handleType = (typeL) => {
    setCharacter({...character, type: characterTypes[ranNum(typeL)]})
  }

  const ver = () => {
    if(type === 'humanoid' || type === 'robot') return characterSpecies.humanoid_robot;
    if(type === 'creature') return characterSpecies.creature;
    if(type === 'hybrid') return hybrid
  }

  const handleSpecies = () => {
    const v = ver();
    if(type === 'humanoid' || type === 'robot') return setCharacter({...character, species: v[ranNum(v.length-1)].name})
    setCharacter({...character, species: v[ranNum(v.length-1)]})
  }

  const handleSecSpec = () => {
    let othSpec = hybrid[ranNum(hybrid.length-1)]
    setCharacter({...character, secondSpecies: othSpec, isHybrid: false})
  }
  const handleGender = () => {
    setCharacter({...character, gender: gender[ranNum(gender.length-1)]})
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
          <Character character={character}/>
          <MainButtons handleType={handleType} handleSpecies={handleSpecies} handleSecSpec={handleSecSpec} character={character} handleGender={handleGender} />
        </div>

        <div className={`content-restart`}>
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
        <div className={`additional-content ${wantDesign && 'active'}`}>
          <div className='additional-left'>
            <Design />
          </div>
          <div className='additional-right'>
          </div>
        </div>
        </section>
    </div>
  );
}

export default App;
