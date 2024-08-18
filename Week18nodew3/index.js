import jsonServer from 'json-server' ;

import db from './db.json' with { type: "json" };
import connection from './connection.js';

const server      = jsonServer.create();
const middlewares = jsonServer.defaults();
const router      = jsonServer.router(db);
const port        = 3000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);

  (async function () {
    const output = await connection.select('*').from('Meal').limit(1);
    console.log(output);
  })()
});