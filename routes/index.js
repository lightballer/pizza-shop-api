const pizzaRoutes = require('./pizzaRoutes');
const usersRoutes = require('./usersRoutes');
const ordersRoutes = require('./ordersRoutes');

module.exports = app => {
  app.use('/api/pizza', pizzaRoutes);
  app.use('/api/users', usersRoutes);
  app.use('/api/orders', ordersRoutes);
};
