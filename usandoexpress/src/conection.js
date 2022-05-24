// const mysql = require("mysql");
// const { mysql_db } = require("./config");
/* 
const conexion = mysql.createConnection(mysql_db);

conexion.connect((err, conn) => {
	if (err) {
		return console.log("Ha ocurrido un error en la conexion db");
	} else {
		console.log("Se ha conectado a la base de datos");
		return conn;
	}
}); */

const mongoose = require("mongoose");
const { mongo_db } = require("./config");

const conexion = mongoose
	.connect(`mongodb://${mongo_db.host}:${mongo_db.port}/${mongo_db.database}`)
	.then((db) => {
		console.log("Conexion exitosa");
	})
	.catch((err) => console.log("Ha ocurrido un error" + err));

module.exports = conexion;
