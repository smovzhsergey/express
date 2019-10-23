// Core
import express from 'express';
import bodyParser from 'body-parser';

//Routers
import * as routers from './routers';

//Utils
import { log } from './utils';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));
app.use(log);

app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);
app.use('/login', routers.login);
app.use('/logout', routers.logout);

export { app };
