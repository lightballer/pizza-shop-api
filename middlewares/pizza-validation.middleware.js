const pizzaValidation = (req, res, next) => {
  const body = req.body;
  try {
    if (!body.name) {
      throw new Error('name is required');
    }
    if (!body.description) {
      throw new Error('description is required');
    }
    if (!body.image_url) {
      throw new Error('image_url is required');
    }

    if (!body.price_small) {
      throw new Error('price_small is required');
    }
    if (typeof body.price_small !== 'number') {
      throw new Error('price_small should be a number');
    }

    if (!body.price_medium) {
      throw new Error('price_medium is required');
    }
    if (typeof body.price_medium !== 'number') {
      throw new Error('price_medium should be a number');
    }

    if (!body.price_large) {
      throw new Error('price_large is required');
    }
    if (typeof body.price_large !== 'number') {
      throw new Error('price_large should be a number');
    }
  } catch (err) {
    res.locals.err = err;
    next();
  }
};

module.exports = pizzaValidation;
