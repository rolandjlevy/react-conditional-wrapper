import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ConditionalWrapper from './ConditionalWrapper';

function App() {

  const [toggleState, setToggle] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setToggle((prevState) => !prevState)}>Toggle child</button>
        <ConditionalWrapper
          condition={toggleState}
          wrapper={children => (<div className="box">{children}</div>)}
        >
        <div>
          Child component
        </div>
        </ConditionalWrapper>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
