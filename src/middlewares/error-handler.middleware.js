const errorHandler = (err, req, res, next) => {
  res.json({
    error: true,
    status: res.locals.status,
    message: err.message,
  });
};

module.exports = errorHandler;
