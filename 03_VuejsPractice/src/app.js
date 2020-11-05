const fs = require('fs');
const express = require('express');

const app = express();
console.log('Hi')

const PORT = 4000;
app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`);
})

app.use(express.static('views'))

app.get('/', function (req, res) {
  console.log('hihi')
  fs.readFile(__dirname + '/views/index.html', (err, data) => {
    if (err) {
      console.log('readFile Error');
    } else {
      console.log('data read Complete!');
    }
  })
})
