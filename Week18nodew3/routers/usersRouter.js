import { Router } from "express";
import connection from "../connection.js";
export const usersRouter = new Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await connection.select("*").from("users");
    res.json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ error: error.message });
  }
});

usersRouter.get("/:userID", async (req, res) => {
  try {
    const user = await connection
      .select("*")
      .from("users")
      .where("id", req.params.userID)
      .first();
    res.json(user);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ error: error.message });
  }
});
