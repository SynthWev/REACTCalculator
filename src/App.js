import './App.css';
import freeCodeCampLogo from './img/fcc_primary_large.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  // Hook
  const [input, setInput] = useState('');

  // Input
  const addInput = value => {
    setInput(input + value);
  };

  // = Button
  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Please input a value.');
    }
  };

  return (
    <div className='App'>
    {/* Logo */}
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp Logo'/>
      </div>
      {/* Calculator */}
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={calculateResult}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton manageClear={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
