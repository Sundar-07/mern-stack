const { Todo } = require("../models/todo");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, author, date, uid, isComplete } = req.body;

  let todo = new Todo({
    name,
    author,
    date,
    uid,
    isComplete,
  });

  try {
    todo = await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});
