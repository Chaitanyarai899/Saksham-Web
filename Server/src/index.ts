import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from 'mongoose';

const app = express();
app.use(express.json());
require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const router: Router = express.Router();
const route = require("./routes/routes");
app.use("/api", route);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://Ayush:${process.env.MONGO_PASS}@cluster0.fohsg.mongodb.net/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions // Casting to ConnectOptions for proper type checking
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  app.get('/', (req, res) => {

    res.send({ message: 'Server up and Kicking' });
  });
  
});

app.listen(5000, () => {
  console.log("server started at port 5000");
});
