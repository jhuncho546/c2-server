const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
  const data = req.body;
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  res.send('Data received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
