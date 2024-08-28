const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const mainRouter = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
dbConnect();

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
