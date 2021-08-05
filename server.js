//import modules required for app
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//create PORT on 3001
const PORT = process.env.PORT || 3001;

// express variable for ease of use
const app = express();

//middleware - parsing info
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware - access public folder
app.use(express.static("public"));

//Use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//listen on PORT "X"
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
