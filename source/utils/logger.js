import { createLogger, format, transports } from 'winston';

const logger = createLogger({
	level: 'debug',
	format: format.simple(),
	transports: [ new transports.Console({
		level:    'debug',
		colorize: true,
	})],
});

export const log = (req, res, next) => {

	if (process.env.NODE_ENV !== 'production') {
		const msg = {
			method: req.method,
			time: new Date(),
			body: req.body
		};

		logger.debug(JSON.stringify(msg, null, 2));
	}
	
	next();
};