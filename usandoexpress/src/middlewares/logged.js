const isLogged = (req, res, next) => {
	let logged = true;
	if (logged) {
		console.log("El usuario esta logueado");
		next();
	} else {
		res.send("User can`t access to routes,need logged");
	}
};

exports.isLogged
= isLogged;
