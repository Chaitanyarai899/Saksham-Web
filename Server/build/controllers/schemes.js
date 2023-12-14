"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemes = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
require('dotenv').config();
const url = process.env.SCHEMES_URL || " ";
const schemes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(url);
    try {
        const response = yield axios_1.default.get(url);
        const html = response.data;
        const $ = cheerio_1.default.load(html);
        const tableData = [];
        // Select the table by its ID or any other appropriate selector
        const table = $("#medicalCamp");
        if (table) {
            const rows = table.find("tr");
            rows.each((index, row) => {
                const rowData = {};
                const cells = $(row).find("td");
                cells.each((index, cell) => {
                    var _a;
                    const cellText = $(cell).text().trim();
                    const link = $(cell).find("a").attr("href"); // Extract link from anchor tag
                    if (index === 5) {
                        const documentLink = link ? `https://www.swavlambancard.gov.in${link}` : "";
                        const documentText = ((_a = $(cell).find("a").html()) === null || _a === void 0 ? void 0 : _a.trim()) || ""; // Extract HTML content
                        rowData["Document"] = {
                            text: documentText,
                            link: documentLink,
                        };
                    }
                    else {
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
        }
        else {
            console.log("Table not found.");
            res.status(404).send("Table not found");
        }
    }
    catch (error) {
        console.log("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});
exports.schemes = schemes;
