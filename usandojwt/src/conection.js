const mongoose = require("mongoose");

const conection = async () => {
	try {
		await mongoose.connect(`mongodb://localhost:27017/jwtdb`);
	} catch (error) {
		console.log("Ha ocurrido un error en conexion db");
	}
};
conection();

module.exports = conection;
