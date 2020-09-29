const express = require('express');
const router = express.Router();

router.get('/router', (req, res) => {
  res.send('this is router');
})

router.get('/test', (req, res) => {
  res.send('this is test page');
})

router.get('/getList', (req, res) => {
  res.send('hello');
})

module.exports = router;
