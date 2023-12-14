import express from "express";
import { schemes } from "../controllers/schemes";

const router = express.Router();
require('dotenv').config();


router.route("/schemes").get(schemes);


module.exports = router