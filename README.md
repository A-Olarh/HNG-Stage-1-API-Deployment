📌 Minimal Node.js API (Azure VPS Deployment)

A lightweight REST API built with Node.js + Express, deployed on an Azure VPS using PM2, Nginx reverse proxy, and HTTPS via Let’s Encrypt.

🚀 Live Deployment

🔗 Base URL:
https://ablackgirlchild.24-7.ro

📡 API Endpoints

GET /

{
  "message": "API is running"
}

GET /health

{
  "message": "healthy"
}

GET /me

{
  "name": "Ayanloye Bushra Olaitan",
  "email": "ayanloyeola@gmail.com",
  "github": "https://github.com/A-Olarh"
}

🛠️ Run Locally

Install dependencies
npm install

Start server
node index.js

Test
curl http://localhost:3000/

⚙️ Architecture

Internet
  ↓
HTTPS (443) -Nginx
  ↓
Reverse Proxy
  ↓
Node.js API (PM2)
  ↓
Azure VM

⚙️ Environment Variables
PORT=3000

🔐 Tech Stack
Node.js
Express
Nginx
PM2
Azure VPS
Let’s Encrypt SSL

👤 Author
GitHub: https://github.com/A-Olarh

