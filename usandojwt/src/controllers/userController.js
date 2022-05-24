const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAdmin = (req, res) => {
	jwt.verify(req.token, "secrect", (err, dataUser) => {
		if (err) {
			res.send("Ha ocurrido un error");
		} else {
			res.json({ message: "Puede ingresar a la URL", userData: dataUser });
		}
	});
};
const login = (req, res) => {
	User.findOne({ email: req.body.email }, (err, result) => {
		if (err) {
			res.send("ha ocurrido un error" + err.stack);
		} else {
			if (result) {
				if (bcrypt.compareSync(req.body.password, result.password)) {
					jwt.sign({ user: result }, "secrect", (err, token) => {
						res.send({ token: token });
					});
					// res.send("Bienvenido" + result);
				} else {
					res.send("Datos erroneos");
				}
			} else {
				res.send("Usuario no existe");
			}
		}
	});
};
const register = (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10),
	});
	user.save((err, result) => {
		if (err) {
			res.send("Ha ocurrido un error" + err.stack);
		} else {
			res.send("Usuario creado correctamente" + result);
		}
	});
};

module.exports = {
	getAdmin,
	login,
	register,
};
