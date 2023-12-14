import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
require('dotenv').config();

const router: Router = express.Router();
const route = require("./routes/routes");
app.use("/api", route);
const corsOptions = {
  origin: "*", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Server up and Kicking" });
});

app.listen(5000, () => {
  console.log("server started at port 5000");
});
