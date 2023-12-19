"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
require('dotenv').config();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
const router = express_1.default.Router();
const route = require("./routes/routes");
app.use("/api", route);
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
mongoose_1.default
    .connect(`mongodb+srv://Ayush:${process.env.MONGO_PASS}@cluster0.fohsg.mongodb.net/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} // Casting to ConnectOptions for proper type checking
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
