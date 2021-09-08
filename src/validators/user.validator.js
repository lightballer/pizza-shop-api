module.exports = data => {
  const { email, phone, first_name, last_name, orders } = data;
  const EMAIL_REGEX =
    /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

  const PHONE_REGEX = /[+]380[0-9]{9}/;

  if (!email) throw new Error('email is required');
  if (typeof email !== 'string') throw new Error('email type must be string');
  if (!email.match(EMAIL_REGEX)) throw new Error('invalid email format');

  if (!phone) throw new Error('phone is required');
  if (typeof phone !== 'string') throw new Error('phone type must be string');
  if (!phone.match(PHONE_REGEX)) throw new Error('invalid phone format');

  if (!first_name) throw new Error('first_name is required');
  if (typeof first_name !== 'string')
    throw new Error('first_name type must be string');

  if (!last_name) throw new Error('last_name is required');
  if (typeof last_name !== 'string')
    throw new Error('last_name type must be string');
};
