import mongoose from 'mongoose';

// User Information schema
const mentorSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  expertise: String // Fixed typo here, 'expetise' to 'expertise'
});

const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  expertise: String // Fixed typo here, 'expetise' to 'expertise'
});

const MentorModel = mongoose.model("mentorCollection", mentorSchema);
const UserModel = mongoose.model("userCollection", userSchema);

export { MentorModel, UserModel };