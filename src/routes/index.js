const pizzaRoutes = require('./pizza.routes');
const usersRoutes = require('./users.routes');
const ordersRoutes = require('./orders.routes');
const errorHandler = require('../middlewares/error-handler.middleware');

module.exports = app => {
  app.use('/api/pizza', pizzaRoutes);
  app.use('/api/users', usersRoutes);
  app.use('/api/orders', ordersRoutes);
  app.use(errorHandler);
};
