import { Request, Response } from "express";
import cheerio from "cheerio";
import axios from "axios";
require('dotenv').config();

const url: string = process.env.SCHEMES_URL || " "; 
export const schemes = async (req: Request, res: Response) => {
    console.log (url);
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const tableData: any[] = [];

    // Select the table by its ID or any other appropriate selector
    const table = $("#medicalCamp");

    if (table) {
      const rows = table.find("tr");

      rows.each((index, row) => {
        const rowData: any = {};
        const cells = $(row).find("td");

        cells.each((index, cell) => {
          const cellText = $(cell).text().trim();
          const link = $(cell).find("a").attr("href"); // Extract link from anchor tag

          if (index === 5) {
            const documentLink = link ? `https://www.swavlambancard.gov.in${link}` : "";
            const documentText = $(cell).find("a").html()?.trim() || ""; // Extract HTML content
            rowData["Document"] = {
              text: documentText,
              link: documentLink,
            };
          } else {
            switch (index) {
              case 0:
                rowData["State/UTs Name"] = cellText;
                break;
              case 1:
                rowData["Disability Type"] = cellText;
                break;
              case 2:
                rowData["Scheme Name"] = cellText;
                break;
              case 3:
                rowData["Disability Benefits Criteria"] = cellText;
                break;
              case 4:
                rowData["Type of Benefits"] = cellText;
                break;
              default:
                break;
            }
          }
        });

        // Push rowData object to tableData array
        if (Object.keys(rowData).length !== 0) {
          tableData.push(rowData);
        }
      });

      // Convert tableData to JSON string
      const jsonData = JSON.stringify(tableData, null, 2);
      console.log(jsonData);
      res.status(200).json(tableData); // Sending tableData as JSON response
    } else {
      console.log("Table not found.");
      res.status(404).send("Table not found");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
};
