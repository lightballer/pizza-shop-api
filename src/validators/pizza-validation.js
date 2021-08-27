const pizzaValidation = data => {
  try {
    const {
      name,
      description,
      image_url,
      price_small,
      price_medium,
      price_large,
    } = data;

    if (!name) {
      throw new Error('name is required');
    }
    if (!description) {
      throw new Error('description is required');
    }
    if (!image_url) {
      throw new Error('image_url is required');
    }

    if (!price_small) {
      throw new Error('price_small is required');
    }
    if (typeof price_small !== 'number') {
      throw new Error('price_small should be a number');
    }

    if (!price_medium) {
      throw new Error('price_medium is required');
    }
    if (typeof price_medium !== 'number') {
      throw new Error('price_medium should be a number');
    }

    if (!price_large) {
      throw new Error('price_large is required');
    }
    if (typeof price_large !== 'number') {
      throw new Error('price_large should be a number');
    }
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
  }
  return null;
};

module.exports = pizzaValidation;
