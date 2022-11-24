const jwt = require('jsonwebtoken');
const { keys, ResponseMessages } = require('../../../common');
const { CustomError, parseJoiObject } = require('../../../utils');

module.exports.authMiddleware = (req, res, next) => {
  req.isAuth = true;
  const token = req.headers['x-access-token'] || req.headers.authorization;
  if (!token) {
    return next(new CustomError(
      'Access denied. No token provided.' 
    ));
  }
  try {
    const decoded = jwt.verify(token, keys.jwtKey);
    req.user = decoded;
    return next();
  } catch (ex) {
    return res.status(400).send({
      message: 'Invalid token.Access denied. No token provided.',
      status: false,
    });
  }
};

module.exports.validationMiddleware = (validationObject, isGet = false) => (req, res, next) => {
  req.apiParams = parseJoiObject(validationObject);
  const body = isGet ? req.query : req.body;
  const { error } = validationObject.validate(body);
  if (error) {
    return next(new CustomError({
      ...ResponseMessages.JOI_VALIDATION_ERROR,
         message: error.message, 
    }));
  }
  return next();
};

module.exports.validationPathMiddleware = (validationObject) => (req, res, next) => {
  req.pathParams = parseJoiObject(validationObject);
  const body = req.params;
  console.log(req);
  const { error } = validationObject.validate(body);
  if (error) {
    return next(new CustomError({
      ...ResponseMessages.JOI_VALIDATION_ERROR,
      message: error.message,
    }));
  }
};