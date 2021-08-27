const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);

module.exports = () => {
  it('should return Pizza list', done => {
    request.get('/api/pizza/').expect(200).end(done);
  });

  it('post new record should return posted record', done => {
    const mochData = {
      name: 'Chipolo',
      description: 'Onion',
      image_url: '../',
      price_small: 1,
      price_medium: 2,
      price_large: 3,
    };
    request.post('/api/pizza').send(mochData).expect(200).end(done);
  });
};
