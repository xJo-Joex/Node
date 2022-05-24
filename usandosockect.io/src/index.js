const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const app = express();

//settings
app.set("port", 3001);

//middlewares
app.use(express.static(path.join(__dirname, "/public")));

const server = http.createServer(app);

const io = socketio(server);
require("./socket")(io);


server.listen(app.get("port"), () => console.log("Escuchando en el puerto " + app.get("port")));