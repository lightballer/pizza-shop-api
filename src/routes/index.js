const pizzaRoutes = require('./pizza.routes');
const usersRoutes = require('./user.routes');
const ordersRoutes = require('./order.routes');
const errorHandler = require('../middlewares/error-handler.middleware');

module.exports = app => {
  app.use('/api/pizza', pizzaRoutes);
  app.use('/api/user', usersRoutes);
  app.use('/api/order', ordersRoutes);
  app.use(errorHandler);
};
