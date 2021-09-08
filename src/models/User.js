const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
});

module.exports = model('Users', UserSchema);
