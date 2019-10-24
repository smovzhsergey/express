import { getPassword } from './index';

export const authorization = (req, res, next) => {
	
	const { authorization } = req.headers;
	const password = getPassword();

	if (authorization === password) {
		return next();
	}

	res.status(401).json({ message: 'Unauthorized. Please check your password!' });
};