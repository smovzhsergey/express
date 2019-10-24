import { createLogger, transports, format } from 'winston';
import path from 'path';

const logger = createLogger({
	level: 'error',
	format: format.simple(),
	transports: [ new transports.File({
		level: 'error' ,
		filename: path.join('./logs', 'errors.log')
	})],

});

export const writeErrorLogger = (error) => {
	if (process.env.NODE_ENV !== 'test') {
		logger.error(`${new Date().toISOString()} ${error.name}: ${error.message}`);
	}
};