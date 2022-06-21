import { Server } from "socket.io";
import { getOwnIP } from "./utils";
import { dcsReporter } from "./dcsReporter";
import { Module, ModuleAliases, moduleAliases } from "./relevantData";
import { previousUpdates } from "./dcsDataSingletons";

const io = new Server({
  cors: { origin: "*" },
});

type ACFT_NAME = ModuleAliases | undefined;

io.on("connection", (socket) => {
  socket.on("connect-module", (module: Module) => {
    const currentModule = (
      previousUpdates["_ACFT_NAME"] || ""
    ).trim() as ACFT_NAME;
    if (moduleAliases[currentModule] !== module) {
      console.log("New request to connect to:", module);
      dcsReporter(module, io);
    } else {
      console.log("Connection to:", module, "already present");
      console.log("Sending current data to new client.");
      for (const identifier in previousUpdates) {
        socket.emit("dcs-data-update", [
          identifier,
          previousUpdates[identifier],
        ]);
      }
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
  `dcs-bios should be configured to broadcast UPD to [${getOwnIP()}] on PORT:${PORT}/`
);
