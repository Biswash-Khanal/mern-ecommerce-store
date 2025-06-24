🛍️ MERN E-Commerce Store
A full-featured E-Commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), supporting user authentication, product listings, cart management, Stripe payments, and order tracking.

🚀 Live Demo
Frontend: [client live link here]

Backend API: [backend live link here]

Replace the links above with your actual deployed URLs.

🧰 Tech Stack
Frontend:

React.js

Axios

React Router

Tailwind CSS / Custom CSS

Backend:

Node.js

Express.js

MongoDB & Mongoose

Stripe API for payments

Cloudinary for image uploads

Other Tools:

Vercel (Deployment)

JWT Authentication

Multer (File Uploads)

Cookie Parser & CORS

✨ Features
👤 User
Register/Login (JWT-based auth)

Browse products

Add to cart

Manage address

Place orders (Cash on Delivery / Stripe)

View order history

🛒 Seller/Admin
Add/Edit/Delete products

View all orders (paid or COD)

📁 Project Structure
bash
Copy
Edit
├── client/           # React frontend
│   └── ...
├── server/           # Node/Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── configs/
│   └── server.js
├── README.md
└── .gitignore
🛠️ Environment Variables
Create a .env file in the server/ folder with:

env
Copy
Edit
PORT=4000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
⚙️ Running Locally
bash
Copy
Edit
# Backend
cd server
npm install
npm run server

# Frontend
cd ../client
npm install
npm run dev
📦 Deployment
Frontend: Deployed on Vercel

Backend: Deployed on Vercel (via Node serverless function)

🧠 Future Improvements
Admin dashboard with analytics

Product reviews & ratings

Email notifications

Coupon codes & offers

🙏 Acknowledgements
This project was built as a personal learning experience and practical application of the MERN stack. Thanks to the open-source community and tutorials that helped along the way.
