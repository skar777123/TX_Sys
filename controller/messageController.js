import Male from "../model/tokenModel.js";
import Female from "../model/FtokenModel.js";
import { gen } from "n-digit-token";

export const createToken = async (req, res) => {
  let main;
  const {
    name,
    gender,
    college,
    studentId,
    phone,
    email,
    acYear,
    branch,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
  } = req.body;
  try {
    const token = gen(6);
    if (gender == "male") {
      main = await Male.create({
        name,
        gender,
        college,
        studentId,
        phone,
        email,
        acYear,
        branch,
        token,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
      });
    } else if (gender == "female") {
      main = await Female.create({
        name,
        gender,
        college,
        studentId,
        phone,
        email,
        acYear,
        branch,
        token,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
      });
    }
    if (main) {
      res.status(201).json({ token, main });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
