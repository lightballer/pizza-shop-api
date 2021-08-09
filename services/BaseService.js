export default class BaseService {
	constructor(repositoryType) {
		this.repositoryType = repositoryType;
	}
	async getAll() {
		const allItems = await repositoryType.getAll();
		return allItems;
	}
	async getOne(id) {
		const item = await repositoryType.getOne(id);
		return item;
	}
	async create(data) {
		const newItem = await repositoryType.create(data);
		return newItem;
	}
	async update(newData) {
		const updatedItem = await repositoryType.update(newData);
		return updatedItem;
	}
	async delete(id) {
		const deletedItem = await repositoryType.delete(id);
		return deletedItem;
	}
}
