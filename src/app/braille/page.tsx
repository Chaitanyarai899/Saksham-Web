"use client" 
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

function Braille() {
  const brailleMap: Record<string, string> = {
    S: "A",
    SD: "B",
    SK: "C",
    SJK: "D",
    SJD: "F",
    SJKK: "G",
    SKJ: "H",
    DJ: "I",
    DFK: "J",
    SDJ: "L",
    SDF: "M",
    SDFK: "N",
    SDK: "O",
    SDFJ: "P",
    SDFKJ: "Q",
    DF: "S",
    DFDK: "T",
    SL: "U",
    SDFL: "V",
    SDJKL: "W",
    SDFKL: "X",
    SDFKK: "Y",
    SDKK: "Z",
  };
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const speak = (text : any) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toUpperCase();
    setInputValue(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (brailleMap[inputValue]) {
        setOutputValue((prevValue) => prevValue + brailleMap[inputValue]);
        setInputValue('');
        speak(brailleMap[inputValue]);

      }
    } else if (event.key === ' ') {
      event.preventDefault();
      setOutputValue((prevValue) => prevValue.trim() + ' ');
    }
  };

  return (
    <div>
      <label htmlFor="brailleInput">Enter Braille Key:</label>
      <input
        id="brailleInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {outputValue && (
        <p>Continuous Word: {outputValue}</p>
      )}
    </div>
  );
}

export default Braille;
