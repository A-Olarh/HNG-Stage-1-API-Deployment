# HNG-Stage-1-API-Deployment
A minimal Node.js API deployed on Azure VPS with Nginx reverse proxy and HTTPS

⚙️ Environment Variables
PORT=3000

Architecture:
Internet
  ↓
HTTPS (443) - Nginx
  ↓
Reverse Proxy
  ↓
Node.js API (PM2)
  ↓
Azure VM
