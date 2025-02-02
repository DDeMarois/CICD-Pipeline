import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import { readFileSync } from "fs";

const pythonQuestions = JSON.parse(
  readFileSync(new URL("./pythonQuestions.json", import.meta.url), "utf8")
);

db.once("open", async () => {
  await cleanDB("Question", "questions");
  await Question.insertMany(pythonQuestions);

  console.log("Questions seeded!");
  process.exit(0);
});
