// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve static files (including pre-rendered map tiles)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
