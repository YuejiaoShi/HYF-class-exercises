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

messagesRouter.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const likes = req.body.likes
      ? JSON.stringify(req.body.likes)
      : JSON.stringify([]);
    const [id] = await connection("messages")
      .insert({
        ...req.body,
        likes,
      })
      .into("messages");

    res.status(201).json([id]);
  } catch (error) {
    console.error("Error post message:", error);
    res.status(500).json({ error: error.message });
  }
});
