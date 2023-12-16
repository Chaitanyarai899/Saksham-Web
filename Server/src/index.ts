import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
require('dotenv').config();
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST'], // Add other HTTP methods if needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Add allowed headers
}));
const router: Router = express.Router();
const route = require("./routes/routes");
app.use("/api", route);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  app.get('/', (req, res) => {

    res.send({ message: 'Server up and Kicking' });
  });
  
});

app.listen(5000, () => {
  console.log("server started at port 5000");
});
