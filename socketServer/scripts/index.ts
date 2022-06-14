import { Server } from "socket.io";
import { dcsReporter } from "./dcsReporter";
import { Module } from "./relevantData";

const io = new Server({
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.on("connect-module", (module: Module) => {
    console.log("Request to connect to:", module);
    dcsReporter(module, socket);
  });
});

const PORT = 3001;

io.listen(PORT);
console.log(
  `Socket server is listening on ${PORT}.  Connect to http://localhost:${PORT}/`
);
