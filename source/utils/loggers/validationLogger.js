import { createLogger, format, transports }  from 'winston';
import path from 'path';

const logger = createLogger({
	level: 'error',		
	format: format.simple(),
	transports:  [ new transports.File({
		level: 'error',
		filename: path.join('./logs', 'validation_errors.log'),
	})]
});

export const validationLogger = (error, req) => {
	if (process.env.NODE_ENV !== 'test') {
		const msg = {
			error: error.message,
			method: req.method,
			url: req.url,
			time: new Date().toISOString(),
			body: req.body
		};
		
		logger.error(JSON.stringify(msg, null, 2));
	}
};
