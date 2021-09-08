module.exports = class BaseService {
  constructor(repository) {
    this.repository = repository;
  }
  async getAll() {
    const allItems = await this.repository.getAll();
    return allItems;
  }
  async getOne(id) {
    const item = await this.repository.getOne(id);
    return item;
  }
  async _create(data) {
    const newItem = await this.repository.create(data);
    return newItem;
  }
  async update(id, newData) {
    const updatedItem = await this.repository.update(id, newData);
    if (!updatedItem) throw new Error('No such record in database');
    return updatedItem;
  }
  async delete(id) {
    const deletedItem = await this.repository.delete(id);
    if (!deletedItem) throw new Error('No such record in database');
    return deletedItem;
  }
};
