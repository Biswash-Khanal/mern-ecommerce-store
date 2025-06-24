# 🛍️ MERN E-Commerce Store

A full-featured E-Commerce application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), supporting user authentication, product listings, cart management, Stripe payments, and order tracking.

## 🚀 Live Demo

- **Frontend**: [https://your-client-url.vercel.app](https://your-client-url.vercel.app)
- **Backend API**: [https://your-backend-url.vercel.app](https://your-backend-url.vercel.app)

> Replace the URLs with your actual deployed links.

---

## 🧰 Tech Stack

**Frontend**:
- React.js
- Axios
- React Router
- Tailwind CSS / Custom CSS

**Backend**:
- Node.js
- Express.js
- MongoDB & Mongoose
- Stripe API for payments
- Cloudinary for image uploads

**Other Tools**:
- Vercel (Deployment)
- JWT Authentication
- Multer (File Uploads)
- Cookie Parser & CORS

---

## ✨ Features

### 👤 User
- Register/Login (JWT-based authentication)
- Browse products
- Add to cart
- Manage address
- Place orders (Cash on Delivery / Stripe)
- View order history

### 🛒 Seller/Admin
- Add/Edit/Delete products
- View all orders (paid or COD)

---

## 🛠️ Environment Variables

Create a `.env` file inside the `server/` directory and add the following:

PORT=4000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

##📦 Deployment
Frontend: Deployed using Vercel

Backend: Deployed using Vercel with serverless functions
