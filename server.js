const fs = require('fs');
const https = require('https');
const app = require('express')();

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

app.use(require('express').static('build'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

https.createServer(options, app).listen(3000, () => {
  console.log('Server is running on https://localhost:3000');
});



// npm run build
// npm run start:https