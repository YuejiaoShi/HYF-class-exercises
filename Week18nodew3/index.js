import jsonServer from 'json-server' ;
import express  from 'express';

import db from './db.json' with { type: "json" };
import connection from './connection.js';
import { userRouter } from './routers/usersRouter.js';

const server      = express();
const middlewares = jsonServer.defaults();
const router      = jsonServer.router(db);
const port        = 3000;

server.use('/api/users',userRouter);

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);

  (async function () {
    const output = await connection.select('*').from('users').limit(1);
    console.log(output);
  })()
});