import { createLogger, transports } from 'winston';

const logger = createLogger({
	transports: [new transports.Console()],
});

export const log = (req, res, next) => {

	if (process.env.NODE_ENV !== 'production') {
		logger.log('debug', req.method);
		logger.log('debug', new Date());
		logger.log('debug', req.body);
	}
	
	next();
};