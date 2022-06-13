import { Server } from "socket.io";

const io = new Server({
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Someone connected");
});

const PORT = 3001;

io.listen(PORT);
console.log(
  `Socket server is listening on ${PORT}.  Connect to http://192.168.0.x/dcs-socket`
);
