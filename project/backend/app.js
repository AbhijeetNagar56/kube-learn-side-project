const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(cors({
    origin: "http://frontend:80",
}));
app.use(express.json());

// Simple healthcheck route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is healthy ✅' });
});

// Ticket booking route (demo)
app.post('/api/book', (req, res) => {
  const { train, passenger } = req.body;
  if (!train || !passenger) {
    return res.status(400).json({ error: 'Missing train or passenger info' });
  }
  res.json({
    message: `Ticket booked successfully for ${passenger} on train ${train}`,
    confirmed: true
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
