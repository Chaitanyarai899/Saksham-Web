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
 
  return <>
  <div className="flex flex-col mx-auto justify-center">
    <div className="font-semibold text-2xl m-2 mt-5 mx-auto">{localStorage.getItem('lang') === "english" ? "Empowering Disability: Government Initiatives" : " दिव्यांगता को सशक्त करना: सरकारी पहल"} </div>
    <div className="font-medium text-lg mx-11 my-2"> {localStorage.getItem('lang') === "english" ? "Explore a spectrum of government initiatives designed to empower and support individuals with disabilities. From education and employment opportunities to healthcare and accessibility enhancements, these schemes aim to foster inclusivity and improve the quality of life for people with diverse abilities. Discover a range of programs tailored to address specific needs, ensuring equal access, rights, and opportunities for every member of our community. Stay informed about the latest advancements in disability support and join us in promoting a more inclusive and accessible society for all" : "व्यक्तियों को सशक्त और समर्थन प्रदान करने और सक्षमताओं के साथ व्यक्तियों का समर्थन करने के लिए निर्मित सरकारी पहलों की विविधता का अन्वेषण करें। शिक्षा से लेकर रोजगार के अवसरों तक, स्वास्थ्य सेवाओं से लेकर पहुंचता और सुधारों तक, ये योजनाएँ समावेशीता को प्रोत्साहित करने और विभिन्न क्षमताओं वाले लोगों के जीवन की गुणवत्ता में सुधार करने का उद्देश्य रखती हैं। विशेष जरूरतों को पूरा करने के लिए तैयार की गई कई कार्यक्रमों का पता लगाएं, जो प्रत्येक समुदाय के हर सदस्य के लिए समान पहुंच, अधिकार और अवसर सुनिश्चित करने के लिए तैयार किए गए हैं। नवीनतम विकासों के बारे में जानकारी रखें और हमारे साथ एक समावेशी और पहुंचने वाली समाज को बढ़ावा देने में शामिल हों।"}</div>

  </div>
  <div className="relative shadow-md sm:rounded-lg border-4 grid place-content-center border-rose-600 rounded-lg overflow-x-hidden m-6">{schemes.length > 0 ? (
    <Table className="text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400 p-8 w-[95%] h-[90%] m-auto my-4 self-center">
    <TableCaption className="font-[#DE9495]">A list of all the schemes.</TableCaption>
    <TableHeader className="divide-x-[2px] divide-black/20 text-md text-black dark:bg-gray-700 dark:text-gray-400">
      <TableRow className="px-6 py-3 font-semibold text-md text-stone-900">
        <TableHead className="w-[100px]">State / UTs Name	</TableHead>
        <TableHead>Disability Type</TableHead>
        <TableHead>Scheme Name</TableHead>
        <TableHead >Type of Benefits</TableHead>
        <TableHead >	Disability Benefits Criteria </TableHead>
        <TableHead className="text-right">Document</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="divide-y-[1px] divide-black/20">
      {schemes.map((schemes) => (
        <TableRow key={schemes["Scheme Name"]} className="border-b border-1 dark:bg-gray-800 dark:border-gray-700 my-2 hover:bg-gray-200 hover:text-[16px] hover:text-black/90 transition-all dark:hover:bg-gray-600 flex-row content-center hover:rounded-lg tracking-wide">
          <TableCell className="font-medium">{schemes["State/UTs Name"]}</TableCell>
          <TableCell>{schemes["Disability Type"]}</TableCell>
          <TableCell>{schemes["Scheme Name"]}</TableCell>

          <TableCell>{schemes["Type of Benefits"]}</TableCell>
          <TableCell>{schemes["Disability Benefits Criteria"]}</TableCell>
          <Link className="" href={schemes.Document.link}><TableCell className="text-md hover:text-lg transition-all text-rose-600 "> View </TableCell></Link>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Schemes by the Government</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
  ) : (
    <div>No schemes available</div>
  )}</div> </>;
}

export default schemes;
