const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('req.method', 'req.path');
});

app.post('/upload', (req, res) => {
  res.send();
});

app.get('/image', (req, res) => {
  res.send();
});

app.listen(3000, () => console.log('server is on'));
