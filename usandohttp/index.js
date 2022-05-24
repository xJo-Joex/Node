const http = require("http");
const fs = require("fs");
const qs = require("querystring");
var bodyParser = require("body-parser");
const server = http.createServer(onRequest);
server.listen(3000, () => console.log("Mi servidor en el puerto 3000"));
function onRequest(req, res) {
	console.log("Se ha detectado una nueva conexion");
	// bodyParser.json()
	fs.readFile("index.html", (err, data) => {
		if (err) {
			if (err.code === "ENOENT") {
				console.log("El 404, página no encontrada");
				res.setStatus === 404;
			} else {
				res.setStatus === 500;
				console.log("Error del servidor");
			}
			res.end();
		} else {
			if(req.url==="/"){

				if (req.method == "GET") {
					res.setStatus === 202;
					res.setHeader("content-type", "text/html");
					res.write(data);
					res.end();
				} else if (req.method === "POST") {
					let data="";
					req.on("data", (d) => (data += d));
					req.on("end", () => {
						let post = qs.parse(data);
						console.log(post);
						res.end("Elemento creado " + post.color);
					});
			} else if (req.method === "DELETE") {
				res.setStatus === 202;
				res.setHeader("content-type", "text/html");
				res.write("Elemento delele successfully");
				res.end();
			} else if (req.method === "PUT") {
				res.setStatus === 202;
				res.setHeader("content-type", "text/html");
				res.write("Element update");
				res.end();
			}
		}
		else if(req.url==="/users"){
				res.setStatus === 202;
				res.setHeader("content-type", "text/html");
				res.write("Into to users");
				res.end();
			}
		}
	});
}
