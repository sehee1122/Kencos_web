require('dotenv').config();
const { PORT: port } = process.env;
const app = require('./app');

const server = app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

module.exports = server;
