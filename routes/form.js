var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const schema = new mongoose.Schema({}, { strict: false });

/* GET users listing. */
router.post("/", async function (req, res, next) {
  console.log(req.body);
  try {
    const tes = await mongoose.model("coba", schema).create(req.body);
    res.send(tes);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  const data = await mongoose.model("coba", schema).find({});
  res.send(data);
});

router.get("/data/:id", async (req, res) => {
  const data = await mongoose
    .model(`form-data-${req.params.id}`, schema)
    .find();

  res.send(data);
});

router.get("/:id", async (req, res) => {
  const data = await mongoose
    .model("coba", schema)
    .findOne({ _id: req.params.id });
  res.send(data);
});

router.post("/submit", async (req, res) => {
  try {
    const tes = await mongoose
      .model(`form-data-${req.body.dbId}`, schema)
      .create(req.body);
    res.send(tes);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
