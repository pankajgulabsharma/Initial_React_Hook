import React from 'react';
import './App.css';
import Cards from './Cards';
import Header, { var1, Header2, add } from './Header';
import Props from './Props';
import Data from './Data';
import SlotMachine from './SlotMachine';

function App() {
  return (
    <div className="App">
      <ol>
        <li>{var1}</li>
        <li>{Header2()}</li>
        <li>{add(55, 4)}</li>
        <li>{Header()}</li>
      </ol>
      <Header />
      <Header2 />
      {/* --------------------------------- */}
      <Props name="muskan" text={{ obj: "parsing object" }} />
      {/* -------------------------------- */}
      {Data.map((curtVal) => {
        return (
          <Cards
            key={curtVal.id}
            mysrc={curtVal.mysrc}
            cardcategory={curtVal.cardcategory}
            cardtitle={curtVal.cardtitle}
            link={curtVal.link}
          />
        );
      })}
      {/* -------------------------------------- */}

      <SlotMachine x="😄" y="😄"  z="🦀" />
      <SlotMachine x="😄" y="😄"  z="😄" />
      <SlotMachine x="😄" y="😄"  z="😢" />
    </div>
    
  );
}

export default App;
