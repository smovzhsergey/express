export const authorization = (req, res, next) => {
	
	const auth = req.header('Authorization');

	if (auth === process.env.PASSWORD) {
		return next();
	}

	res.status(401).json({ message: 'Unauthorized. Please check your password!' });
};