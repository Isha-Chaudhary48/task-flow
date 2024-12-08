import express from "express";
import { handleGetAllTodos } from "../controllers/user.js";

const router = express.Router();

router.route("/").get(handleGetAllTodos);

export default router;
