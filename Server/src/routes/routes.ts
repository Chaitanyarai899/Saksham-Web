import express from "express";
import { schemes } from "../controllers/schemes";
import { mentorpost, mentorsget } from "../controllers/mentors";

const router = express.Router();
require('dotenv').config();


router.route("/schemes").get(schemes);
router.route("/mentor").post(mentorpost);
router.route("/mentor").get(mentorsget);




module.exports = router