const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://csh928:abcd1234@boilerplate.qlid4.mongodb.net/boilerplate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//mongodb+srv://csh928:<password>@boilerplate.qlid4.mongodb.net/boilerplate?retryWrites=true&w=majority

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Exaple app listening on port ${port}`));
