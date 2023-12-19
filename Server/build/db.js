"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.MentorModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// User Information schema
const mentorSchema = new mongoose_1.default.Schema({
    name: String,
    phone: Number,
    email: String,
    expertise: String // Fixed typo here, 'expetise' to 'expertise'
});
const userSchema = new mongoose_1.default.Schema({
    name: String,
    phone: Number,
    email: String,
    expertise: String // Fixed typo here, 'expetise' to 'expertise'
});
const MentorModel = mongoose_1.default.model("mentorCollection", mentorSchema);
exports.MentorModel = MentorModel;
const UserModel = mongoose_1.default.model("userCollection", userSchema);
exports.UserModel = UserModel;
