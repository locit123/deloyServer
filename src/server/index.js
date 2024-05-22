const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8081;
const connectDB = require("../config/connectDB");
const bodyParser = require("body-parser");
const cors = require("cors");
const appRouter = require("../routers/index");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

appRouter(app);

connectDB();

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
