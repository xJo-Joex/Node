module.exports = (io) => {
	const allmessages = [];
	io.on("connection", (socket) => {
		io.emit("messages", allmessages);
		socket.broadcast.emit("new_user", "Se ha conectado un nuevo usuario");

		socket.on("writting", (username) => {
			socket.broadcast.emit("writting_user", username);
		});

		socket.on("message", (data) => {
			allmessages.push(data);
			io.emit("messages", allmessages);
		});
		socket.on("disconnect", () => console.log("Usuario desconectado"));
	});
};
