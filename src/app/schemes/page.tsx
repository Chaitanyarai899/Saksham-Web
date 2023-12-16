"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

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

  
type Scheme = {
  "State/UTs Name": string;
  "Disability Type": string;
  "Scheme Name": string;
  "Disability Benefits Criteria": string;
  "Type of Benefits": string;
  Document: {
    text: string;
    link: string;
  };
};

function schemes() {
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/schemes");
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json(); // Extract JSON from the response
        setSchemes(data); // Update state with the extracted data
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
 
  return <div>{schemes.length > 0 ? (
    <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {schemes.map((schemes) => (
        <TableRow key={schemes["Scheme Name"]}>
          <TableCell className="font-medium">{schemes["State/UTs Name"]}</TableCell>
          <TableCell>{schemes["Disability Type"]}</TableCell>
          <TableCell>{schemes["Type of Benefits"]}</TableCell>
          <TableCell>{schemes["Disability Benefits Criteria"]}</TableCell>
          <Link href={schemes.Document.link}><TableCell className="text-right"> Click Here </TableCell></Link>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
  ) : (
    <div>No schemes available</div>
  )}</div>;
}

export default schemes;
