#Date me@AIT

I developed Date Me@AIT, a college dating app designed for students to connect, share interests, and foster meaningful relationships. This app was built to streamline the dating process for college students by providing a platform for real-time communication and easy navigation.

#Key Features:
1.User Authentication: Integrated with NextAuth for secure user login via GitHub and Google.
2.Real-time Messaging: Enabled real-time messaging using Pusher for seamless communication between users.
3.Profile Management: Users can create and manage their profiles, and upload images via Cloudinary.
4.Admin Panel: Admin can manage users and their interactions.
5.Responsive Design: Designed to be fully responsive for optimal use on all devices.

#Technologies Used:
1.Frontend: Next.js 14, React, Next UI, Cloudinary.
2.Backend: Node.js, NextAuth, Prisma (PostgreSQL as database).
3.Real-Time Communication: Pusher (for live messages and notifications).
4.User Authentication: GitHub, Google (OAuth via NextAuth).
5.Database: PostgreSQL with Prisma ORM for efficient data handling and migrations.
6.Deployment: Deployed on Vercel.

#Environment Configuration:
1.Cloudinary for image upload and storage.
2.Pusher for push notifications and real-time messaging.
3.NextAuth for secure login with GitHub and Google.
4.Prisma as the ORM for PostgreSQL database management.

#Future Goals:
>Implement additional features like location-based matching, enhanced chat functionalities, and event-based interactions.

> A full-stack dating application built with Next.js 14, Prisma, NextAuth, Pusher, and Cloudinary. 

## URL

[Live App Demo](https://date-me-ait.vercel.app/)

## Tools

- Next.js 14  
- Prisma  
- NextAuth (Auth.js)
- Pusher  
- Cloudinary  
- Vercel  
- PostgreSQL  
- React Hook Form  
- Zod Validation  
- Zustand  
- TypeScript


## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database

## Installation

1. Clone the repo
2. Install packages `npm install`
3. Set up environment variables in .env file
4. Set up Prisma database
```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```
5. Run the development server `npm run dev`
