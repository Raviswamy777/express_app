import express from 'express';
import "dotenv/config"

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! From '+ process.env.USER_NAME + process.env.USER_NAME);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
