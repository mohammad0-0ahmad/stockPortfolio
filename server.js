const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload")

const PORT = process.env.PORT || 3030;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload())

require("./server/router")(app);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});