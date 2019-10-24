import { createLogger, format, transports }  from 'winston';
import path from 'path';

const logger = createLogger({
	level: 'error',		
	format: format.simple(),
	transports:  [ new transports.File({
		level: 'error',
		filename: path.join('./logs', 'not_found_errors.log'),
	})]
});

export const notFoundLogger = (req) => {
	if (process.env.NODE_ENV !== 'test') {
		logger.error(`${new Date().toISOString()} ${req.method}: ${req.url}`);
	}
};
