import knex from "knex";
import configs from './knexfile.js';

const environment = process.env.environment ?? 'development;'

const config = (() => {
  switch (environment) {
    case 'development':
    default:
      return configs.development;
  }
})();

const connection = knex(config);

export default connection;