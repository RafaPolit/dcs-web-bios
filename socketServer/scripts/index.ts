import { Server } from "socket.io";
import { getOwnIP, populateClient } from "./utils";
import { dcsReporter } from "./dcsReporter";
import { Module } from "./relevantData";

const io = new Server({
  cors: { origin: "*" },
});

let currentModule = "" as Module;

io.on("connection", (socket) => {
  socket.on("connect-module", (module: Module) => {
    console.log("Current module:", currentModule);
    console.log("Requesting:", module);
    console.log("moduleAliases[currentModule]:", currentModule);

    if (currentModule !== module) {
      console.log("New request to connect to:", module);
      currentModule = module;
      dcsReporter(module, io);
    } else {
      console.log("Connection to:", module, "already present");
      populateClient(socket);
    }
  });
});

const PORT = parseInt(process.env.PORT || "3001");

io.listen(PORT);
console.log(`dcs-web-bios Socket server is listening on ${PORT}`);
console.log(
  `dcs-web-client should be configured with http://[${getOwnIP()}]:${PORT}/`
);
console.log(
  `dcs-bios should be configured to broadcast UPD to [${getOwnIP()}] on PORT:7777`
);
