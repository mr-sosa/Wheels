const express = require('express');
const router = express.Router();
var { login } = require('./controller');

/**
 * Login
 */
router.post('/login', async function (req, res, next) {
  console.log(req.body);
  const response = await login(req.body);
  if (response.success) {
    res.cookie('token', response.token, { httpOnly: true });
    res.status(200).send(response);
  } else {
    res.status(401).send(response);
  }
});

module.exports = router;