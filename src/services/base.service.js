module.exports = class BaseService {
  constructor(repositoryType) {
    this.repositoryType = repositoryType;
  }
  async getAll() {
    const allItems = await this.repositoryType.getAll();
    return allItems;
  }
  async getOne(id) {
    const item = await this.repositoryType.getOne(id);
    return item;
  }
  async create(data) {
    const newItem = await this.repositoryType.create(data);
    return newItem;
  }
  async update(id, newData) {
    const updatedItem = await this.repositoryType.update(id, newData);
    if (!updatedItem) throw new Error('No such record in database');
    return updatedItem;
  }
  async delete(id) {
    const deletedItem = await this.repositoryType.delete(id);
    if (!deletedItem) throw new Error('No such record in database');
    return deletedItem;
  }
};
