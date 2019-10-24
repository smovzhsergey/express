// Core
import express from 'express';
import bodyParser from 'body-parser';

//Routers
import * as routers from './routers';

//Utils
import { log, notFoundLogger, writeErrorLogger, validationLogger, NotFoundError } from './utils';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));

app.use(log);

app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);
app.use('/login', routers.login);
app.use('/logout', routers.logout);

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
	// if (error.name === 'NotFoundError') {
	// 	notFoundLogger(req);
	// } else if (error.name === 'ValidationError') {
	// 	validationLogger(error, req);
	// } else {

	// 	writeErrorLogger(error);
	// }

	res.status(error.statusCode || 500).json({ message: error.message });
});

export { app };
