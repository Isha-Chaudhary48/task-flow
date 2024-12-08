import Todo from "../models/user.js";

export async function handleGetAllTodos(req, res) {
  console.log("hello from controllers");
  try {
    const todos = await Todo.find();
    res.render("index", { todos });
  } catch (err) {
    console.log("Error occurred", err);
    res.status(500).send("Internal Server Error");
  }
}

export async function handleCreateTodos(req, res) {
  const { toDo } = req.body;
  console.log(toDo);
  try {
    const result = await Todo.create({ toDo });
    await result.save();
    res.redirect("/");
    // return res.status(201).json({ msg: "sucessfully inserted", result });
  } catch (err) {
    console.log("error occured", err);
    return res.status(500).json({ msg: "server error" });
  }
}

export async function handleDeleteTodos(req, res) {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).send("todo not found");
    }
    console.log("deleted item id", todo._id);
    res.redirect("/");
  } catch (err) {
    console.log("error in deletion", err);
    return res.status(500).send("internal server error");
  }
}

// router.get("/", async (req, res) => {
//   try {
//     const todos = await Todo.find(); // Fetch todos from the database
//     res.render("index", { todos }); // Pass todos to the view
//   } catch (error) {
//     res.status(500).send("Error fetching todos");
//   }
// });

// router.get("/todos", async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.render("index", { todos }); // Pass the todos to the view
//   } catch (error) {
//     res.status(500).send("Error fetching todos");
//   }
// });

// router.post("/submit", async (req, res) => {
//   try {
//     const { toDo } = req.body;
//     console.log(toDo);
//     const userInput = new Todo({ toDo });
//     await userInput.save();
//     res.status(201).send("data saved successfully");
//   } catch (error) {
//     res.status(500).send("error saving data");
//   }
// });

// router.post("/delete", async (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// });
