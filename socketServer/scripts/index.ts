import { Server } from "socket.io";
import { getOwnIP } from "./utils";
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

const PORT = parseInt(process.env.PORT || "3001");

io.listen(PORT);
console.log(`dcs-web-bios Socket server is listening on ${PORT}`);
console.log(
  `dcs-web-client should be configured with http://[${getOwnIP()}]:${PORT}/`
);
console.log(
  `dcs-bios should be configured to broadcast UPD to [${getOwnIP()}] on PORT:${PORT}/`
);
