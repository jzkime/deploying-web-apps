import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Design from './components/Design'
import DesignButtons from './components/DesignButtons'
import Decide from './components/Decide'
import DecideButtons from './components/DecideButtons'
import { initialWant, initialDesigns, initialDecided, initialRef } from './reducer/initial'
import SideTraits from './components/sidebar/SideTraits'
import ContentTraits from './components/sidebar/ContentTraits'
import TopContent from './components/topContent/TopContent';

import { connect } from 'react-redux'
import { handleHybrid } from './reducer/actionCh'
import { resetAll } from './reducer/reducer'

let char;

function App(props) {
  const {character, handleHybrid, resetAll} = props;
  const { type, secondSpecies } = character

  const [ wantMore, setWantMore ] = useState(initialWant);
  const { traitWant, designWant, decideWant } = wantMore;

  const [ references, setReferences ] = useState(initialRef)

  useEffect(() => {
    if(type==='hybrid' && !secondSpecies) handleHybrid(true);
  }, [type])

  const handleMore = (e, tab) => {
    setWantMore({...initialWant, [e.target.name]: !tab})
  }

  return (
    <div className="App">
        <Header />
          <section className='contents'>
          <TopContent />


        <div className={`content-restart`}>
          <button className={traitWant ? 'active-button' : ''} onClick={(e) => handleMore(e, traitWant)} name='traitWant'>{traitWant ? 'hide' : 'show more'} traits</button>
          <button onClick={resetAll}>restart</button>
          <button className={designWant ? 'active-button' : ''} onClick={(e) => handleMore(e, designWant)} name='designWant'>{designWant ? 'hide' : 'show'} design</button>
          <button className={decideWant ? 'active-button' : ''} onClick={(e) => handleMore(e, decideWant)} name='decideWant'>decide designs for me</button>
        </div>

        <div className={`additional-content ${traitWant ? 'active' : ''}`} >
            <SideTraits />
            <ContentTraits /> 
        </div>
        <div className={`additional-content ${designWant ? 'active' : ''} decide-Col`}>
          <h3>generate questions based off your surroundings/about you and pick the design that fits!</h3>
          <Design />
          <DesignButtons />
        </div>

        <div className={`additional-content ${decideWant ? 'active' : ''}`}>
          <DecideButtons />
          <Decide  />
        </div>
      </section>
    </div>
  );
}

export default connect(st => st, {handleHybrid, resetAll})(App);
