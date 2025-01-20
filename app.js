const express = require("express");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());

//modules
const test = require("./src/test");

app.use("/api/v1", test);

app.listen(PORT, () => {
  console.log(`app are  listening on ${PORT} `);
});
