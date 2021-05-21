// Connection URL
const url = "mongodb://localhost:27017/";

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://baim:FAAQCFN9pV1Bv2Sh@cluster0.yogxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("DB Connected");
});
