import express from "express";
import { handleCreateTodos, handleDeleteTodos } from "../controllers/user.js";

const router = express.Router();

router.route("/").post(handleCreateTodos);

router.get("/delete/:id", handleDeleteTodos);

export default router;
