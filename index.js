const express = require("express");
const { connecToDB } = require("./connection");
const urlRoute = require("./routes/url");
const cors = require("cors");
const app = express();
const PORT = 8001;

connecToDB("mongodb://localhost:27017/url-shortener").then(() => {
  console.log("Connected to DB");
});
app.use(cors());
app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
