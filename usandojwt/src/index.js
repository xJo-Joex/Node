const express = require("express");
const user = require("./routes/userRoutes");
const app = express();
require("./conection");

//settings
app.set("port", 3000);

//midlewares
app.use(express.urlencoded({ extended: false }));

//routes
app.use(user);

app.listen(app.get("port"), () => {
	console.log("Eschando en el puerto 3000");
});
