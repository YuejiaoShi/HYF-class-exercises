import jsonServer from 'json-server' ;
import express  from 'express';

import db from './db.json' with { type: "json" };
import connection from './connection.js';
import { usersRouter } from './routers/usersRouter.js';
import { messagesRouter } from './routers/messagesRouter.js';

const server      = express();
const middlewares = jsonServer.defaults();
const router      = jsonServer.router(db);
const port        = 3000;

server.use(express.static('public'));
server.use(express.json());
server.use('/api/users',usersRouter);
server.use('/api/messages',messagesRouter);

server.use(middlewares);
server.use('/api',router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);

  (async function () {
    const output = await connection.select('*').from('users').limit(1);
    console.log(output);
  })()
});