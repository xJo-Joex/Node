const path = require("path");
const ROOT = path.join(__dirname, "../public");
const User = require("../models/userModel");

let users = [
	{ id: 1, name: "Joe", edad: 25 },
	{ id: 2, name: "Patricio", edad: 26 },
];
const getAllUsers = (req, res) => {
	// res.sendFile("users.html", { root: ROOT });

	User.find({}, (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			// console.log(result);
			res.render("users", { users: result });
		}
	});
};

const getCreateUser = (req, res) => {
	// res.sendFile("create-users.html", { root: ROOT });
	res.render("create-users");
};

const getUpdateUser = (req, res) => {

	User.find({_id:req.params.id}, (err, result) => {
		if (err) {
			console.log("Ha ocurrido un error al actualizar");
		} else {
			console.log(result);
			res.render("update-users", { users: result });
		}
	});
	// res.sendFile("update-users.html", { root: ROOT });
};

const getDeleleUser = (req, res) => {
	User.find({_id:req.params.id}, (err, result) => {
		if (err) {
			console.log("Ha ocurrido un error al eliminar");
		} else {
			// console.log(result);
			res.render("delete-users", { users: result });
		}
	});

	// res.sendFile("delete-users.html", { root: ROOT });
	// res.render("delete-users");
};
const createUser = (req, res) => {
	// res.sendFile("create-users.html", { root: ROOT });
	const newObject = req.body;
	const user = new User({
		name: newObject.name,
		age: newObject.age,
	});

	user.save((err, result) => {
		if (err) {
			console.log("have new error to insert new user");
		} else {
			res.redirect("/users/all");
		}
	});
};

const updateUser = (req, res) => {
	const updateData = req.body;
	User.updateOne({_id:req.params.id}, updateData, (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			res.redirect("/users/all");
		}
	});
	// res.sendFile("update-users.html", { root: ROOT });
	// res.render("users", { users: users });
};

const deleleUser = (req, res) => {
	// res.sendFile("delete-users.html", { root: ROOT });

	User.deleteOne({_id:req.params.id}, (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			res.redirect("/users/all");
		}
	});
	/* 
	console.log(req.params.id);
	users = users.filter((user, index) => user.id != req.params.id);
	res.render("users", { users: users }); */
};

module.exports = {
	getAllUsers,
	getCreateUser,
	getDeleleUser,
	getUpdateUser,
	createUser,
	updateUser,
	deleleUser,
};
/* const getAllUsers = (req, res) => {
	// res.sendFile("users.html", { root: ROOT });
	const sql = "Select * from tbl_users";
	conexion.query(sql, (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			// console.log(result);
			res.render("users", { users: result });
		}
	});
};

const getCreateUser = (req, res) => {
	// res.sendFile("create-users.html", { root: ROOT });
	res.render("create-users");
};

const getUpdateUser = (req, res) => {
	const sql = `select * from tbl_users where id=${req.params.id}`;
	conexion.query(sql, (err, result) => {
		if (err) {
			console.log("Ha ocurrido un error al actualizar");
		} else {
			console.log(result);
			res.render("update-users", { users: result });
		}
	});
	// res.sendFile("update-users.html", { root: ROOT });
};

const getDeleleUser = (req, res) => {
	const sql = `select * from tbl_users where id=${req.params.id}`;
	conexion.query(sql, (err, result) => {
		if (err) {
			console.log("Ha ocurrido un error al eliminar");
		} else {
			// console.log(result);
			res.render("delete-users", {users:result});
		}
	});

	// res.sendFile("delete-users.html", { root: ROOT });
	// res.render("delete-users");
};
const createUser = (req, res) => {
	// res.sendFile("create-users.html", { root: ROOT });
	const newObject = req.body;
	const sql = "Insert into tbl_users set ?";
	conexion.query(sql, newObject, (err, result) => {
		if (err) {
			console.log("have new error to insert new user");
		} else {
			res.redirect("/users/all");
		}
	});
};

const updateUser = (req, res) => {
	const updateData = req.body;
	const sql = `update tbl_users set ? where id=${req.params.id}`;
	conexion.query(sql, updateData, (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			res.redirect("/users/all");
		}
	});
	// res.sendFile("update-users.html", { root: ROOT });
	// res.render("users", { users: users });
};

const deleleUser = (req, res) => {
	// res.sendFile("delete-users.html", { root: ROOT });

	const sql = `delete from tbl_users where id=${req.params.id}`;
	conexion.query(sql, (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			res.redirect("/users/all");
		}
	});
	
	// console.log(req.params.id);
	// users = users.filter((user, index) => user.id != req.params.id);
	// res.render("users", { users: users });
}; 

module.exports = {
	getAllUsers,
	getCreateUser,
	getDeleleUser,
	getUpdateUser,
	createUser,
	updateUser,
	deleleUser,
};

*/
