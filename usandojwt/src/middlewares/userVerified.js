const verifiedToken = (req, res, next) => {
	const authorization_header = req.headers["authorization"];
	if (authorization_header !== undefined) {
    req.token=authorization_header.split(' ')[1];
    next();
	} else {
		res.send("ingrese token");
	}
	next();
};
module.exports = { verifiedToken };
