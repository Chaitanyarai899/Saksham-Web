"use client";
import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";

import easyeval from "./easyeval.json";
import easyeval_hindi from "./easyeval_hindi.json"


import jsPDF from 'jspdf';

 
const frameworks = [
  {
    value: "english",
    label: "english",
  },
  {
    value: "hindi",
    label: "hindi",
  },
  
]

function useOnceCall(cb : any , condition = true) {
  const isCalledRef = React.useRef(false);

  React.useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
}
function Braille() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("english")

  interface BrailleItem {
    character: string;
    brailleCode: string;
    string: string;
  }
  const [tableData, setTableData] = useState<BrailleItem[]>([]);
  useEffect(() => {
  console.log("use effect")

  }, []);
  useOnceCall(()=>{
    speak("Put your index fingers on the two bumps of keyboard and place two fingers on side of each bump")
    speakhindi("अपनी तर्जनी को कीबोर्ड के दो उभारों पर रखें और दो उंगलियों को प्रत्येक उभार के किनारे पर रखें")

  })

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
  const brailleMapHindi: Record<string, string> =   {
    "S": "अ",
    "DJ": "इ",
    "FK": "ई",
    "SFL": "उ",
    "SK": "ए",
    "FJ": "ऐ",
    "SFJ": "ओ",
    "DJL": "औ",
    "SF": "क",
    "K": "क़",
    "DJFKL": "ख",
    "DJFKJ": "ख़",
    "SDKL": "घ",
    "FJL": "ङ",
    "SJ": "च",
    "SKL": "छ",
    "DKFJ": "ज",
    "SFJKL": "ज़",
    "FJKL": "झ",
    "DK": "ञ",
    "DFJKL": "ट",
    "DKFJL": "ठ",
    "DJFJL": "ड",
    "SDFJKL": "ढ",
    "DFJK": "त",
    "SJFJL": "थ",
    "SJK": "द",
    "DFJL": "ध",
    "SFJK": "न",
    "SDFJ": "प",
    "DFK": "फ",
    "DJF": "फ़",
    "SD": "ब",
    "JK": "भ",
    "SDFK": "र",
    "SDF": "ल",
    "SDFJL": "व",
    "SJKL": "श",
    "SDK": "ह",
    "SDFJK": "ॐ",
    "SDFJKLI": "त्र",
    "SKLJ": "क्ष",
    "DJFJKL": "ड़",
    "D": "ऽ",
    "J": "्"
  } 
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const downloadAsDoc = () => {
    const element = document.createElement("a");
    const file = new Blob([outputValue], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Saksham_document.doc";
    document.body.appendChild(element); // Required for this to work in Firefox
    element.click();
  };
  const downloadAsPdf = () => {
    const pdf = new jsPDF();
    pdf.text(outputValue, 10, 10); // Add your outputValue text to the PDF
    pdf.save('saksham_pdfdocument.pdf');
  };
 const speakhindi =(text : any) => {
  const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

      utterance.lang='hi-IN'; 
       utterance.rate = 0.8;
  
    synth.speak(utterance);

 }
  const speak = (text: any) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    if(value == "hindi"){
      utterance.lang='hi-IN'; 
       utterance.rate = 0.8;
    }
    synth.speak(utterance);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toUpperCase();
    setInputValue(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(localStorage.getItem("lang") == "english"){
      var a = brailleMap[inputValue]
    }
    else{
      var a = brailleMapHindi[inputValue]
    }
    if (event.key === "Enter") {
      if (a) {
        setOutputValue((prevValue) => prevValue + a);
        setInputValue("");
        speak(a);
      }
    } else if (event.key === " ") {
      event.preventDefault();
      setOutputValue((prevValue) => prevValue.trim() + " ");
      speak("space");
    } else if (event.key === "Backspace" ) {
      // Remove the last character from outputValue
      setOutputValue((prevValue) => prevValue.slice(0, -1));
    }
    else if (event.key.toLowerCase() === "control") {
      // Remove the last character from outputValue
      setInputValue("");
    }
  
  };


  return (
    <div id="main-container" className="divide-y-[3px]  divide-gray-200">
      <div className=" mt-4  flex flex-row justify-center">
        <p className="text-2xl font-semibold font-serif">Online Orbit Writer Evaluation</p>
      </div>  
      <div
        className="h-full grid place-content-start m-4 col-span-4"
        id="input-box"
      >
        <label
          htmlFor="brailleInput"
          className="p-2 font-semibold tracking-wide"
        >
          Enter Braille Key : 
        </label>
        <input
          id="brailleInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown= {handleKeyDown}
          className="w-[32em] mt-3 p-4 rounded-md border-4 border-black/20"
        />
        {outputValue && (
          <div>
            <p className="font-bold text-xl text-stone-900/80 border-4 p-2 rounded-lg border-black tracking-wider mt-3">
              Continuous Word :{" "}
              <p className="inline px-4 rounded-lg py-1 text-rose-600 mx-2">
                {outputValue}
              </p>
            </p>
          </div>
        )}
      </div>
      {localStorage.getItem("lang") == "english" ? 
      <div> {easyeval[Math.floor(Math.random() * 11)].sentence}
              </div> : <div>{easyeval_hindi[Math.floor(Math.random() * 11)].sentence}</div> }
    </div>
  );
}

export default Braille;
