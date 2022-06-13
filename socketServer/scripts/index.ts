import { Server } from "socket.io";

const io = new Server({
  path: "/dcs-socket/",
  cors: { origin: ["http://localhost:3000"] },
});

io.on("connection", (socket) => {
  console.log("Someone connected");
});

io.listen(3001);
