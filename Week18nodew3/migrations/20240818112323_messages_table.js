/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  await knex.schema.createTable("messages", (table) => {
    table.increments("id").primary();
    table.string("body").notNullable();
    table.integer("authorId").notNullable();
    table.json("likes").notNullable().defaultTo([]);
    table.bigInteger("timestamp").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTable("messages");
};
