export const postLogin = (req, res) => {
	try {
		const { authorization } = req.headers;
		const { email } = req.body;

		req.session.email = email;

		if (authorization) {
			res.status(204).end();
		} else {
			res.status(401).json({ message: 'Credentials are not valid' });
		}
		
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const postLogout = (req, res) => {
	try {
			res.status(204).end();
	} catch (error) {
			res.status(400).json({ message: error.message });
	}
};