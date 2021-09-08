module.exports = data => {
  const { status, total_price, date, owner, items } = data;

  const STATUS = ['PENDING', 'CANCELLED', 'COMPLETED'];

  if (!status) throw new Error('status is required');
  if (!STATUS.includes(status)) throw new Error('wrong status format');

  if (!total_price) throw new Error('total price is required');
  if (typeof total_price !== 'number')
    throw new Error('total_price type must be number');

  if (!items) throw new Error('items is required');
  if (!items.length) throw new Error('order must contain at least one item');
};
