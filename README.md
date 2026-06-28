# SkillSwap

A modern freelance micro-task marketplace where clients can post tasks and freelancers can submit proposals, get hired, and receive payments securely.

## Live Website

Frontend: https://your-client-site.vercel.app

Backend: https://your-server-site.vercel.app

## Admin Credentials

Email: [admin@gmail.com](mailto:admin@gmail.com)

Password: admin123

---

## Project Overview

SkillSwap is a role-based freelance marketplace built to connect clients and freelancers efficiently.

Clients can post tasks and manage proposals.

Freelancers can browse tasks, submit proposals, and manage accepted projects.

Admins can monitor users, tasks, and platform transactions.

---

## Features

### Authentication & Authorization

* Better Auth Authentication
* Email & Password Login
* Role Based Access Control
* Protected Dashboard Routes
* Proxy Based Route Protection

### Client Features

* Post New Task
* Manage Own Tasks
* Update Tasks
* Delete Tasks
* View Freelancer Proposals
* Accept Proposals
* Payment Integration

### Freelancer Features

* Browse Tasks
* Search Tasks
* Filter Tasks
* Pagination
* Submit Proposal
* View My Proposals
* View Accepted Projects

### Admin Features

* Dashboard Analytics
* Manage Users
* Manage Tasks
* View Transactions
* Platform Statistics

### Home Page Features

* Dynamic Hero Section
* Featured Tasks
* Top Freelancers
* Responsive Navigation
* Mobile Hamburger Menu

### UI Features

* Fully Responsive Design
* Modern Dashboard
* Mobile Friendly Layout
* Loading States
* Toast Notifications
* Premium Card Design
* Smooth Animations with Framer Motion

---

## Technologies Used

### Frontend

* Next.js 15
* React 19
* Tailwind CSS
* DaisyUI
* HeroUI
* Framer Motion
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* MongoDB Atlas

### Authentication

* Better Auth

### Payment

* Stripe Payment Gateway

### Deployment

* Vercel
* Render

---

## Database Collections

### users

* name
* email
* role
* image

### tasks

* title
* category
* description
* budget
* deadline
* clientName
* clientEmail
* status
* createdAt

### proposals

* taskId
* taskTitle
* freelancerName
* freelancerEmail
* clientName
* clientEmail
* proposedBudget
* estimatedDays
* coverLetter
* status
* createdAt

---

## NPM Packages

### Client

```bash
npm install next react react-dom
npm install tailwindcss
npm install daisyui
npm install @heroui/react
npm install better-auth
npm install framer-motion
npm install react-hot-toast
npm install lucide-react
```

### Server

```bash
npm install express
npm install cors
npm install dotenv
npm install mongodb
npm install stripe
```

## Environment Variables

### Client

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_BASE_URL=
```

### Server

```env
PORT=
DB_NAME=
MONGODB_URI=
STRIPE_SECRET_KEY=
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/skillswap-client.git
git clone https://github.com/your-username/skillswap-server.git
```

### Install Dependencies

```bash
npm install
```

### Run Client

```bash
npm run dev
```

### Run Server

```bash
npm run dev
```

## Future Improvements

* Real-time Notifications
* Freelancer Ratings
* Client Reviews
* Advanced Search
* AI Task Matching
* Chat System
* Withdrawal System

## Developed By

Yeasin Arafat

Programming Hero Batch 13

Assignment 10 - SkillSwap
