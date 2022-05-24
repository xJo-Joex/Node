const express = require("express");
const path = require("path");
const users = require("./routes/users");
const middlewaresLogged = require("./middlewares/logged");
const { application } = require("express");
const app = express();
const ROOT = path.join(__dirname, "/public");
const conexion = require("./conection");

//settings
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
//middlewares
app.use(middlewaresLogged.isLogged);
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static(ROOT));
//routes
app.get("/", (req, res) => {
	// res.sendFile("index");
	res.render("index");
});

app.use("/users", users);

app.listen(app.get("port"), () => console.log("Escuchando en el puerto 3000"));
