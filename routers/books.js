const express = require("express");

const Books = require("../models/").books;
const { Router } = express;
const router = new Router();

router.get("/books/:id", async function getUserBooks(req, res, next) {
  console.log("VALUE OF ID", req.params.id);
  const Id = req.params.id;
  try {
    const getData = await Books.findByPk(Id);

    res.json(getData);
  } catch (e) {
    //next(e);
    console.log("error", e.message);
  }
});

router.post("/books", async (req, res) => {
  // console.log("reqeust body", req.body);
  try {
    const {
      name,
      author,
      description,
      category,
      language,
      imageUrl,
      userId,
    } = req.body;
    console.log("request testing values :", req.body);
    if (
      !name ||
      !author ||
      !description ||
      !category ||
      !language ||
      !imageUrl ||
      !userId
    ) {
      res.status(400).send("missing parameters");
    } else {
      // const hashedPassword = bcrypt.hashSync(password, 10);
      const event = await Books.create({
        name,
        author,
        description,
        category,
        language,
        imageUrl,
        userId,
      });
      res.json(event);
    }
  } catch (e) {
    console.log(e.message);
    // next(e);
  }
});

module.exports = router;
