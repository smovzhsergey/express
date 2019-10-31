// Core
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';

//Routers
import * as routers from './routers';

//Utils
import { getPassword, log, notFoundLogger, writeErrorLogger, validationLogger, NotFoundError } from './utils';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));

app.use(log);

const password = getPassword();
const sessionOptions = {
	key: 'user',
	secret: password,
	resave: false,
	rolling: true,
	saveUninitialized: false,
	cookie: {
		httpOnly: true,
		maxAge:   15 * 60 * 1000,
	},
};

app.use(session(sessionOptions));

app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);
app.use('/api/auth', routers.auth);

app.use((req, res, next) => {
	next(new NotFoundError(`Method: ${req.method}, Endpoint: ${req.url} not found`));
});

app.use((error, req, res, next) => {
	switch (error.name) {
		case 'NotFoundError':
			notFoundLogger(req);
			break;

		case 'ValidationError':
			validationLogger(error, req);
			break;

		default:
			writeErrorLogger(error);
	}

	res.status(error.statusCode || 500).json({ message: error.message });
});

export { app };
