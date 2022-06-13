# DCS WEB BIOS

This is a Web Server (based on NextJS) to provide a Web Interface to communicate with the fantastic DCS World Combat Simulator via the DCS-BIOS package.

## Motivation

I don't have all the toys to have the MFDs or control panels as physical buttons, but I have access to touch screens (RPi3 with official 7" screen, an iPad, etc.) which I can use to control DCS and avoid having to hold the stick with the other hand while I reach for the mouse.

## Who this is for

For those in a similar situation: people wanting a touch screen to do some common DCS interactions, but with some caveats:

- This will require some minor knowledge as to how to setup a server.
- It will work on a RPi (this is my use case), on a Laptop or other server, it could also bee run in the same machine as DCS but not sure how much it will impact performance
- It only makes sense if you have a touch screen of some sort
- At the begining the available interfaces are limited to those planes I own and have need for extra inputs that my HOTAS may not provide (mostly MFDs)
- You need to have fixed and known IP addresses for all the machines involved in the process

## What this is NOT

This is not a hassle-free single-step "run everywhere" package that will just work out of the box. At this stage, this will require configurations, builds, several packages (at least NodeJS), some minor knowledge in networking. It is also not a place to ask for requests of specific features, but feel free to add issues and I will look into every request to see if it's something that I may find useful or can do at this point.

Hope this is helpful. Best regards

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
