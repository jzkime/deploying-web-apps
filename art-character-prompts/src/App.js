import './App.css';
import { useState, useEffect } from 'react';

import {  emotions, elements, additionalCharacteristics as addCh
} from './data'
import Character from './components/Character';
import Header from './components/Header'
import ContentTraits from './components/ContentTraits'
import MainButtons from './components/MainButtons'
import Design from './components/Design'
import DesignButtons from './components/DesignButtons'
import Decide from './components/Decide'
import DecideButtons from './components/DecideButtons'

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
  element: '',
  additional: ''
}

const initialDesigns = {
  back1: '',
  back2: '',
  backQues: '',
  head1: '',
  head2: '',
  headQues: '',
  eyeColor: '',
  eyeColorQues: '',
  additional: '',
  skinColor: '',
  skinQues: '',
  clothesTop1: '',
  clothesTop2: '',
  clothesQuesTop: '',
  clothesBottom1: '',
  clothesBottom2: '',
  clothesQuesBottom: '',
  themeColorQues: '',
  themeColor: ''
}

const initialDecided = {
  back: '',
  head: '',
  eyeColor: '',
  skinColor: '',
  clothesType: '',
  themeColor1: '',
  themeColor2: ''
}

const initialWant = {
  traitWant: false,
  designWant: false,
  decideWant: false
}

function App() {
  const [ character, setCharacter ] = useState(initialCharcter);
  const { type } = character;

  const [ wantMore, setWantMore ] = useState(initialWant);
  const { traitWant, designWant, decideWant } = wantMore;

  const [ moreTraits, setMoreTraits ] = useState(initialAddTraits);
  const [ designs, setDesign ] = useState(initialDesigns);
  const [ decideDesign, setDecideDesign ] = useState(initialDecided)
 
  const ranNum = (num) => {
    let number = Math.round(Math.random() * num)
    number !== char ? char = number : char = Math.round(Math.random() * num);
    return char;
  }

  useEffect(() => {
    if(character.type==='hybrid' && !character.secondSpecies) setCharacter({...character, isHybrid: true});
  }, [type])

  const handleReset = () => {
    setCharacter(initialCharcter);
    setMoreTraits(initialAddTraits)
    setDesign(initialDesigns)
    setDecideDesign(initialDecided)
  }

  const handleMore = (e, tab) => {
    setWantMore({...initialWant, [e.target.name]: !tab})
  }

  return (
    <div className="App">
        <Header />
      <section className='contents'>
        <div className='main-content'>
          <Character character={character}/>
          <MainButtons ranNum={ranNum} character={character} setCharacter={setCharacter} />
        </div>

        <div className={`content-restart`}>
          <button className={traitWant ? 'active-button' : ''} onClick={(e) => handleMore(e, traitWant)} name='traitWant'>{traitWant ? 'hide' : 'show more'} traits</button>
          <button onClick={handleReset}>restart</button>
          <button className={designWant ? 'active-button' : ''} onClick={(e) => handleMore(e, designWant)} name='designWant'>{designWant ? 'hide' : 'show'} design</button>
          <button className={decideWant ? 'active-button' : ''} onClick={(e) => handleMore(e, decideWant)} name='decideWant'>decide designs for me</button>
        </div>

        <div className={`additional-content ${traitWant ? 'active' : ''}`} >
          <div className='additional-left'>
            <button disabled={moreTraits.emotion} onClick={() => setMoreTraits({...moreTraits, emotion: emotions[ranNum(emotions.length-1)]})}>generate emotion</button>
            <button disabled={moreTraits.element} onClick={() => setMoreTraits({...moreTraits, element: elements[ranNum(elements.length-1)]})} >generate element</button>
            <button disabled={moreTraits.additional} onClick={() => setMoreTraits({...moreTraits, additional: addCh[ranNum(addCh.length-1)]})} >generate additional</button>
          </div>
            <ContentTraits moreTraits={moreTraits} /> 
        </div>
        <div className={`additional-content ${designWant ? 'active' : ''} decide-Col`}>
          <h3>generate questions based off your surroundings/about you and pick the design that fits!</h3>
          <Design designs={designs}/>
          <DesignButtons setDesign={setDesign} designs={designs} ranNum={ranNum}/>
        </div>

        <div className={`additional-content ${decideWant ? 'active' : ''}`}>
          <DecideButtons decideDesign={decideDesign} setDecideDesign={setDecideDesign} ranNum={ranNum} />
          <Decide decideDesign={decideDesign} />
        </div>
      </section>
    </div>
  );
}

export default App;
