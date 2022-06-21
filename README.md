# DCS WEB BIOS

This project consists of a Web and Socket Servers to provide a Web Interface to communicate with the fantastic [DCS World Combat Simulator](https://www.digitalcombatsimulator.com/) via the [DCS-BIOS](https://github.com/DCSFlightpanels/dcs-bios) package (the DCSFlightpanels fork).

## Motivation

I don't have all the gadgets to have the MFDs or control panels as physical buttons, but I have access to some touch screens (RPi3 with official 7" screen, an iPad, etc.) which I can use to control DCS and avoid having weird interactions with the H.O.T.A.S while reaching for the mouse.

## Who is this for

For those in a similar situation: people wanting a touch screen to do some common DCS interactions. Please, take into consideration:

- This will require some minor knowledge as to how to start up a server, configure your network IPs, etc.
- It will work on a RPi (this is my use case), on a Laptop or other machine capable of creating a WEB server. It could also bee run in the same machine as DCS (on a virtual VM, for example) but this uses some resources so it amy have some impact in performance
- It only makes sense if you have a touch screen of some sort, if not, better to use the mouse on the actual cockpit
- At the moment, the available interfaces are limited to those modules I own and have need for extra inputs that my HOTAS may not provide (mostly MFDs)
- As hinted above, you need to have fixed and known IP addresses for the machines involved in the process

## What this project is NOT

This is not a hassle-free single-step "run everywhere" package that will just work out of the box. At this stage, this will require configurations, builds, several packages (at least NodeJS), some minor knowledge in networking. I am also probably not going to be able to satisfy everyone's interests or needs at this point or any specific features, but feel free to add issues to the Github repo and I will look into every request to see if it's something that I may find useful or can do at this point.

I Hope this tool is helpful to others. Best regards

## Before you begin

Some minor steps need to be taken in order for this project to work:

- Have fixed (or at least known) IP for the main computer running DCS
- Have fixed (or at least known) IP for the machine running the two services this tool provides: the Web server and the Socket server (they both can run in the same machine and that is the recommended approach for minimal configurations)
- Have DCS-Bios installed and working (I won't cover how to do that, please refer to the extensive info on the [dcs-bios repo](https://github.com/DCSFlightpanels/dcs-bios) )
- Have the latest NodeJS LTS version on the machine you intend to run the Web and Socket servers
- I have only tested this on Debian / Ubutntu machines, so I cannot guarantee it will work on other environments, some experimentation / tweaking may be required.

## First steps

It is **CRUCIAL!** that you configure DCS to broadcast via UDP to the machine running the services.

In order to do so, go into `<Saved Games Folder>/DCS[.openBeta]/Scripts/DCS-BIOS/BIOSConfig.lua` and add (or uncomment) one of the fixed address UDPSender lines. It should read something like:

```
addBIOS.protocol_io.connections = {
	BIOS.protocol_io.DefaultMulticastSender:create(),
	BIOS.protocol_io.TCPServer:create(),
	BIOS.protocol_io.UDPSender:create({ port = 7777, host = "192.168.XX.XX" }),
	BIOS.protocol_io.UDPListener:create({ port = 7778 })
}
```

The line with the `BIOS.protocol_io.UDPSender:create` is the important addition to the default LUA file, where `"192.168.XX.XX"` should be the IP of the machine holding the Web and Socket servers (the RPi, the virtual machine, the laptop, etc.) NOT the DCS running machine.

## Structure of the tools

The system is composed of two different components:

- A main Web Server (client), which sends the UPD commands to port 7778
- A Socket Server, which is the responsible for listening to DCS data changes and report back to the Web Server

The Socket Server is not required, clicking on the different buttons of the pages will send the correct messages to DCS-BIOS, but any feedback from DCS requires the socket server. Since it's relatively easy to configure, I suggest you use both.

## Building the tools

### Socket Server

The first time, you need to install dependencies, and create the `dist` for the server.

From the project's root:

```
$ cd socketServer/
$ npx tsc
```

### Web Server (client)

You also need to build the NextJS package for the client.

From the project's root:

```
$ cd client/
$ yarn build
```

## Running the tools

### Socket Server

From the project's root:

```
$ cd socketServer/
$ node dist/index.js
```

If you want to configure the Socket Server to listen to connections on a different PORT than the default one (3001), you can:

```
$ PORT=4321 node dist/index.js
```

Confirm on the console logs that the PORT you configured worked as expected. For ease of use, the initial console lines also give you insight into your machines IP. It lists all the IPv4-capable devices, so judge by yourself which IP is the right one when configuring the client.

_NOTE:_ Since DCS-BIOS has been configured to SEND UPD messages into the machine running the Socket, there is no additional configuration required. The Socket server will listen to its own IP on por 7777 for broadcasted messages from DCS. Ensure that your local firewalls are allowing the desired flows.

### Web Client

From the project's root:

```
$ cd client/
$ DCS_IP=http://192.168.X.X yarn start
```

This starts a NextJS server on port 3000 (default). If you want to run on different ports, please consult the NextJS documentation.

Please note that it is **required** that you pass the DCS_IP env variable. The DCS-running-machine IP is crucial so that the client can broadcast the UDP commands to DCS-BIOS UDPListener created on port 7778 on the BIOSConfig.lua file discussed earlier. The PORT is not configurable at this point.

With that, you should be able to navigate from a Web browser to: `http://192.168.X.Y:3000` and start using DCS-WEB-BIOS. If you are using a RPi with it's own screen, you can simply: `http://localhost:3000` and that's it.

If the socket server is running on a different port than the default 3001 one, you can:

```
$ DCS_IP=http://192.168.X.X SOCKET_PORT=4321 yarn start
```

If the socket server is running on a different machine than the Web server (not recommended and not fully tested), you can instead do:

```
$ DCS_IP=http://192.168.X.X SOCKET_URL=http://192.168.X.Y:4321 yarn start
```

## Using the Web Client

Right now, there is a fixed set of steps you need to follow:

- Be sure both services (Socket and Web Client) are running
- Launch DCS
- Enter a mission / multiplayer game with your desired module
- Navigate in the DCS Web BIOS to the specific module
- Click on the "cog" icon on the top right
- Click "connect"

This will instruct the socket server to start listening for that module's specific set of instructions.
