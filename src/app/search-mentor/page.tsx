"use client"
import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { useState, ChangeEvent, useEffect } from 'react';
import brailleData from "@/app/braille/orbitwriter/braille.json"
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

const Page = () => {
    const [inputValue, setInputValue] = useState<string>("");
    //  const [schemes, setSchemes] = useState<Scheme[]>([]);
  
 
    
    interface BrailleItem {
        character: string;
        brailleCode: string;
        string: string;
    }
  
    const [tableData, setTableData] = useState<BrailleItem[]>([]);
    useEffect(() => {
        setTableData(brailleData);
    }, []);
    
    // useEffect(() => {
    //     // Fetch data when the component mounts
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/api/mentor');
    //             setTableData(response.data); // Assuming response.data is an array of BrailleItem
    //             setFilteredTableData(response.data); // Initialize filtered data with fetched data
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData(); // Call the fetch function
    // }, []);

    const [filteredTableData, setFilteredTableData] = useState<BrailleItem[]>([]);

    useEffect(() => {
        setFilteredTableData(tableData);
    }, [tableData]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        const filteredData = tableData.filter((item) =>
            item.character.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredTableData(filteredData);
    };
    
    return (
        <MaxWidthWrapper>
            {/* Main Container */}
            <div className='mt-12'>
                {/* Search Box */}
                <div id='search-box'>
                    <input
                        id="brailleInput"
                        type="text"
                        onChange={handleInputChange}
                        value={inputValue}
                        placeholder="Find A Mentor &#xf002"
                        className="w-full mt-3 p-4 fa rounded-md border-4 border-black/20"
                    />
                </div>
                {/* Table */}
                <div className='' id='table-holder'>
                    <Table className="text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400 p-8 w-[95%] h-[90%] m-auto my-4 self-center">
                        <TableHeader className="divide-x-[2px] divide-black/20 text-md text-black dark:bg-gray-700 dark:text-gray-400">
                            <TableRow className="px-6 py-3 font-semibold text-md text-stone-900">
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Expetise</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y-[1px] divide-black/20">
                            {filteredTableData.map((item) => (
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
        </MaxWidthWrapper>
    );
};

export default Page;