const pizzaRoutes = require('./pizza.routes');
const usersRoutes = require('./user.routes');
const ordersRoutes = require('./order.routes');

module.exports = {
  '/api/pizza': pizzaRoutes,
  '/api/user': usersRoutes,
  '/api/order': ordersRoutes,
};
