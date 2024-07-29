## JA Jobs

This is a job board that makes jobs opportunities one click away from you. You can search, filter and sort through our job listings.

This app [Small Giant JA JOBS](http://small-giant-assessment.vercel.app/) project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and deployed with [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## Technologies Used

- Node.js (This has to be a Node.js version of version 20.0.0 and above)
- Next.js (v 14.2.5)
- React (^18)
- Typescript (^5)
- TailwindCSS (^3.4.1)
- Eslint (^8)
- Docker
- Vercel


## Steps to install and run the app without Docker

FIrst, clone the repository:

```bash
git clone https://github.com/ChidiOkpala/small-giant-assessment.git
```

Second, install your dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Steps to install and run the app with docker

FIrst, clone the repository:

```bash
git clone https://github.com/ChidiOkpala/small-giant-assessment.git
```

Make sure docker is installed on your local and is running. Start the development server on docker with the following commands:

Run `cd small-giant-assessment`to navigate into the root directory.

Run `npm run docker:bash` to start the application with docker.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots of Working App (Desktop View)

Job Listing View
![](https://github.com/user-attachments/assets/76cd6681-c498-4ce6-b4f3-206ea98e1c17)
-----------
Job Details View
![](https://github.com/user-attachments/assets/559a2f2d-0d35-483a-98e8-b093237e3510)
-----------
Job Application View
![](https://github.com/user-attachments/assets/30447fee-55f8-48ad-a50d-2f139ea135da)
-----------

## Screenshots of Working App (Mobile View)

Job Listing View
![](https://github.com/user-attachments/assets/f2540e89-9de2-4fda-9418-170238f99bfd)
-----------
Job Details View
![](https://github.com/user-attachments/assets/b6766fff-0601-4ea5-91f9-68ecb2cfd6ef)
-----------
Job Application View
![](https://github.com/user-attachments/assets/c065257b-a4d3-4dab-ab38-4dba0155f54b)
-----------



## Best practices
Typescript: Started developing the app using typescript to ensure type checking of moving data around the components and the appliation.<br />
Docker: I developed in a Docker container, writing the Dockerfile as I went On. Also created a production dockerfile<br />
Ui/Ux: I tried to come up with the best User experience while testing the application.<br />

## Improvements
Ui/Ux: This is something that constantly requires improvements and I believe we could make use of more reviews to improve on the experience of the app<br /><br />

## Initial Development plan
Assessment Review: I went through the assessment documents shared. To understand all the requirements.<br /><br />
UI Implementation: I broke down the application into reusable components and with a vision of how the data would move around the applicaion. I built the application page after page, starting with the Job Listing, Job Details and Job Application.<br /><br />
Functionalities: I created my global state using React Context to hold the state of searching, filtering and sorting data.
UI Improvements: Upon review of the initial submission. The design was enhanced to be more visually appealing.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
