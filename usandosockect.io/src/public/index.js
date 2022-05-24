const socketio = io();

const name = document.getElementById("name");
const message = document.getElementById("message");
const allmessages = document.getElementById("all-messages");
const newUser = document.getElementById("new_user");
const writting = document.getElementById("writting");

message.addEventListener("keyup", (event) => {
	if (event.code == "Enter") {
		if (name.value !== "" && message !== "") {
			socketio.emit("message", { username: name.value, message: message.value.trim() });
			message.value = "";
		} else {
			console.log("Completar el formulario");
		}
	}
});

socketio.on("messages", (alldata) => {
	console.log(alldata);
	allmessages.innerHTML = "";
	const content = "";
	alldata.map((data) => {
		if (data.username === name.value) {
			allmessages.innerHTML += `<div class="me-messages">${data.username}: ${data.message}</div> <br/>`;
		} else {
			allmessages.innerHTML += `<div class="messages">${data.username}: ${data.message}</div> <br/>`;
		}
	});
});

socketio.on("new_user", (message) => {
	newUser.innerHTML = message;
	setTimeout(() => {
		newUser.innerHTML = "";
	}, 3000);
});

message.addEventListener("keyup", (event) => {
	if (name.value !== "") {
		socketio.emit("writting", name.value);
	}
});

socketio.on("writting_user", (username) => {
	writting.innerHTML = username + " esta escribiendo.....";
	setTimeout(() => {
		writting.innerHTML = "";
	}, 3000);
});
