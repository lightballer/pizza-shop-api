module.exports = class BaseRepository {
	constructor(model) {
		this.model = model;
	}
	getOne(id) {}
	getAll() {}
	create(data) {}
	update(id, newData) {}
	delete(id) {}
};
