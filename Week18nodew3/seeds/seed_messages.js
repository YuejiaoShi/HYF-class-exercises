import db from '../db.json' with { type: "json" };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("messages").del();
  await knex("messages").insert(
    db.messages.map(({ id, authorId, body, timestamp, likes }) => ({
      id,
      authorId,
      body,
      timestamp,
      likes: JSON.stringify(likes),
    }))
  );
};
