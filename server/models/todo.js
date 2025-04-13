// import mongoose from "mongoose";

// const todoSchema = new mongoose.Schema({
//     todo: {
//         type: String,
//         unique: true,
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//     }
// });

// const TodoModel = mongoose.model('todos', todoSchema);

// export default TodoModel;
// models/todo.js
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, { timestamps: true });

const TodoModel = mongoose.model('Todo', TodoSchema);
export default TodoModel;
