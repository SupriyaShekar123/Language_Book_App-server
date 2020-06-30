const express = require("express");
const User = require("../models/").user;
const Books = require("../models/").books;
const { Router } = express;
const router = new Router();

router.get("/user/:id", async function getUserBooks(req, res, next) {
  console.log("VALUE OF ID", req.params.id);
  const Id = req.params.id;
  try {
    const getData = await User.findByPk(Id, {
      include: [Books],
      order: [[Books, "createdAt", "DESC"]],
    });

    res.json(getData);
  } catch (e) {
    //next(e);
    console.log("error", e.message);
  }
});

module.exports = router;
