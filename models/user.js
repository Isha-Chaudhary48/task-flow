import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
});

// todo model
const Todo = new mongoose.model("todo", TodoSchema);
export default Todo;
