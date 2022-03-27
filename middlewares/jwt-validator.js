let jwt = require('jsonwebtoken');
const jwtKey = process.env.JSON_TOKEN;

const checkToken = (req, res, next) => {
  let token = req.cookies.token;
  console.log('token', token);

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Auth token is not supplied',
    });
  }
};

module.exports = {
  checkToken,
};