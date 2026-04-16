const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to ensure JSON content type
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// GET /
app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

// GET /health
app.get('/health', (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});

// GET /me
app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Ayanloye Bushra Olaitan",
    email: "ayanloyeola@gmail.com",
    github: "https://github.com/A-Olarh"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
