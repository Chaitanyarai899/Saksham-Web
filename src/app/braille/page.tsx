"use client"
import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import brailleData from './braille.json';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

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
    S: 'A',
    SD: 'B',
    SK: 'C',
    SJK: 'D',
    SJD: 'F',
    SJKK: 'G',
    SKJ: 'H',
    DJ: 'I',
    DFK: 'J',
    SDJ: 'L',
    SDF: 'M',
    SDFK: 'N',
    SDK: 'O',
    SDFJ: 'P',
    SDFKJ: 'Q',
    DF: 'S',
    DFDK: 'T',
    SL: 'U',
    SDFL: 'V',
    SDJKL: 'W',
    SDFKL: 'X',
    SDFKK: 'Y',
    SDKK: 'Z',
  };
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

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
    <div className='flex flex-col items-center justify-center border-4 border-rose-600 m-4 overflow-y rounded-lg bg-white/70'>
      <div className='grid grid-cols-6'>
        <div className='h-full col-span-3 overflow-y' id='braille-infobox'>
          <Table className="text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400 p-8 w-[95%] h-[90%] m-auto my-4 self-center">
            <TableCaption className="font-[#DE9495] text-left">Braille Script Data</TableCaption>
              <TableHeader className="divide-x-[2px] divide-black/20 text-md text-black dark:bg-gray-700 dark:text-gray-400">
                <TableRow className="px-6 py-3 font-semibold text-md text-stone-900">
                  <TableHead className="w-[100px]">Character</TableHead>
                  <TableHead>Braille</TableHead>
                  <TableHead>String</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y-[1px] divide-black/20">
                {tableData.map((item) => (
                  <TableRow key={item.character} className="border-b border-1 dark:bg-gray-800 dark:border-gray-700 my-2 hover:bg-gray-200 hover:text-[16px] hover:text-black/90 transition-all dark:hover:bg-gray-600 flex-row content-center hover:rounded-lg tracking-wide">
                    <TableCell className="font-medium">{item.character}</TableCell>
                    <TableCell>{item.brailleCode}</TableCell>
                    <TableCell>{item.string}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
        </Table>
        </div>
        <div className='h-full grid place-content-start m-4' id='input-box'>
          <label htmlFor='brailleInput' className='p-2 font-semibold tracking-wide'>
            Enter Braille Key :
          </label>
          <input
            id='brailleInput'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='w-fit rounded-md border-4 border-black/20 mb-2 h-[20px]'
          />
          {outputValue && (
            <p className='font-bold text-xl text-stone-900/80 tracking-wider'>
              Continuous Word : {outputValue}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Braille;
