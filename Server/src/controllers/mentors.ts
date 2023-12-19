import { Request, Response } from "express";
import axios from "axios";
require("dotenv").config();
import { MentorModel, UserModel } from "../db"; // Importing the models


export const mentorpost = async (req: Request, res: Response) => {
    console.log("triggered");
  
    const mentoremail = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const expertise = req.body.expertise;
  
    try {
      const foundAccount = await MentorModel.find({ email: mentoremail });
      console.log(foundAccount)
  
      if (foundAccount.length == 0) { // Check if no matching account found
        const user = new MentorModel({
          name: name,
          phone: phone,
          email: mentoremail,
          expertise: expertise,
        });
  
        await user.save(); // Use await to properly handle promises
  
        console.log("saved successfully");
      } else {
        console.log("user exists");
      }
  
      res.status(200).send("Operation completed");
    } catch (error) {
      console.log("Error posting data:", error);
      res.status(500).send("Error fetching data");
    }
  };
  

  export const mentorsget = async (req: Request, res: Response) => {
    console.log("triggered");
    try {
      const foundAccount = await MentorModel.find({});
      console.log(foundAccount)
      if(foundAccount.length == 0){
        res.send({message : "no mentor exist"})
      }
      res.send(foundAccount)
      
    } catch (error) {
      console.log("Error posting data:", error);
      res.status(500).send("Error fetching data");
    }
  };
  
