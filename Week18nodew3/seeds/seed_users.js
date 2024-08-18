import db from '../db.json' with { type: "json" };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert(db.users.map(({ id, name }) => ({ id, name })));
};
