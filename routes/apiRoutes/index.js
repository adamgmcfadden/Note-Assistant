const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { notStrictEqual } = require("assert");

//store uuidv4() as variable for ease of use
const uniqueID = uuidv4();

//read db.json file and return all saved notes as JSON
router.get("/notes", (req, res) => {
  //create results variable to store db.json content
  const results = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  //show results from response
  res.json(results);
});

//post new note to req.body and add to db.json file. Needs unique ID for each
route.post("/notes", (req, res) => {
  //store req.body as variable
  const noteEntry = req.body;
  //create variable from db.json results
  const results = JSON.parse(fs.readFileSync("./db/db.json"));
  //need unique id - found NPM UUID package for this application
  noteEntry.id = uniqueID;
  //push req.body to results variable
  results.push(noteEntry);
  //write post to db.json file
  fs.
});

module.exports = router;
