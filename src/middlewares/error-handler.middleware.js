module.exports = (err, req, res, next) => {
  res.json({
    error: true,
    message: err.message,
  });
};
