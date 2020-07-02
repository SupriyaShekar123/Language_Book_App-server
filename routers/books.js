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

module.exports = router;
