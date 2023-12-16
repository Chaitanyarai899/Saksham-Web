"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
require('dotenv').config();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Add other HTTP methods if needed
    allowedHeaders: ['Content-Type', 'Authorization'], // Add allowed headers
}));
const router = express_1.default.Router();
const route = require("./routes/routes");
app.use("/api", route);
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    app.get('/', (req, res) => {
        res.send({ message: 'Server up and Kicking' });
    });
});
app.listen(5000, () => {
    console.log("server started at port 5000");
});
