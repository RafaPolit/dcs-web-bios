# DCS WEB BIOS

This project consists of a Web Server (based on NextJS) to provide a Web Interface to communicate with the fantastic [DCS World Combat Simulator](https://www.digitalcombatsimulator.com/) via the [DCS-BIOS](https://github.com/DCSFlightpanels/dcs-bios) package (the DCSFlightpanels fork).

## Motivation

I don't have all the gadgets to have the MFDs or control panels as physical buttons, but I have access to some touch screens (RPi3 with official 7" screen, an iPad, etc.) which I can use to control DCS and avoid having weird interactions with the H.O.T.A.S while I reach for the mouse.

## Who is this for

For those in a similar situation: people wanting a touch screen to do some common DCS interactions. Please, take into consideration:

- This will require some minor knowledge as to how to start up a server, configure your network IPs, etc.
- It will work on a RPi (this is my use case), on a Laptop or other machine capable of creating a WEB server. It could also bee run in the same machine as DCS (on a virtual VM, for example) but this uses some resources so it amy have some impact in performance
- It only makes sense if you have a touch screen of some sort, if not, better to use the mouse on the actual cockpit
- At the moment, the available interfaces are limited to those modules I own and have need for extra inputs that my HOTAS may not provide (mostly MFDs)
- As hinted above, you need to have fixed and known IP addresses for the machines involved in the process

## What this project is NOT

This is not a hassle-free single-step "run everywhere" package that will just work out of the box. At this stage, this will require configurations, builds, several packages (at least NodeJS), some minor knowledge in networking. It is also not a place to ask for requests or specific features, but feel free to add issues to the Github repo and I will look into every request to see if it's something that I may find useful or can do at this point.

Hope this tool is helpful to others. Best regards

## Before you begin

Some minor steps need to be taken in order for this project to work:

- Have fixed (or at least known) IP for the main computer running DCS
- Have fixed (or at least known) IP for the machine running the two services this tool provides: the Web server and the Socket server (they both can run in the same machine and that is the recommended approach for minimal configurations)
- Have DCS-Bios installed and working (I won't cover how to do that, please refer to the extensive info on the [dcs-bios repo](https://github.com/DCSFlightpanels/dcs-bios) )

## First steps

It is **CRUCIAL!** that you configure DCS to broadcast via UDP to the machine running the services.

In order to do so, go into `<Saved Games Folder>/DCS\[.openBeta\]/Scripts/DCS-BIOS/BIOSConfig.lua` and add (uncomment) one of the fixed address UDPSender lines. It should read something like:

```
addBIOS.protocol_io.connections = {
	BIOS.protocol_io.DefaultMulticastSender:create(),
	BIOS.protocol_io.TCPServer:create(),
	BIOS.protocol_io.UDPSender:create({ port = 7777, host = "192.168.XX.XX" }),
	BIOS.protocol_io.UDPListener:create({ port = 7778 })
}
```

... where `"192.168.XX.XX"` should be the IP of the machine holding the Web and Socket servers (the RPi, the virtual machine, the laptop, etc.) NOT the DCS running machine.

## Structure of the tools

The system is composed of two different components:

- A main Web Server (client), which sends the UPD commands to port 7778
- A Socket Server, which is the responsible for listening to DCS data changes and report back to the Web Server

The Socket Server is not required, clicking on the different buttons of the pages will send the correct messages to DCS-BIOS, but any feedback from DCS requires the socket server. Since it's relatively easy to configure, I suggest you use both.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
