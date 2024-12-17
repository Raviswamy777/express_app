import express from 'express';
import "dotenv/config"

const app = express();

app.get('/', (req, res) => {
  res.send('CI-CD Successfull ...');
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
