module.exports = class BaseRepository {
  constructor(Model) {
    this.Model = Model;
  }

  async getAll() {
    const allItems = await this.Model.find();
    return allItems;
  }

  async getOne(id) {
    return await this.findItem(id);
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
    const updateInfo = await this.Model.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          ...newData,
        },
      }
    );
    return this.findItem(id);
  }

  async delete(id) {
    const item = await this.findItem(id);
    if (!item) return null;
    const deletedItem = await item.remove();
    return deletedItem;
  }

  async findItem(id) {
    const item = await this.Model.findById(id);
    return item;
  }
};
