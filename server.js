const express = require('express');
const app = express();
const addressRoutes = require('./routes/addressRoutes');
const port = 3000;

app.use(express.json());

// Use routes
app.use('/profile/address', addressRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
