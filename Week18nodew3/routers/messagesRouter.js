import { Router } from "express";
import connection from "../connection.js";
export const messagesRouter = new Router();

messagesRouter.get("/", async (req, res) => {
  try {
    const messages = await connection.select("*").from("messages");
    res.json(messages);
  } catch (error) {
    console.error("Error fetching all messages:", error);
    res.status(500).json({ error: error.message });
  }
});

messagesRouter.get("/:messageID", async (req, res) => {
  try {
    const message = await connection
      .select("*")
      .from("messages")
      .where("id", req.params.messageID)
      .first();
    res.json(message);
  } catch (error) {
    console.error("Error fetching message:", error);
    res.status(500).json({ error: error.message });
  }
});
