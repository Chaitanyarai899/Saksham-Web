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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mentorsget = exports.mentorpost = void 0;
require("dotenv").config();
const db_1 = require("../db"); // Importing the models
const mentorpost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("triggered");
    const mentoremail = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const expertise = req.body.expertise;
    try {
        const foundAccount = yield db_1.MentorModel.find({ email: mentoremail });
        console.log(foundAccount);
        if (foundAccount.length == 0) { // Check if no matching account found
            const user = new db_1.MentorModel({
                name: name,
                phone: phone,
                email: mentoremail,
                expertise: expertise,
            });
            yield user.save(); // Use await to properly handle promises
            console.log("saved successfully");
        }
        else {
            console.log("user exists");
        }
        res.status(200).send("Operation completed");
    }
    catch (error) {
        console.log("Error posting data:", error);
        res.status(500).send("Error fetching data");
    }
});
exports.mentorpost = mentorpost;
const mentorsget = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("triggered");
    try {
        const foundAccount = yield db_1.MentorModel.find({});
        console.log(foundAccount);
        if (foundAccount.length == 0) {
            res.send({ message: "no mentor exist" });
        }
        res.send(foundAccount);
    }
    catch (error) {
        console.log("Error posting data:", error);
        res.status(500).send("Error fetching data");
    }
});
exports.mentorsget = mentorsget;
