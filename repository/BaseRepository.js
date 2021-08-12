const mongoose = require('mongoose');

module.exports = class BaseRepository {
  constructor(Model) {
    this.Model = Model;
  }

  async getAll() {
    const allItems = await this.Model.find();
    return allItems;
  }

  async getOne(id) {
    return this.findItem(id);
  }

  async create(data) {
    const newRecord = new this.Model({
      ...data,
    });
    const newItem = await newRecord.save();
    return newItem;
  }

  async update(id, newData) {
    const item = await this.findItem(id);
    if (!item) return null;
    const updatedItem = await this.Model.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          ...newData,
        },
      }
    );
    return updatedItem;
  }

  async delete(id) {
    const item = await this.findItem(id);
    const deletedItem = await item.remove();
    return deletedItem;
  }

  async findItem(id) {
    const item = await this.Model.findById(id);
    return item;
  }
};
