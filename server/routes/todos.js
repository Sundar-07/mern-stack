const { Todo } = require("../models/todo");
const express = require("express");
const auth = require('../middleware/auth');

const router = express.Router();
//get data
router.get("/",auth, async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.send(todos);
    console.log(req.user)
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});
//post data
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
    res.status(500).send(error.message);
    console.log(error.message);
  }
});
//update data

router.put("/:id", async (req, res) => {
 //---check first by id----    
 try {
const todo = await Todo.findById(req.params.id);

if(!todo) return res.status(404).send("Todo is not found..")

//same as post http
  const { name, author, date, uid, isComplete } = req.body;

  
    let updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id, 
        {
      name,
      author,
      date,
      uid,
      isComplete,
    },{new:true});
    res.send(updatedTodo)
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

//patch data

router.patch("/:id", async (req, res) => {
    //---check first by id----    
    try {
   const todo = await Todo.findById(req.params.id);
   
   if(!todo) return res.status(404).send("Todo is not found..")
   
   
     //const { name, author, date, uid, isComplete } = req.body;
   
     
       let updatedTodo = await Todo.findByIdAndUpdate(
           req.params.id, 
           {

         isComplete: !todo.isComplete,
       },{new:true});
       res.send(updatedTodo)
     } catch (error) {
       res.status(500).send(error.message);
       console.log(error.message);
     }
   });

//delete data by id in params

router.delete("/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.send(deletedTodo);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router;
