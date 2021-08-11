const responseMiddleware = (req, res, next) => {
  if (res.err) {
  }
  if (res.data) {
  }
  next();
};

module.exports = responseMiddleware;
