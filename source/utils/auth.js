import { getPassword } from './index';

export const authorization = (req, res, next) => {
	
	const { authorization } = req.headers;
	const { email } = req.session;
	
	const password = getPassword();

	if (authorization === password && email) {
		return next();
	}

	res.status(401).json({ message: 'Unauthorized. Please check your password!' });
};