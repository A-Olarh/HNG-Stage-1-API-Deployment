📌 Minimal Node.js API (Azure VPS Deployment)

A lightweight REST API built with Node.js + Express, deployed on an Azure VPS using PM2, Nginx reverse proxy, and HTTPS via Let’s Encrypt.

🚀 **Live Deployment**

🔗 Base URL:
http://102.37.23.222

📡 **API Endpoints

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

🛠️ **Run Locally**

1. Clone the repository:
```bash
   git clone https://github.com/A-Olarh/HNG-Stage-1-API-Deployment.git
   cd HNG-Stage-1-API-Deployment
```


2. Install dependencies:

```bash
npm install
```
3. Start the server:

```bash
node index.js
```
4. Test the endpoints:

```bash
curl http://localhost:3000/me
```

⚙️ **Architecture**

Internet
  ↓
HTTP (80) -Nginx
  ↓
Reverse Proxy
  ↓
Node.js API (PM2)
  ↓
Azure VM

⚙️ **Environment Variables**
PORT=3000

🔐 **Tech Stack**
Node.js
Express
Nginx
PM2
Azure VPS

👤 **Author**
GitHub: https://github.com/A-Olarh

