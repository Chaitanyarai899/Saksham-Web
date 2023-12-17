"use client";
import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import brailleData from "./braille.json";
import brailleData2 from "./braille2.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import jsPDF from 'jspdf';

function Braille() {
  interface BrailleItem {
    character: string;
    brailleCode: string;
    string: string;
  }
  const [tableData, setTableData] = useState<BrailleItem[]>([]);
  useEffect(() => {
    setTableData(brailleData);
  }, []);

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

  const speak = (text: any) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toUpperCase();
    setInputValue(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (brailleMap[inputValue]) {
        setOutputValue((prevValue) => prevValue + brailleMap[inputValue]);
        setInputValue("");
        speak(brailleMap[inputValue]);
      }
    } else if (event.key === " ") {
      event.preventDefault();
      setOutputValue((prevValue) => prevValue.trim() + " ");
      speak("space");
    } else if (event.key === "Backspace") {
      // Remove the last character from outputValue
      setOutputValue((prevValue) => prevValue.slice(0, -1));
      speak("Delete");
    }
  };

  return (
    <div id="main-container" className="divide-y-[3px]  divide-gray-200">
      {/* <div className='mt-1 p-2' id='info-box'>
            <h1 className='mt-2 text-2xl font-semibold text-center text-stone-900'>
              What is Braille?
            </h1>
            <p className='px-4 py-2 text-center tracking-tight'>
              Braille is a unique tactile writing system designed for individuals who are visually impaired or blind. It employs patterns of raised dots arranged in a rectangular grid to represent letters, numbers, and punctuation. Developed by Louis Braille in the 19th century, this system has become a cornerstone of literacy and independence for the blind community.
            </p>
            <h2 className='mt-2 text-xl font-semibold text-center text-stone-900'>Key Components</h2>
            <ul className='list-disc mt-3 px-8 leading-7'>
              <li>
                <p className='font-bold inline'>Tactile Reading :</p> Braille facilitates reading through touch. Raised dots form characters, allowing individuals to feel and interpret written information using their fingers.
              </li>
              <li>
                <p className='font-bold inline'>Standardization :</p> Braille is a standardized system, ensuring consistency and universal understanding across different languages and regions. It provides a common language for blind individuals.
              </li>
              <li>
                <p className='font-bold inline'>Versatility :</p> Beyond the alphabet, braille represents numbers, punctuation, mathematical symbols, and musical notations. Its versatility makes it a comprehensive system for various applications.
              </li>
            </ul> */}
      {/* <h2 className='mt-2 text-xl font-semibold text-center text-stone-900'>Educational significance</h2> */}
      {/* <ul className='list-disc mt-3 px-8 leading-7'>
              <li>
                <p className='font-bold inline'>Educational Tool :</p> Braille is a crucial educational tool for blind students. It allows independent access to textbooks, educational materials, and written information, contributing to academic success.
              </li>
              <li>
                <p className='font-bold inline'>Curriculum Inclusion :</p> Learning braille is often part of the curriculum for blind students, empowering them with essential literacy skills for effective communication.
              </li>
            </ul> */}
      {/* </div> */}

      <div className=" mt-4  flex flex-row justify-center">
        <p className="text-2xl font-semibold font-serif">Online Orbit Writer</p>
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
          onKeyDown={handleKeyDown}
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
            <div className="flex flex-row">
            <Button
              onClick={downloadAsDoc}
              className=' my-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
            >
              Download as .doc
            </Button>
            <Button
              onClick={downloadAsPdf}
              className=' my-3 ml-3 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-600'
            >
              Download as .pdf
            </Button>
              </div>
           
          </div>
        )}
      </div>
      <div className=" justify-center border-4 border-rose-600 m-4 overflow-y rounded-lg bg-white/70">
        <div className="grid grid-cols-8">
          <div className="h-full col-span-4 overflow-y" id="braille-infobox">
            <Table className="text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400 p-8 w-[95%] h-[90%] m-auto my-4 self-center">
              <TableHeader className="divide-x-[2px] divide-black/20 text-md text-black dark:bg-gray-700 dark:text-gray-400">
                <TableRow className="px-6 py-3 font-semibold text-md text-stone-900">
                  <TableHead className="w-[100px]">Character</TableHead>
                  <TableHead>Braille</TableHead>
                  <TableHead>String</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y-[1px] divide-black/20">
                {tableData.map((item) => (
                  <TableRow
                    key={item.character}
                    className="border-b border-1 dark:bg-gray-800 dark:border-gray-700 my-2 hover:bg-gray-200 hover:text-[16px] hover:text-black/90 transition-all dark:hover:bg-gray-600 flex-row content-center hover:rounded-lg tracking-wide"
                  >
                    <TableCell className="font-medium">
                      {item.character}
                    </TableCell>
                    <TableCell>{item.brailleCode}</TableCell>
                    <TableCell>{item.string}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="h-full col-span-4 overflow-y" id="braille-infobox">
            <Table className="text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400 p-8 w-[95%] h-[90%] m-auto my-4 self-center">
              <TableHeader className="divide-x-[2px] divide-black/20 text-md text-black dark:bg-gray-700 dark:text-gray-400">
                <TableRow className="px-6 py-3 font-semibold text-md text-stone-900">
                  <TableHead className="w-[100px]">Character</TableHead>
                  <TableHead>Braille</TableHead>
                  <TableHead>String</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y-[1px] divide-black/20">
                {brailleData2.map((item) => (
                  <TableRow
                    key={item.character}
                    className="border-b border-1 dark:bg-gray-800 dark:border-gray-700 my-2 hover:bg-gray-200 hover:text-[16px] hover:text-black/90 transition-all dark:hover:bg-gray-600 flex-row content-center hover:rounded-lg tracking-wide"
                  >
                    <TableCell className="font-medium">
                      {item.character}
                    </TableCell>
                    <TableCell>{item.brailleCode}</TableCell>
                    <TableCell>{item.string}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Braille;
