//import required modules (router - express.Router, uuid to generate unique id, fs package to read and write sync)
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

//store uuidv4() as variable for ease of use
const uniqueID = uuidv4();

//read db.json file and return all saved notes as JSON
router.get("/notes", (req, res) => {
  //create results variable to store db.json content
  const results = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));
  //show results from response
  res.json(results);
});

//post new note to req.body and add to db.json file. Needs unique ID for each
router.post("/notes", (req, res) => {
  //store req.body as variable
  const noteEntry = req.body;
  //create variable from db.json results
  const results = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));
  //need unique id - found NPM UUID package for this application
  noteEntry.id = uniqueID;
  //push req.body to results variable
  results.push(noteEntry);
  //write post (results) to db.json file
  fs.writeFileSync("./data/db.json", JSON.stringify(results));
  //return results
  return res.json(results);
});

//delete route to remove notes with given ID number
router.delete("/notes/:id", (req, res) => {
  //store req.params.id as noteDelete
  const noteDelete = req.params.id;
  //save db.json as array
  const noteArray = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));
  //create new array but exclude noteDelete
  const newArray = noteArray.filter((note) => note.id !== noteDelete);
  //rewrite json file db.json file with newArray to exclude deleted note
  fs.writeFileSync("/data/db.json", JSON.stringify(newArray));
  //return data without noteDelete
  return res.json(newArray);
});

//export router to be used in other file
module.exports = router;
