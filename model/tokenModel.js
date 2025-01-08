import { Schema } from "mongoose";
import mongoose from "mongoose";

const tokenSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  studentId: {
    type: Number,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  acYear: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  type:{
    type: String,
    required: true,
  },
  relationship:{
    type: String,
    required: true,
  },
  question1: {
    type: String,
  },
  question2: {
    type: String,
  },
  question3: {
    type: String,
  },
  question4: {
    type: String,
  },
  question5: {
    type: String,
  },
  question6: {
    type: String,
  },

  question7: {
    type: String,
  },
  question8: {
    type: String,
  },
  question9: {
    type: String,
  },
  question10: {
    type: String,
  },
  question11: {
    type: String,
  },
  question12: {
    type: String,
  },
});

const Token = mongoose.model("Token", tokenSchema);
export default Token;
